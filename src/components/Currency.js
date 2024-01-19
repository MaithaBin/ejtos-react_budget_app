import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    const labelCurrency = () => {
        let selectLabel = ""
        switch(currency) {
            case "$":
                selectLabel = "$ Dollar";
                break;
            case "£":
                selectLabel = "£ Pound";
                break;
            case "€":
                selectLabel = "€ Euro";
                break;
            case "₹":
                selectLabel = "₹ Ruppee";
                break;
            default:
                selectLabel = "£ Pound";
                break;
        }
        return selectLabel
    }
    
  return (
    <div className='alert alert-secondary'>Currency ({labelCurrency()}
        <select className='alert alert-secondary' name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>	
    </div>
    );
};
export default Currency;