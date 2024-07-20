import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUsers2, 
    getUserById2,
    createUser2,
    updateUser2,
    deleteUser2
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);



router.get('/users2', getUsers2);

router.get('/users2/:id', getUserById2);

router.post('/users2', createUser2);
router.patch('/users2/:id', updateUser2);
router.delete('/users2/:id', deleteUser2);


export default router;
