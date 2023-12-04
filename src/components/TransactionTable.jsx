import RowEntry from "./RowEntry";

const TransactionTable = ({ data, handleTransaction, setShowDeleteModal, handleEntryToDelete }) => {
    const columns = ['Title', 'Description', 'Amount', 'From Account', 'To Account'];

    return (
        <table className="mx-auto border p-5">
            <thead>
                <tr>
                    {columns.map((col, idx) => <td key={`col_${idx}`} className="px-8 bg-blue-300">{col}</td>)}
                </tr>
            </thead>
            <tbody>
                {data.map((entry, idx) => (
                    <RowEntry 
                        key={`entry_${idx}`} 
                        entry={entry} 
                        handleTransaction={handleTransaction}
                        setShowDeleteModal={setShowDeleteModal}
                        handleEntryToDelete={handleEntryToDelete}
                    />
                ))}
            </tbody>
        </table>
    )
};

export default TransactionTable;