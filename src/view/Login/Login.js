import React, { Component } from 'react';
import {Button} from 'antd'
import { connect } from 'react-redux'
class Login extends Component {
     login2=(dd)=> {
        console.log(dd)
       // this.props.login({name:123312,password:312123234})
    };
    login = ()=>{
        this.props.login({name:123312,password:312123234})
    };
    render() {
        return (
            <div className={ 'Inbox_root' && 'ui-size-20'}>
                <h2>登陆</h2>
                <Button onClick={ this.login }> 登陆</Button>
            </div>
        )
    }
}

const login_action ={
     login (passData){
         return { type: 'LOGIN',passData:passData}
     }
};
Login = connect(store => ({store:store}) ,login_action)(Login);

export default Login