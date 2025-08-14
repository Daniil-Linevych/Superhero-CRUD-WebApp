import express, {Express, Request, Response} from "express"

const PORT = 3000;

const app:Express = express();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({"message":"Backend replies!"});
})

app.listen(PORT, (err?:Error)=>{
    if (err){
        return console.log(err);
    }

    console.log("Server is listening on port " + PORT + " ...")
})