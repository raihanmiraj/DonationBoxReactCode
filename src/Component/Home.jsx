import React , {Component} from 'react';
import axios from 'axios';
import Table from './Table';
 import Spinner from './Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery'; 
 
class Home extends Component{
  

    state = {
        getData:"",
        urlparam:'contributiondetails',
        loading:true,
        page:'home'
  }
  componentDidMount(){
 axios.get('https://burger-e7ea8-default-rtdb.firebaseio.com/boxcontribution.json')
        .then((response) => {
          console.log(response);
          this.setState({getData: response.data})
          this.setState({
            loading:false
        })
        })
       .catch((error)=>{
          console.log(error);
       });
  }
  componentDidUpdate() {
    //initialize datatable
    $(document).ready(function () {
        $('#example').DataTable( {
          rowReorder: {
              selector: 'td:nth-child(2)'
          },
          responsive: true,
        bDestroy: true
         } );
    });
  
 }

    render (){
        var Spin  =   <Spinner/>;
        var tableComponent = <div className="container">
        <Table page = {this.state.page} data={this.state.getData} urlparam={this.state.urlparam}/>  
       </div>;

 
var loadContent = Spin;
 if(this.state.loading==false){
    loadContent = tableComponent;
 }
 

        return (
            <> {loadContent} </>
      )
    }
}

export default Home