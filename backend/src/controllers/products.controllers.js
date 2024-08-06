import { Products } from "../models/Products.models.js";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import fs from "fs"
"../../public"


export const findProduct = async (req, res) =>{
    try {
        let {codigo} = req.params
        let producto = await Products.findOne({
            where:{
                codigo
            }
        })
        if(!producto){
            return res.status(400).json({
                code: 400,
                message: "Producto no encontrado"
            })
        }
        res.status(200).json({
            code: 200,
            message: "Producto encontrado",
            data: producto,
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error en el servidor",
        });
    }

}

export const findProductId = async (req, res) =>{
    try {
        let {id} = req.params
        let producto = await Products.findOne({
            where:{
                id
            }
        })
        if(!producto){
            return res.status(400).json({
                code: 400,
                message: "Producto no encontrado"
            })
        }
        res.status(200).json({
            code: 200,
            message: "Producto encontrado",
            data: producto,
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error en el servidor",
        });
    }

}


export const findAll = async (req, res) => {

    try {
        let productos = await Products.findAll({
            order: [["id", "ASC"]],
        });


        res.status(200).json({
            code: 200,
            message: "productos encontrados",
            data: productos,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
};

export const createProduct = async (req, res) => {
    try {
        let { nombre, codigo, precio, marca, stock } = req.body;
        let nombreImagen = req.imagen

        let newProduct = await Products.create({
            nombre,
            codigo,
            precio,
            marca,
            stock,
            imagen: nombreImagen
        });
        res.status(201).json({
            code: 201,
            message: "Producto creado con éxtito",
            data: newProduct,
        });
    } catch (error) {
        if (req.pathImagen) {
            fs.unlink(req.pathImagen, (err) => {
                if (err) {
                    console.error("No se pudo eliminar la imagen:", err);
                } else {
                    console.log("Imagen eliminada con éxito");
                }
            });
        }
        console.log(error.message)
        res.status(500).json({ code: 500, message: "No se pudo crear el producto", error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    
    try {
        let id = req.params.id;
        let product = await Products.findOne({
            where:{
                id
            }
            
        })
        

        if(!product){
            res.status(400).json({
                code: 400,
                message: "El Producto no existe en la base de datos",
            });
        }
        let pathDestino = path.resolve(__dirname, "../public/img/", product.imagen)
        
        await Products.destroy({
            where: {
                id,
            },
        });

        fs.unlinkSync(pathDestino) , (error) =>{
            if(error){
                console.log("no se pudo eliminar la imagen")
            }else{
                console.log("imagen eliminada con éxito")
            }
        }

        
        res.status(200).json({
            code: 200,
            message: "Producto Eliminado Con Éxito",
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "No se pudo eliminar el Producto",
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let { nombre, codigo, precio, marca, stock } = req.body;
        let nombreImagen = req.imagen
        

        let product = await Products.findOne({
            where: {
                id,
            },
        });
        if (!product) {
            return res
                .status(400)
                .json({
                    code: 400,
                    message: "product No Existe en la base de datos",
                });
        }
        
        if(nombreImagen && nombre != product.nombre){
                let pathDestino = path.resolve(__dirname, "../public/img/", product.imagen)
                fs.unlink(pathDestino, (error) => {
                    if (error) {
                        console.error("No se pudo eliminar la imagen:", error);
                    } else {
                        console.log("Imagen eliminada con éxito");
                    }
                });
            }

        let datos = {
            nombre: nombre ?? product.nombre,
            codigo: codigo ?? product.codigo ,
            precio: precio ?? product.precio,
            marca: marca ?? product.marca,
            stock: stock ?? product.stock ,
            imagen: nombreImagen ?? product.imagen
        };

        if(nombre != product.nombre){
            let extension = product.imagen.split(".").pop()
            let nombreImagen = `${nombre}.${extension}`
            datos.imagen = nombreImagen

            let rutaActual = path.resolve(__dirname, "../public/img/", product.imagen )
            let nuevaRuta =  path.resolve(__dirname, "../public/img/", nombreImagen)

            fs.rename(rutaActual, nuevaRuta, (error) => {
                if (error) {
                    console.error('Error al cambiar el nombre del archivo:', error);
                } else {
                    console.log('Nombre del archivo cambiado exitosamente.');
                }
            });

        }

        await Products.update(datos, {
            where: {
                id,
            },
        });

        let productModificado = await Products.findOne({
            where: {
                id,
            },
        });

        res.status(200).json({
            code: 200,
            message: "producto modificado Con Éxito",
            data: productModificado,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
};