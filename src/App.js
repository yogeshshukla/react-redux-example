import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

// function App() {
//   const [empArr, setEmpArr] = useState([]);
//   return (
    
//   );
// }
function mapStateToPorps(state){
  return state;
}
function mapDispatchToProps(dispatch){
  return(
    {updateState:(obj)=>{
      dispatch({type:"ADDEMP", payload:obj})
    }}
  )
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={empArr:[]};
  }
  addDataEventHandler =()=>{
    this.props.updateState({empId:555, empName:"Gaurave"});
  }
  render(){
    if(this.props.empArr){
      var trArr = this.props.empArr.map((item)=>{
        return(
          <li key={item.empId}>{item.empId}---{item.empName}</li>
        )
      });
    }
   
    return(
    <div>
      <h1>React redux example</h1>
      <ul>
        {trArr}
      </ul>
      <input type="button" value="Add data" onClick={this.addDataEventHandler}/>
    </div>);
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(App);
