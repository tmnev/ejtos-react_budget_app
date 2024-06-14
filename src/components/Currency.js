import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    let newCurrencyName = "Pound";
    let newCurrencyValue = "£";
    switch (currency) {
        case '$':
            newCurrencyName = "Dollar";
            break;
        case '£':
            newCurrencyName = "Pound";
            break;
        case '€':
            newCurrencyName = "Euro";
            break;
        case '₹':
            newCurrencyName = "Ruppee";
            break;
        default:
            newCurrencyName = "Pound";
            break;
    }


    const handleCurrencyChange = (event) => {
        const currencyValue = event.target.value;
        const currencyName = event.target.name;

        setNewCurrency(currencyValue);
        newCurrencyValue = currencyValue;
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyValue,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <div className="input-group-prepend">
                <label htmlFor="currencySelect">Currency ({currency} {newCurrencyName})</label>
            </div>
            <select className="custom-select currency-select form-select" id="currencySelect" onChange={handleCurrencyChange}>
                <option value="$" name="Dollar">$ Dollar</option>
                <option defaultValue value="£" name="Pound" selected>£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
