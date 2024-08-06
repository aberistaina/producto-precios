import express from "express"
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import cors from "cors"
import fileUpload from "express-fileupload";

import productRoutes  from "./routes/products.routes.js"
import usuariosRoutes  from "./routes/usuarios.routes.js"

export const app = express()
app.use(cors());

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());


//Carpeta Publica
app.use("/public", express.static(__dirname + "/public"));

//Endpoints
app.use("/api/v1/productos", productRoutes)
app.use("/api/v1/usuarios", usuariosRoutes)

