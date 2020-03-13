import React, {Component} from 'react';
import './bank_list.css';
import Rates from '../banks_rates/rates'
import ReactDOM from "react-dom";
import Map from "../map/map";

class Banks_list extends Component {

    constructor() {
        super();
        this.state = {
            banks: [],
            cities: {},
            regions: {},
            currencies: {}
        }
        this.getBanks();

    }

    getBanks() {
        fetch(`/getBanksData`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    banks: data.banks,
                    cities: data.cities,
                    regions: data.regions,
                    currencies: data.currencies
                });
                ReactDOM.render(<Map data={this.state.banks}/>, document.querySelector('#map-block'));
            })
            .catch(error => console.error(error))
    }

    changeVisibility(currencies, title){
        document.querySelector(`.rates-table-block`).style.display = `flex`;
        ReactDOM.render(<Rates items={currencies} bank_name={title}/>, document.querySelector('.rates-table-block'));
    }

    render() {
        return (
            <div className='container'>
                {this.state.banks.map(banks =>
                    <div key={banks.id} id={banks.id} className='bank-block'>
                        <h2>{banks.title}</h2>

                        <div className='showRatesButton-block'>
                            <button type='button' className='rates-btn' onClick={() => this.changeVisibility(banks.currencies, banks.title)}>
                                Show exchange rates
                            </button>
                        </div>

                        <div className='address-block'>
                            <a><span className='address-word'>Address:</span> <span className='address-location'>{this.state.cities[banks.cityId]}, {banks.address}</span></a>
                        </div>
                    </div>
                )}
            </div>
        );
    }

}

export default Banks_list;
