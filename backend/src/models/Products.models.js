import { DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";


//Tabla Productos

export const Products = sequelize.define(
    "Products",
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
        codigo:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        precio:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        marca:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        stock:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        imagen:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
    },
    {
        timestamps: true,
        tableName: "Products"
    }
)
