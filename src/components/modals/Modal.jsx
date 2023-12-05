import { useState } from 'react';
import Form from '../Form';
import axios from 'axios';
import { ADD, EDIT } from '../../utils/constants';
/**
 * 
 * add here
 * 
 */
// because we're using the same component for creating new and editing entries
// type can be new or edit
// when its edit we need to pass props so we can edit the form
// when it's new we can just leave all fields empty
const Modal = ({ type, setShowModal, setDbUpdated, entryToEdit }) => {
    const [title, setTitle] = useState(type === 'Edit' ? entryToEdit.title : '');
    const [description, setDescription] = useState(type === 'Edit' ? entryToEdit.description : '');
    const [amount, setAmount] = useState(type === 'Edit' ? entryToEdit.amount : 0);
    const [fromAccount, setFromAccount] = useState(type === 'Edit' ? entryToEdit.fromAccount : '');
    const [toAccount, setToAccount] = useState(type === 'Edit' ? entryToEdit.toAccount : '');
    const [transactionId, setTransactionId] = useState(type === 'Edit' ? entryToEdit.transactionId : '');

    const handleTransaction = async () => { 
      const currentDate = new Date().toISOString();

        if (type === ADD) {
            // form validation before sending out the POST req? mongoose already doing some validation
            const transactionShape = {
                title,
                description,
                amount,
                fromAccount,
                toAccount,
                currentDate,
            }
    
            try {
                const response = await axios.post('http://localhost:3001/add', transactionShape);
                console.log('POST successful.', response)
                setShowModal(false)
                setDbUpdated(true);
            } catch (error) {
                console.error(error)
                // add toast component for errors 
            }
        }

        if (type === EDIT) {
            const transactionShape = {
                title,
                description,
                amount,
                fromAccount,
                toAccount,
                currentDate,
            }
            try {
                const response = await axios.patch(`http://localhost:3001/update/${transactionId}`, transactionShape);
                console.log('PATCH successful.', response)
                setShowModal(false)
                setDbUpdated(true);
            } catch (error) {
                console.error(error)
                // add toast component for errors 
            }
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
                    {`${type} Transaction`}
                  </h3>
                </div>
                {/*body*/}
                <Form
                    type={type}
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    amount={amount}
                    setAmount={setAmount}
                    fromAccount={fromAccount}
                    setFromAccount={setFromAccount}
                    toAccount={toAccount}
                    setToAccount={setToAccount}
                />
                {/*footer */}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleTransaction()}
                  >
                    {type === 'Edit' ? 'Save Changes' : 'Create' }
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
};

export default Modal;