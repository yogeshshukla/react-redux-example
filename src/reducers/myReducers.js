export var myReducer = function(state={empArr:[{empId:101,empName:"keshav"}]}, action){
    var newState = {...state};
    if(action.type==="ADDEMP"){
        newState.empArr = [...newState.empArr, action.payload];
    }
    if(action.type==="DELEMP"){
        var tempArr = newState.empArr.filter(item=>item.empId!=action.payload.eId);
        newState = [...newState];
    }
    if(action.type==="UPDEMP"){
        var pos = newState.empArr.filter(item=>item.empId!=action.payload.eId);
        tempArr = [...tempArr, action.payload];
        newState = {...newState, empArr:tempArr};
    }
    return newState;
}