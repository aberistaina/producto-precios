import DataTable from "react-data-table-component";
import { columns } from "./Columns";
import { useSnackbar } from "notistack";


export const Table = ({ products, getProducts, openModal }) => {

    const { enqueueSnackbar } = useSnackbar();

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: "#3b82f6",
            },
        },
        rows: {
            style: {
                fontSize: '18px', 
            },
        },
    };
    
    
    const handleClickDelete = async(id) =>{
        try {
            let confirmacion = window.confirm("Está seguro que desea eliminar este producto?")
            if(confirmacion){
                let url = `https://aberistain.cl/products/api/v1/productos/deleteProduct/${id}`
                let response = await fetch(url, {method: "DELETE"})
                let data = await response.json() 
                if (data.code == 200) {
                    enqueueSnackbar(`${data.message}`, { variant: "success" });
                    await getProducts()
                } else {
                    enqueueSnackbar(`${data.message}`, { variant: "error" });
                } 
            }else{
                return
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickUpdate = (id) =>{
        let mode = "update"
        openModal(mode, id)
    }

    return (
        <div className="flex flex-col justify-center   items-center">
                <DataTable 
                className="container mt-10 table-auto w-full border-collapse border bg-zinc-900"
                columns={columns(handleClickDelete, handleClickUpdate)}
                data={products}
                pagination
                highlightOnHover
                responsive
                customStyles={customStyles}
            />
        </div>
    )
}
