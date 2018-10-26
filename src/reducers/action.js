let initAll={
	title:'测试标题',
	list:[]
}
let action=(state=initAll,action)=>{
	switch(action.type){
		case 'ADD':
			state.list=[...state.list,action.value];
			return Object.assign({},state)
			
		break;
		case 'DEL':
			state.list.splice(action.key,1);
			return Object.assign({},state)
		break;
		default:
			return state;
		break;
	}
}
export default action;