export const Modal = ({ isOpen, closeModal, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                        <div className="flex justify-end p-2">
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 transition duration-150"
                            >
                                &times;
                            </button>
                        </div>
                        
                        <div className="p-6">{children}</div>
                        <div className="flex justify-end p-4">
                            <button
                                onClick={closeModal}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
