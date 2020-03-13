import './rates.css';
import React from "react";

function Rates ({items, bank_name}){
        return(
            <div className='component-table-block'>
                <h2>{bank_name}</h2>
                <div className='hide-rates'>
                    <i className="fa fa-times-circle-o" aria-hidden="true" onClick={() => document.querySelector(`.rates-table-block`).style.display = `none`}></i>
                </div>
                <table className='rates-table'>
                    <thead>
                        <tr><th>Currency</th><th>Ask</th><th>Bid</th></tr>
                    </thead>
                    <tbody>
                    {Object.getOwnPropertyNames(items).map(currency =>
                        <tr><td>{currency}</td><td>{items[currency].ask}</td><td>{items[currency].bid}</td></tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
}

export default Rates;