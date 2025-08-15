import express, {Express, Request, Response} from "express"
import "dotenv/config"
import superheroRoutes from "./routes/SuperheroRoutes"
import {connectDb} from './db/db'

const PORT = process.env.PORT || 3000;

const app:Express = express();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({"message":"Backend replies!"});
})

app.use('/superheroes', superheroRoutes)

app.use((err: any, req: Request, res: Response, next: Function) => {
    console.error(`[${new Date().toISOString()}] Error on ${req.method} ${req.url}:`, err);

    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error"
    });
});

connectDb().then(()=>{
   app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT + " ...");
   }) 
})

