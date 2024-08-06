import { DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";


//Tabla Usuarios

export const Usuarios = sequelize.define(
    "Usuarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email:{
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        admin:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                notEmpty: true,
            }
        }
    },
    {
        timestamps: false,
        tableName: "Usuarios"
    }
)
