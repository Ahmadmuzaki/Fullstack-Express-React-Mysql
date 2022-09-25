import { Sequelize } from "sequelize";

export const db = new Sequelize('mahasiswa', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})