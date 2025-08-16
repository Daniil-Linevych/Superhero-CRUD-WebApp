import {Router, Request, Response} from "express"
import {prisma} from "../db/db"
import {SuperheroData} from "../types/superhero"
import {validateCreateSuperhero, validateUpdateSuperhero} from "./../middlewares/validateSuperhero"
import {checkNicknameUnique} from "../middlewares/checkNicknameUnique"
import {validateFileUpload} from "../middlewares/validateFilesUpload"
import { upload } from "../services/storage.service"

const router:Router = Router();

router.get('/', async (req: Request, res:Response) => {
    try{
        const superheroes = await prisma.superhero.findMany({
            orderBy: {createdAt:'desc'}
        });
        
        res.status(200).json(superheroes);
    } catch (error){
        res.status(500).json({
            error:"Failed to get superheroes!"
        })
    }
})

router.get('/:id', async (req: Request, res:Response) => {
    try{
        const superheroId = Number(req.params.id!);

        const superhero = await prisma.superhero.findUnique({
            where: {id: superheroId}
        });

        if (!superhero){
            return res.status(404).json({error:"Superhero not found!"});
        }

        res.status(200).json(superhero)
    } catch (error){
        res.status(500).json({
            error:"Failed to get superhero!"
        })
    }
})

router.post('/', validateCreateSuperhero, checkNicknameUnique, async (req:Request, res:Response) => {
    try{
        const superheroData: SuperheroData = req.body;

        const superhero = await prisma.superhero.create({
            data: superheroData
        });

        res.status(201).json(superhero);
    } catch(error){
        res.status(500).json({
            error:"Failed create superhero!"
        })
    }
})

router.patch('/:id', validateUpdateSuperhero, checkNicknameUnique, async (req:Request, res:Response) => {
    try{
        const superheroId = Number(req.params.id!);

        const superheroData: Partial<SuperheroData> = req.body; 

        const updatedSuperhero = await prisma.superhero.update({
            where: {id:superheroId},
            data: superheroData
        });

        res.status(201).json(updatedSuperhero);
    } catch(error){
        console.log("Failed update superhero: ", error);
        res.status(500).json({
            error:"Failed update superhero!"
        });
    }
})

router.delete('/:id', async (req:Request, res:Response) => {
    try{
        const superheroId = Number(req.params.id!);
        
        await prisma.superhero.delete({
            where: { id: superheroId }
        });
        
        res.status(200).json({ message: "Superhero deleted successfully" });
    } catch(error){
        res.status(500).json({
            error:"Failed update superhero!"
        })
    }
})

router.post('/:id/upload',  upload.array('images', parseInt(process.env.MAX_UPLOAD_FILES || '5')), validateFileUpload, async (req:Request, res:Response) => {
    try{
        const superheroId = Number(req.params.id);

        const files = req.files as Express.Multer.File[];
        const filePaths = files.map(file => file.path);

        const updatedSuperhero = await prisma.superhero.update({
            where: {id: superheroId},
            data: {
                images: {push: filePaths}
            }
        })

        res.status(200).json({
            message:"Files uploaded successfully!",
            files: filePaths,
            superhero: updatedSuperhero,
        })

    } catch(error){
        console.error('File upload error:', error);
        res.status(500).json({ error: 'Failed to upload files' });
    }
})


export default router;
