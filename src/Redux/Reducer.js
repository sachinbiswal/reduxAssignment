
var initialData={
    name:'sachin'
};
const basicReducer=(storedata=initialData,action)=>{
    if(action.type==="name"){
        return{
            name: action.username,
        }
    }
    return storedata;
}
export default basicReducer;