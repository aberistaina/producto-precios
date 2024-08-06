import { FormCreate } from "./FormCreate";
import { Modal } from "./Modal";


export const ButtonModalOpen = ( {getProducts, openModal, closeModal, isModalOpen, mode, id } ) => {
    

    return (
        <>
        <div className="w-full justify-center flex mt-5">
            <button onClick={openModal} className=" flex items-center bg-[#007bff] text-white rounded-md py-2 px-4 hover:bg-blue-800 ">
                Nuevo Producto
                <svg className="w-4 mx-3 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                </button>
            </div>
        <div className="flex justify-center items-center">

            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <FormCreate getProducts={getProducts} closeModal={closeModal} mode={mode} id={id} />
            </Modal>
        </div>
        </>
    );
};
