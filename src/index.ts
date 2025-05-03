import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import cors from "cors";
import { PORT } from "./env";

dotenv.config();

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST");

	next();
});
app.get("/", (_req: Request, res: Response) => {
	res.status(200).send("Welcome to the backend!");
});

app.use(routes);

app.listen(PORT, async () => {
	console.log(`Server is running on port ${PORT}`);
});
