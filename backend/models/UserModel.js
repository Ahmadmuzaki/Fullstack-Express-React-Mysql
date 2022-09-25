import { DataTypes } from "sequelize";
import { db } from "../config/Database.js";

export const User = db.define('data_mahasiswa', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
}, { freezeTableName: true });

    (async () => {
        await db.sync()
    })();