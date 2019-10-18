import {createStore} from "redux";
export var addEmp = {type:"ADDEMP", payload:{empId:1001, empName:"asha"}};
export var delEmp = function(eId){
    return ({type:"DELEMP", payload:{eId}});
}
export var updEmp = function(OBJ){
    return ({type:"UPDEMP", payload:obj});
}
