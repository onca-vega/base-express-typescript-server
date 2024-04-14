import fs from "fs";
import { validate } from "class-validator";
import { Request, Response } from "express";

import users from "@/mocks/users.json";
import logs from "@/mocks/logs.json";
import { Category, Channel } from "@/constants/enums";
import { Log } from "@/models";
import { SubmissionDTO } from "@/dto";

async function post(req: Request, res: Response) {
  const { body } = req;

  const submission = new SubmissionDTO(body);

  const errors = await validate(submission);

  if (errors.length) {
    res.status(422).json(errors);
    return;
  }

  const now = new Date().toISOString();

  users
    .filter(
      (user) =>
        user.subscribed.includes(submission.category) && user.channels.length
    )
    .forEach((user) => {
      for (const channel of user.channels) {
        const log = new Log({
          createdAt: now,
          category: submission.category as Category,
          channel: channel as Channel,

          message: submission.message,

          userId: user.id,
          userName: user.name,
          userEmail: user.email,
        });

        (logs as Array<Log>).push(log);
      }
    });

  fs.writeFileSync("./src/mocks/logs.json", JSON.stringify(logs), "utf8");

  res.status(201).json({
    message: "Logs succesfully saved",
  });
}

export default post;
