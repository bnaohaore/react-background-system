function reduxr(store={num:0,isLogin:true,pathName:'/'}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {...store,num:store.num + 1};
        case 'INCREMENT2':
            return {...store,num:store.num + 2};
        case 'DECREMENT':
            return {...store,num:store.num - 1};
        case 'LOGIN':
            console.log(action);
            return {...store,isLogin:true};
        case 'setPathName':
            return {...store,pathName:action.pathName};
        default:
            return store;
    }
}
export default  reduxr