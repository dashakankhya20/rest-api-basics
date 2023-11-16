import express from 'express';
import { createUser, getUser, updateUser, deleteUser, getOneUser } from '../controllers/users.js';

const router = express.Router();

//all routes here are starting with /users
router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", getOneUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;