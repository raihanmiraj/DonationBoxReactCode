import React , {Component} from 'react';
import axios from 'axios';
 import Table from '../Table';
   import $ from 'jquery'; 
   import Spinner from '../Spinner/Spinner';
class BoxList extends Component{
  

    state = {
        boxlist:"",
        urlparam:'/box',
        page:'boxlist'

    }
 
    componentDidMount(){
 axios.get('https://burger-e7ea8-default-rtdb.firebaseio.com/box.json')
        .then((response) => {
          console.log(response);
          this.setState({boxlist: response.data});
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
        var Spin = <Spinner/>
    var tableComponent =  <div className="container">
    <Table page={this.state.page} data={this.state.boxlist} urlparam={this.state.urlparam}/>  
  </div>;

var loadContent = Spin;

if(this.state.loading ==false){
    loadContent = tableComponent;
}
        

        return (
            <div>


{loadContent}

 

            </div>
        )
    }
}

export default BoxList

 