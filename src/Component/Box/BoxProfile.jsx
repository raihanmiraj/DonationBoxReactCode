import React , {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import './BoxProfile.css';
import Spinner from '../Spinner/Spinner';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Box extends Component{

 state = {
     data:[],
     urlparam:"",
     loading:true
 }
    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({urlparam:params.number });
      
         axios.get('https://burger-e7ea8-default-rtdb.firebaseio.com/box/'+params.number+'.json')
        .then((response) => {
          console.log(response);
          this.setState({data: response.data});
          this.setState({loading:false})
        })
       .catch((error)=>{
          console.log(error);
       });
      }
    render (){

        const table = Object.keys( this.state.data )
        .map( igKey => {
            return (
                <tr><td>{igKey}</td> <td>{this.state.data[igKey]}</td></tr> );
        } );
        var urlparam = '/boxdetails/' + this.state.urlparam
    var CreateButton =  <div className="d-flex justify-content-center"><Link className="btn btn-primary" to={urlparam} >View Contribution Details</Link> </div>

    var Spin = <Spinner/>
 var TableCreate =      <div class="container" >
    

    
    
    <div className="d-flex justify-content-center"  >
        
<table id="example" class="display nowrap table table-hover" style={{ width: '100%' }} >
<thead>
    <tr>
        <th>Name</th>
        <th>Value</th>
     </tr>
</thead>
<tbody>
{table}
</tbody>
</table> </div>
{CreateButton}

</div>;
var loadingContent = Spin;
if(this.state.loading==false){
    loadingContent = TableCreate;
}

        return (
            <div>
{loadingContent}
            </div>
       
        )
    }
}

export default Box