import {Router, Request, Response} from "express"
import {prisma} from "../db/db"
import {SuperheroData} from "../types/superhero"

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
        const {id} = req.params;

        if (!id){
            return res.status(400).json({error:"ID is required!"});
        }

        const superhero = await prisma.superhero.findUnique({
            where: {id: parseInt(id)}
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

router.post('/', async (req:Request, res:Response) => {
    try{
        const { nickname, realName, originDescription, superpowers, catchPhrase, images } = req.body;
        const superheroData: SuperheroData = { nickname, realName, originDescription, superpowers, catchPhrase, images };

        if (!nickname || !realName ){
            return res.status(400).json({error:"Nickname and Real Name are required!"});
        }

        if (await nicknameExists(superheroData.nickname)){
            return res.status(400).json({error:"Nickname must be unique!"});
        } 

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

router.patch('/:id', async (req:Request, res:Response) => {
    try{
        const {id} = req.params;
        if (!id){
            return res.status(400).json({error:"ID is required!"});
        }

        const { nickname, realName, originDescription, superpowers, catchPhrase, images } = req.body;
        const superheroData: SuperheroData = {
                ...(nickname && { nickname }),
                ...(realName && { realName }),
                ...(originDescription !== undefined && { originDescription }),
                ...(superpowers !== undefined && { superpowers }),
                ...(catchPhrase !== undefined && { catchPhrase }),
                ...(images !== undefined && { images })
            }

        if (await nicknameExists(nickname, parseInt(id))){
            return res.status(400).json({error:"Nickname must be unique!"});
        } 

        const updatedSuperhero = await prisma.superhero.update({
            where: {id:parseInt(id)},
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
        const { id } = req.params;
        if (!id){
            return res.status(400).json({error:"ID is required!"});
        }
        
        await prisma.superhero.delete({
            where: { id: parseInt(id) }
        });
        
        res.status(200).json({ message: "Superhero deleted successfully" });
    } catch(error){
        res.status(500).json({
            error:"Failed update superhero!"
        })
    }
})

async function nicknameExists(nickname:string,  excludeId?: number):Promise<boolean>{
    const superhero = await prisma.superhero.findFirst({
        where: {nickname:nickname, ...(excludeId && {NOT:{id:excludeId}})}
    })

    return !!superhero
}

export default router;
