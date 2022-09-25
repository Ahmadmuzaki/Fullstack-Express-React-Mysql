import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controller/UserController.js';

export const routerUser = express.Router()

routerUser.get('/mahasiswa', getUsers)
routerUser.get('/mahasiswa/:id', getUserById)
routerUser.post('/mahasiswa', createUser)
routerUser.patch('/mahasiswa/:id', updateUser)
routerUser.delete('/mahasiswa/:id', deleteUser)