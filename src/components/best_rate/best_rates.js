import React, {Component} from 'react';
import './best_rates.css';


class BestRates extends Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
        this.getData();
    }

    getData(){
        fetch(`/getBestRates`)
            .then(res => res.json())
            .then(resposne => {
                this.setState({data: resposne});
            })
            .catch(error => console.error(error))
    }

    render(){
        return(
            <div className='top-rates-owner'>
                {this.state.data.map(data =>
                    <div className='top-rates-list'>
                        <h2>{data.currency}</h2>
                        <table>
                            <thead>
                                <tr><th>Operation</th><th>Rate</th><th>Bank</th></tr>
                            </thead>
                            <tbody>
                                <tr><th>Ask</th><th>{data.ask}</th><th>{data.ask_bankName}</th></tr>
                                <tr><th>Bid</th><th>{data.bid}</th><th>{data.bid_bankName}</th></tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );

    }

}


export default BestRates;
