import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

export const FormCreate = ( {getProducts, closeModal, mode, id} ) => {
    const [file, setFile] = useState();
    const { enqueueSnackbar } = useSnackbar();

    const [formProducts, setFormProducts] = useState({
        nombre: "",
        codigo: "",
        precio: "",
        marca: "",
        stock:""
    });

    const getOneProduct = async()=>{
        let response = await fetch(`https://aberistain.cl/products/api/v1/productos/findProductId/${id}`)
        let data = await response.json()
        
        setFormProducts({
            nombre: data.data.nombre,
            codigo: data.data.codigo,
            precio: data.data.precio,
            marca: data.data.marca,
            stock: data.data.stock
        });
    }

    useEffect(() => {
        if (mode === "update") {
            getOneProduct();
        }
    }, [mode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormProducts({
            ...formProducts,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
            form.set("nombre", formProducts.nombre);
            form.set("codigo", formProducts.codigo);
            form.set("precio", formProducts.precio);
            form.set("marca", formProducts.marca);
            form.set("stock", formProducts.stock);
            form.append("imagen", file);

            if(mode === "update"){
                let response = await fetch(`https://aberistain.cl/products/api/v1/productos/updateProduct/${id}`, {
                    method: "PUT",
                    body: form,
                });
    
                let data = await response.json();
    
                if (data.code == 200) {
                    enqueueSnackbar(`${data.message}`, { variant: "success" });
                    await getProducts()
                    closeModal()
                    
                    
                } else {
                    enqueueSnackbar(`${data.message}`, { variant: "error" });
                }
            }else{
                let response = await fetch("https://aberistain.cl/products/api/v1/productos/createProduct", {
                    method: "POST",
                    body: form,
                });
    
                let data = await response.json();
    
                if (data.code == 201) {
                    enqueueSnackbar(`${data.message}`, { variant: "success" });
                    await getProducts()
                    closeModal()
                    
                    
                } else {
                    enqueueSnackbar(`${data.message}`, { variant: "error" });
                }
            }
            
    };
  return (
    <>

        <form onSubmit={handleSubmit}>
            <label className="dark:text-white" htmlFor="nombre">Nombre</label>
            <input
                className="rounded-md w-full border-solid border-4 border-indigo-600 mb-4"
                type="text"
                name="nombre"
                id=""
                onChange={handleChange}
                value={formProducts.nombre}
            />

            <label className="dark:text-white" htmlFor="precio">
                Precio
            </label>
            <input
                className="rounded-md w-full border-solid border-4 border-indigo-600 mb-4"
                type="number"
                name="precio"
                id=""
                onChange={handleChange}
                value={formProducts.precio}
            />

            <label className="dark:text-white" htmlFor="marca">
                Marca
            </label>
            <input
                className="rounded-md w-full border-solid border-4 border-indigo-600 mb-4"
                type="text"
                name="marca"
                id=""
                onChange={handleChange}
                value={formProducts.marca}
            />

            <label className="dark:text-white" htmlFor="stock">
                Stock
            </label>
            <input
                className="rounded-md w-full border-solid border-4 border-indigo-600 mb-4"
                type="number"
                name="stock"
                id=""
                onChange={handleChange}
                value={formProducts.stock}
            />


            <label className="block space-y-2" htmlFor="imagen">
                <span>Imagen</span>
                <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    "
                    name="imagen"
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                    }}
                />
            </label>

            <label className="dark:text-white" htmlFor="codigo">
                Código
            </label>
            <input
                className="rounded-md w-full border-solid border-4 border-indigo-600 mb-4"
                type="number"
                name="codigo"
                id=""
                onChange={handleChange}
                value={formProducts.codigo}
            />

                    

            <div className="flex justify-center w-50">
                <button
                    className="rounded-md px-2 py-2 mt-10 w-[10rem] 
                text-white
                bg-gradient-to-r from-sky-500 to-indigo-500
                transition-all hover:from-violet-500 hover:to-fuchsia-500

                "
                    type="submit"
                >
                    {mode === "update" ? "Modificar Producto" : "Crear Producto"}
                </button>
            </div>

        </form>

    </>
)
}
