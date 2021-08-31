import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
class ContributionDetails extends Component{


    state = {
        data:[],
        loading:true
   
    }
       componentDidMount() {
           const { match: { params } } = this.props;
         
            axios.get('https://burger-e7ea8-default-rtdb.firebaseio.com/boxcontribution/'+params.id+'.json')
           .then((response) => {
             console.log(response);
             this.setState({data: response.data});
             this.setState({loading:false})
           })
          .catch((error)=>{
             console.log(error);
          });
         }
     
render(){
const contributionDetailsData = Object.keys(this.state.data)
.map(key=>{
    return (
        <tr><td>{key}</td><td>{this.state.data[key]}</td></tr>
    )
})

var TableData =     <div class="container" >
<div className="d-flex justify-content-center"  >


<table id="example" class="display nowrap table table-hover" style={{ width: '100%' }} >
<thead>
<tr>
    <th>Name</th>
    <th>Value</th>
 </tr>
</thead>
<tbody>

{contributionDetailsData}


</tbody>

</table>  </div>
</div>;

var Spin = <Spinner/>

var loadingContent = Spin;

if(this.state.loading==false){
    loadingContent = TableData;
}




    return(<>
    
{loadingContent}
    </>);
}







}

export default ContributionDetails;