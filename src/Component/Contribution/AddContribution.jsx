import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
 
class AddContribution extends Component{

    state = {
        boxlist:"",
        montharray:   [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        yeararray:[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114],
        contributiondata:{
            box_number:"",
            month:"",
            year:"",
            ammount:""
        },
        final:"",
        loading:false,
        message:''
    

    }

    componentDidMount(){
        axios.get('https://burger-e7ea8-default-rtdb.firebaseio.com/box.json')
        .then((response) => {
          console.log(response);
          this.setState({boxlist: response.data})
        })
       .catch((error)=>{
          console.log(error);
       });
    }

    HandleName=(e)=>{
      var boxno =   this.state.contributiondata.box_number;
        this.setState({contributiondata: {
            ...this.state.contributiondata,
            ... this.state.boxlist[boxno] ,
            [e.target.id]: e.target.value
          
        }});
     
    }

    HandleSubmit=(e)=>{
        e.preventDefault();
        this.setState({loading:true});
      
        console.log(this.state.contributiondata);
     var makeString = this.state.contributiondata.box_number+'month'+this.state.contributiondata.month+'year'+this.state.contributiondata.year;   
        axios.put('https://burger-e7ea8-default-rtdb.firebaseio.com/boxcontribution/'+ makeString+'.json', JSON.stringify(this.state.contributiondata) )
        .then( (response)=>{
          console.log(response);
          this.setState({loading:false});
          this.setState({message:"Data Submitted"});
        })
        .catch( (error)=> {
          console.log(error);
        });

    }

  
    render(){
if(this.state.boxlist!=null){
  const AllBoxLoadInSelectBox = Object.keys( this.state.boxlist )
    .map( igKey => {
    return (
  <option value={igKey}>{igKey}</option>
      );
            } );

            const MonthArray = Object.keys(this.state.montharray)
            .map(key =>{
                return (
                    <option value={this.state.montharray[key]}>{this.state.montharray[key]}</option>
                );
            })
   const YearArray = Object.keys(this.state.yeararray)
            .map(key=>{
                return(
                    <option value={this.state.yeararray[key]}>{this.state.yeararray[key]}</option>
                )
            })

var Spin = <Spinner/>
            var formMake = <div className="container">
            <form class="row g-3" onSubmit={this.HandleSubmit}>
<div class="col-md-4">
  <label for="box_number" class="form-label">Box Number</label>
  <select class="form-select" id="box_number" aria-label="Default select example"  onChange={this.HandleName}>
      <option>Select</option>
{AllBoxLoadInSelectBox}
</select>
</div>

<div class="col-md-4">
  <label for="month" class="form-label">Month</label>
  <select id="month" class="form-select"  onChange={this.HandleName} >   <option>Select</option>
      {MonthArray}
   </select> 
</div>

<div class="col-md-4">
  <label for="year" class="form-label">Year</label>
  <select id="year" class="form-select"  onChange={this.HandleName} >   <option>Select</option>
      {YearArray}
   </select> 
</div>

<div class="col-md-4">
  <label for="ammount" class="form-label">Ammount</label>
  <input type="text" class="form-control" id="ammount"  onChange={this.HandleName} />
</div>

<div class="col-12">
  <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>
</div>;
}else{
  formMake = "";
 
}
        
  
var loadContent ;
if(this.state.loading==true || this.state.boxlist==null ){
  loadContent = Spin;
}else if(this.state.loading ==false ){
  loadContent = formMake;
}

    return (
<>
<h1 style={{textAlign:'center', color:"green"}}>{this.state.message}</h1>  
{loadContent}</>
    );
    }

}

export default AddContribution;