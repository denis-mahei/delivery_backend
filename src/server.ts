import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import shopRoutes from './routes/routes'

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", shopRoutes);

app.listen(process.env.PORT, () => {
	console.log("Server started! on port: " + process.env.PORT + '!');
})