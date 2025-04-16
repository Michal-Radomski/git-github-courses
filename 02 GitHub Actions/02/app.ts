import express, { Express, Request, Response } from "express";
import path from "path";
import http from "http";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();

import eventRoutes from "./routes/events";

const app: Express = express();

app.use(bodyParser.json());

app.use("/", eventRoutes);

//* Favicon
app.get("/favicon.ico", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/favicon.svg"));
});

//* Test route
app.get("/test", (req: Request, res: Response) => {
  console.log("req.ip:", req.ip);
  res.send("<h1 style='color:blue;text-align:center'>API is running</h1>");
});

//* Port
const portHTTP = (process.env.PORT || 5000) as number;

const httpServer = http.createServer(app);
httpServer.listen({ port: portHTTP }, () => {
  console.log(`🚀 Server is listening at http://localhost:${portHTTP}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});
