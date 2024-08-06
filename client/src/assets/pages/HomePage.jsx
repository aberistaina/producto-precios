import { useEffect, useRef, useState } from "react";

export const HomePage = () => {
    const [codigo, setCodigo] = useState("");
    const [producto, setProducto] = useState(null);
    const [notFound, setNotFound] = useState(false);

  
    let url = "https://aberistain.cl/products/api/v1/productos/findProduct"

    const formRef = useRef(null);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        let code = e.target.value;
        setCodigo(code);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let response = await fetch(`${url}/${codigo}`);
            let data = await response.json();
            console.log(data)
            if (data.code == 200) {
                setProducto(data.data);
                setNotFound(false);
                setTimeout(() => {
                    setCodigo("");
                    setProducto(null);
                }, 5000);
            } else {
                setProducto(null);
                setNotFound(true);
                setTimeout(() => {
                    setCodigo("");
                    setNotFound(false);
                }, 3000);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); //

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input
                    className="absolute left-[-9999px] top-[-9999px]"
                    ref={inputRef}
                    onChange={handleChange}
                    value={codigo}
                    type="text"
                    name=""
                    id=""
                />
            </form>

            {notFound ? (
                <div className="flex flex-col justify-center items-center h-screen bg-[#057EC7] w-screen">
                    <div className="flex justify-center ">
                        <img
                            className="w-2/3 rounded-xl"
                            src="https://aberistain.cl/products/img/logo2.png"
                            alt=""
                        />
                    </div>
                    <h1 className="text-center font-lilita text-7xl text-white pt-10">Producto No Encontrado</h1>
                </div>
            ) : producto ? (
                <div className="flex justify-center flex-col items-center bg-[#057EC7] w-screen h-screen">
                    <div className="flex justify-center ">
                        <img
                            className="w-1/3 rounded-xl"
                            src="https://aberistain.cl/products/img/logo2.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center p-8  items-center">
                        <div className="flex justify-center ">
                            <img
                                className="w-96 rounded-xl"
                                src={`https://aberistain.cl/products/img/${producto.imagen}`}
                                alt={producto.nombre}
                            />
                        </div>

                        <h1 className="text-center font-lilita text-6xl text-white pt-10">
                            {producto.nombre}
                        </h1>
                        <h2 className="text-center font-lilita text-white text-4xl pt-4">
                            Marca: {producto.marca}
                        </h2>
                        <h2 className="text-center font-lilita text-white text-3xl pt-4">
                            Precio: ${producto.precio}
                        </h2>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-[#057EC7] w-screen h-screen">
                        <div className="flex justify-center ">
                            <img
                                className="w-1/3 rounded-xl"
                                src="https://aberistain.cl/products/img/logo2.png"
                                alt=""
                            />
                        </div>
                        <h1 className="text-center font-lilita text-7xl text-white pt-20">
                            ¿NECESITAS UN PRECIO?
                        </h1>
                        <p className="text-center font-lilita text-3xl text-white pt-4">
                            Solo pasa el código de barra del artículo que
                            necesites consultar el precio por el escaner
                        </p>
                        <div className="flex justify-center pt-32">
                            <img
                                className="w-96"
                                src="https://aberistain.cl/products/img/codigobarra.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
