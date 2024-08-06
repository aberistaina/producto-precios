import {useEffect, useState} from "react"
import { Table } from "../../components/Table"
import { ButtonModalOpen } from "../../components/ButtonModalOpen"

export const AdminPage = () => {
    const [products, setProducts] = useState([])
    const [modalMode, setModalMode] = useState("create")
    const [id, setId] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (mode = "create", id) => {
        setModalMode(mode);
        setId(id)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalMode("create")
    };


    const getProducts = async() =>{
        try {
            
            let response = await fetch("https://aberistain.cl/products/api/v1/productos/findAll")
            let data = await response.json()
            setProducts(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    
    return (
        <>  
            <ButtonModalOpen getProducts = {getProducts} isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} mode={modalMode} id={id}  />
            <Table products={products} getProducts={getProducts} openModal={openModal} />    
        </>
    )
}


