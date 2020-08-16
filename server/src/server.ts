import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json()); // permite ver json no console.log()
app.use(routes); // usa as rotas do routes.ts

app.listen(3333);
