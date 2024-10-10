import { Router } from "express";
import { ContactMessage } from "../controllers/Contact.controller.js";

const router = Router();

router.route("/message").post(ContactMessage);

export default router;
