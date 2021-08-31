
import React from 'react';
import { browserHistory,withRouter ,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import 'datatables.net-rowreorder';
import 'datatables.net-responsive';
import { Button } from 'react-bootstrap';
 

class Table extends React.Component {

//   componentDidUpdate() {
//     //initialize datatable
//     $(document).ready(function () {
//         $('#example').DataTable( {
//           rowReorder: {
//               selector: 'td:nth-child(2)'
//           },
//           responsive: true,
//         bDestroy: true
//          } );
//     });
  
//  }
 
  render(){
    var TableAllData;
    if(  this.props.data  ==null){
      TableAllData="";
    }
  
    else{
      TableAllData = Object.keys( this.props.data )
      .map( igKey => {
  var link = this.props.urlparam+'/'+igKey;
  if(this.props.page == 'home'){
     return (
     <tr>
    <td>{this.props.data[igKey].box_number}</td>
              <td>{this.props.data[igKey].month}</td>
              <td>{this.props.data[igKey].year}</td>
              <td><Link className="btn btn-primary" to={link} >View</Link></td>
              <td>{this.props.data[igKey].customer_name}</td>
              <td>{this.props.data[igKey].address}</td>
           </tr>
                );}
                if(this.props.page == 'boxlist'){
  return(
    <tr>
  
              <td>{this.props.data[igKey].box_number}</td>
              <td>{this.props.data[igKey].customer_name}</td>
              <td><Link className="btn btn-primary" to={link} >View</Link></td>
        </tr>
  );
     }
    } );
    }



 
            var tableheader =   <tr>
            <th>Box No</th>
            <th>month</th>
            <th>year</th>
            <th>View</th>
            <th>Name</th>
            <th>Address</th>
        
        </tr>;
        if(this.props.page == 'boxlist'){
          var tableheader =   <tr>
          <th>Box No</th>
          <th>Name</th>
          <th>View</th>
       
      
      </tr>;
        }
      
  return (
   
  <>
         
          <table id="example" class="display nowrap" style={{ width: '100%' }} >
            <thead>
              {tableheader}
            </thead>
            <tbody>
              
  {TableAllData}             
 
            </tbody>
         
        </table>
        </>  
        
  );
}
}
export default withRouter(Table);
