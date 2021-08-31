import React, {Component} from 'react';
import './Spinner.css';

class Spinner extends Component{
render(){
    return (
    <div class="d-flex justify-content-center"><div class="lds-dual-ring"></div></div>);
}


}

export default Spinner;