import React from 'react'

const AddTransaction = () => {
    return (
        <div className="form-wrapper">
            <form>
                <div className="input-group income">
                    <input type="text" placeholder="Add Income..." />
                    <input type="number" placeholder="Amount" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form>
                <div className="input-group expense">
                    <input type="text" placeholder="Add Expense..." />
                    <input type="number" placeholder="Amount" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
