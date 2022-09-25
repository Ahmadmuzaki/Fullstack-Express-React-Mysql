import { User } from "../models/UserModel.js"

export const getUsers = async (req, res) => {
    try {
        const respon = await User.findAll();
        res.status(200).json(respon)
    } catch (error) {
        console.log(error.message);
    }
}
export const getUserById = async (req, res) => {
    try {
        const respon = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(respon)
    } catch (error) {
        console.log(error.message);
    }
}
export const createUser = async (req, res) => {
    try {
        await User.create(req.body)
        res.status(201).json({ message: 'New Mahasiswa Created' })
    } catch (error) {
        console.log(error.message);
    }
}