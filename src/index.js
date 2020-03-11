import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Banks_list from "./components/banks_list/bank_list";
import BestRates from "./components/best_rate/best_rates";

ReactDOM.render(<Banks_list />, document.querySelector('.main-content-div'));
ReactDOM.render(<BestRates />, document.querySelector('#best-rates-block'));


serviceWorker.unregister();
