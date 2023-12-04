import TransactionTable from './components/TransactionTable';
import { useState, useEffect } from 'react';
import Modal from './components/modals/Modal';
import DeleteConfirmationModal from './components/modals/DeleteConfirmationModal';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]); // can we implement some sort of caching so we don't have to refetch all db entries
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const [dbUpdated, setDbUpdated] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState({});
  const [entryToEdit, setEntryToEdit] = useState();

  // opens a modal depending on type ~ add || edit
  const handleTransaction = (type, entry) => {
    setTransactionType(type);
    setEntryToEdit(entry)
    setShowModal(true)
  };

  const handleEntryToDelete = (entry) => {
    setShowDeleteModal(true)
    setEntryToDelete(entry)
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchTransactions = async () => {
      try {
        const res = await axios.get('http://localhost:3001');
        setData(res.data);
        setIsLoading(false);
        setDbUpdated(false); // not the right way to listen for db updates
      } catch (error) {
        console.error(error)
      }
    }

    if (!isLoading) {
      fetchTransactions()
    }
  }, [dbUpdated]);

  return (
    <main>
      <h1 className='text-2xl text-center'>Transaction List</h1>
      <div className='w-4/5 mx-auto relative'>
        <button 
          onClick={() => handleTransaction('Add')} 
          className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm absolute top-0 right-0 mt-3 mr-3 px-6 py-3 rounded"          >Add</button>
        {/*  suspense component to show loading screen? */}
        <TransactionTable 
          data={data} 
          handleTransaction={handleTransaction}
          setShowDeleteModal={setShowDeleteModal}
          handleEntryToDelete={handleEntryToDelete}
        />
      </div>
      { showModal ? 
        <Modal 
          showModal={showModal} 
          setShowModal={setShowModal}
          type={transactionType}
          setDbUpdated={setDbUpdated}
          entryToEdit={entryToEdit}
        /> 
        : null }
      { showDeleteModal ? <DeleteConfirmationModal 
        entryTitle={entryToDelete.title} 
        setShowDeleteModal={setShowDeleteModal}
        setDbUpdated={setDbUpdated} 
        transactionId={entryToDelete.transactionId}
      /> 
        : null }
    </main>
  );
}

export default App;
