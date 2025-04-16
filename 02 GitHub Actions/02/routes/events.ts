import { Router, Request, Response } from "express";
import { InsertOneResult, WithId } from "mongodb";

import db from "../data/database";

const router: Router = Router();

router.get("/", async (_req: Request, res: Response): Promise<any> => {
  const allEvents = (await db.collection("events").find().toArray()) as WithId<Document>[];
  res.json({ events: allEvents });
});

router.post("/", async (req: Request, res: Response): Promise<any> => {
  const eventData = req.body;
  const result = (await db.collection("events").insertOne({ ...eventData })) as InsertOneResult<Document>;
  res.status(201).json({
    message: "Event created.",
    event: { ...eventData, id: result.insertedId },
  });
});

export default router;
