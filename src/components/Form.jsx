const Form = ({ title, setTitle, description, setDescription, amount, setAmount, fromAccount, setFromAccount, toAccount, setToAccount }) => {
    return (
        <div className="relative px-6 flex-auto">
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Title
                    </label>
                    <input 
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
                        id="username" 
                        type="text"
                        value={title}
                    /> 
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Description
                    </label>
                    <textarea 
                        onChange={(e) => setDescription(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
                        id="username" 
                        type="text" 
                        placeholder="Description" 
                        value={description}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Amount
                    </label>
                    <input 
                        onChange={(e) => setAmount(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="username" 
                        type="text" 
                        placeholder="Amount" 
                        value={amount}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        From Account
                    </label>
                    <input 
                        onChange={(e) => setFromAccount(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="username" 
                        type="text" 
                        placeholder="From Account" 
                        value={fromAccount}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        To Account
                    </label>
                    <input 
                        onChange={(e) => setToAccount(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        id="username" 
                        type="text" 
                        placeholder="To Account" 
                        value={toAccount}
                    />
                </div>
            </form>
        </div>
    )
};

export default Form;