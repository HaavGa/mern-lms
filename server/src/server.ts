import "dotenv/config";
import express from "express";
import cors, { type CorsOptions } from "cors";
import connect from "./db";
import env from "./utils/validateEnv";

const PORT = env.PORT;
const app = express();

const isConnected = await connect();

const corsOptions: CorsOptions = {
  origin: env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

if (isConnected) {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}
