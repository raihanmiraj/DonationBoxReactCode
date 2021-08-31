import React , {Component} from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
 
class BoxDetails extends Component{

  
    state = {
        data:[],
        urlparam:"",
        price:0,
        loading:true
   
    }
 componentDidMount() {
           const { match: { params } } = this.props;
           this.setState({urlparam:params.id });
         
            axios.get('https://burger-e7ea8-default-rtdb.firebaseio.com/boxcontribution.json')
           .then((response) => {
             console.log(response);
             this.setState({data: response.data})
             this.setState({
                loading:false
            })
           })
          .catch((error)=>{
             console.log(error);
          });
        
         }
       

    render(){

        var Spin  =   <Spinner/>;


        var ammountOld = 0;
var okey = [];
        const contributionDetailsData = Object.keys(this.state.data)
.map(key=>{

    const regex = /(.*?)month(.*?)year(.*[0-0])/mig;
   let m;
    var month = 0;
    var box_no =0;
    var year = 0;
     if(m= regex.exec(key)){
    month= m[2];
    year = m[3];
    box_no = m[1];
    console.log(box_no);
    if(box_no== this.state.urlparam){
        console.log(this.state.data[key]);
 var makearray = this.state.data[key];
 console.log(makearray);
 var ammount = parseInt(makearray['ammount']) ;
 ammountOld+=ammount;
  return   <tr><td>{makearray['box_number']}</td><td>{makearray['customer_name']}</td><td>{makearray['ammount']}</td></tr>
    }

 

    }
 
})

var tableComponent =      <div class="container" >
<div className="d-flex justify-content-center"  >


<table id="example" class="display nowrap table table-hover" style={{ width: '100%' }} >
<thead>
<tr>
    <th>Box no</th>
    <th>Name</th>
    <th>Contributin</th>
 </tr>
</thead>
<tbody>

{contributionDetailsData}
 
<tr><td>Total</td><td></td><td>{ammountOld}</td></tr>
</tbody>

</table>  </div>
</div>;
var LoadCOntent = Spin;

if(this.state.loading == false){
    LoadCOntent = tableComponent;
}

// this.setState({price:ammountOld });
        return(
            <>
        {LoadCOntent}
            </>
        )
    }

}
export default BoxDetails;