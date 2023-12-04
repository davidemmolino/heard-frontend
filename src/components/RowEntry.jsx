const RowEntry = ({ entry, handleTransaction, handleEntryToDelete }) => {
    return (
        <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300 m-2">{entry.title}</td>
            <td>{entry.description}</td>
            <td>{entry.amount}</td>
            <td>{entry.fromAccount}</td>
            <td>{entry.toAccount}</td>
            <td>
                <button 
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm mr-3 px-6 py-3 rounded"
                    onClick={() => handleTransaction('Edit', entry)}>
                    Edit
                </button>
            </td>
            <td><button 
                className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded"
                onClick={() => handleEntryToDelete(entry)}
            >Remove</button></td>
        </tr>
    )
}

export default RowEntry;