import { Usuarios } from "../models/Usuarios.models.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    let { nombre, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    try {
        let usuario = await Usuarios.findOne({
            where: {
                email,
            },
        });
        if (usuario) {
            return res
                .status(400)
                .json({
                    code: 400,
                    message: "Ya existe un usuario registrado con ese email",
                });
        }

        await Usuarios.create({
            nombre,
            email,
            password: hash,
        });
        res.status(201).json({
            code: 201,
            message: "Usuario creado con éxito",
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "No se Pudo Crear el Usuario",
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            message: "Login éxitoso",
            usuario: req.usuario,
            token: req.token,
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Ha ocurrido un error en el proceso de autenticación",
        });
    }
};
