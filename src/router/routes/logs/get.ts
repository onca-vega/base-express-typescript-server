import { Request, Response } from "express";

import logs from "@/mocks/logs.json";
import { Log } from "@/models";

function get(req: Request, res: Response) {
  res.json(
    (logs as Array<Log>).sort((a, b) => {
      const aTime = new Date(a.createdAt).getTime();
      const bTime = new Date(b.createdAt).getTime();

      if (aTime > bTime) {
        return -1;
      } else if (aTime < bTime) {
        return 1;
      } else if (a.userId > b.userId) {
        return 1;
      } else {
        return -1;
      }
    })
  );
}

export default get;
