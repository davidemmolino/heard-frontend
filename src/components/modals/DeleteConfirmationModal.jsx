import axios from 'axios';

const DeleteConfirmationModal = ({entryTitle, transactionId, setShowDeleteModal, setDbUpdated }) => {
    const handleDeleteEntry = async () => {
        try {
            const response = await axios.delete(`http://localhost:3001/delete/${transactionId}`);
            if (response.status === 200) {
                setDbUpdated(true)
                setShowDeleteModal(false);
            }
        } catch (error) {
            // should close modal and show error modal
            console.error('no bueno sir', error)
        }
    };

    return (
    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold">
                    Delete Transaction
                  </h3>
                </div>
                {/*body*/}
                <p className='text-left px-5'>Are you sure you want to delete {entryTitle}?</p>
                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleDeleteEntry()}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default DeleteConfirmationModal;