import express from 'express';
import { createUser, getUserById, getUsers } from '../controller/UserController.js';

export const routerUser = express.Router()

routerUser.get('/mahasiswa', getUsers)
routerUser.get('/mahasiswa/:id', getUserById)
routerUser.post('/mahasiswa', createUser)