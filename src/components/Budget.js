import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        const changedBudget = event.target.value;
        const maxBudget = 20000;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(changedBudget > maxBudget) {
            alert("The value cannot exceed maximum budget of £"+maxBudget);
            return;
        }

        if(changedBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;           
        }

        setNewBudget(changedBudget);
        
        dispatch({
            type: 'SET_BUDGET',
            payload: changedBudget,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
