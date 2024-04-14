import express from "express";

import { logs, submission } from "@/router/routes";

function setRouter() {
  const router = express.Router();

  router.use(express.json()); // Sets request data type

  router.get(logs.path, logs.get);
  router.post(submission.path, submission.post);

  return router;
}

export default setRouter;
