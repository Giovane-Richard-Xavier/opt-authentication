import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";

const server = express();
server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json());

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});
