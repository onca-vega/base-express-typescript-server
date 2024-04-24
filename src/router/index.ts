import express from "express";

import NotificationController from "@/controllers/notification.controller";

export default function useRouter() {
  const notificationController = new NotificationController();
  const router = express.Router();

  router.use(express.json()); // Sets request data type

  router.get(notificationController.path, notificationController.get);
  router.post(notificationController.path, notificationController.post);

  return router;
}
