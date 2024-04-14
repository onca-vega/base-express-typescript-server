import express from "express";

import useRouter from "@/router";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", useRouter());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
