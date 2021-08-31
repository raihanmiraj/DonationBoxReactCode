import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
class AddBox extends Component{


 state = {
     boxData:{
        customer_name:"",
        box_number:"",
        mobile_number:"",
        address:"",
        reference:"",
        daily_contribution:"",
        monthly_contribution:"",
        app_user_id:"",
        takareceiveby:"",
        profession:"",
        starting_date:"",
        lifetimecontribution:"",
        underguidanceof:"",
        signature:"",
        emergency_contact:""
     },
     loading:false,
     message:""

    }

      HandleName  = (e)=>{
        this.setState({boxData: {
            ...this.state.boxData,
            [e.target.id]: e.target.value
          
        }})
               }
//  

               HandleSubmit=(e)=>{
                   e.preventDefault();
                   this.setState({loading:true})
                   console.log(this.state.boxData);
                   
                   axios.put('https://burger-e7ea8-default-rtdb.firebaseio.com/box/'+ this.state.boxData.box_number+'.json', JSON.stringify(this.state.boxData) )
                  .then( (response) =>{
                    console.log(response);
                    this.setState({loading:false})
                    this.setState({message:"Data Submitted"});
                  })
                  .catch( (error) =>{
                    console.log(error);
                  });

               }
    render(){
var FormMake = <form class="row g-3" onSubmit={this.HandleSubmit}>
<div class="col-md-4">
  <label for="customer_name" class="form-label">Customer's Name</label>
  <input type="text" class="form-control" id="customer_name"  onChange={this.HandleName} />
</div>

<div class="col-md-4">
  <label for="box_number" class="form-label">Box Number</label>
  <input type="text" class="form-control" id="box_number"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="mobile_number" class="form-label">Mobile Number</label>
  <input type="text" class="form-control" id="mobile_number"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="address" class="form-label">Address</label>
  <input type="text" class="form-control" id="address"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="reference" class="form-label">Reference</label>
  <input type="text" class="form-control" id="reference"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="daily_contribution" class="form-label">Daily Contribution</label>
  <input type="text" class="form-control" id="daily_contribution"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="monthly_contribution" class="form-label">Monthly Contribution</label>
  <input type="text" class="form-control" id="monthly_contribution"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="app_user_id" class="form-label">App User ID</label>
  <input type="text" class="form-control" id="app_user_id"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="takareceiveby" class="form-label">Taka Receive By</label>
  <input type="text" class="form-control" id="takareceiveby"  onChange={this.HandleName} />
</div>

<div class="col-md-4">
  <label for="profession" class="form-label">Profession</label>
  <input type="text" class="form-control" id="profession"  onChange={this.HandleName} />
</div>

  <div class="col-md-4">
  <label for="starting_date" class="form-label">Starting Date</label>
  <input type="text" class="form-control" id="starting_date"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="lifetimecontribution" class="form-label">Lifetime Contribution</label>
  <input type="text" class="form-control" id="lifetimecontribution"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="underguidanceof" class="form-label">Under Guidance Of</label>
  <input type="text" class="form-control" id="underguidanceof"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="signature" class="form-label">Signature</label>
  <input type="text" class="form-control" id="signature"  onChange={this.HandleName} />
</div>
<div class="col-md-4">
  <label for="emergency_contact" class="form-label">Emergency Contact</label>
  <input type="text" class="form-control" id="emergency_contact"  onChange={this.HandleName} />
</div>
<div class="col-12">
  <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>;

var Spin = <Spinner/>

        return (

<div className="container">
<h1 style={{textAlign:'center', color:"green"}}>{this.state.message}</h1>  
{this.state.loading?Spin:FormMake}
</div>
        );
    }

}

export default AddBox;