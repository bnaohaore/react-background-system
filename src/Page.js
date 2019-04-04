import React, { Component } from 'react';
import {  Route , BrowserRouter , Switch,Redirect,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import SubMenu from './view/components/SubMenu'
import routerMap from '@/router/routerMap'
import Login from '@/view/Login/Login'
var add1=function () {
    return { type: 'INCREMENT'}
}
var add2=function () {
    return { type: 'INCREMENT2'}
};
var setPathName=function (pathname) {
    return { type: 'setPathName',pathName:pathname}
};
//使用装饰器挂载属性 等同于 App=withRouter(App)
@connect(store =>({store:store}), {add1,add2,setPathName})
@withRouter
class App extends Component {

    //监听路径修改
    componentDidMount(){
 /*       this.props.history.listen((location, action) => {
            let patharrs=location.pathname;
            this.props.setPathName(patharrs);
        })*/
    }

    constructor(props) {
        super(props); //传递props给component
        this.state = {ccc: 1}
    }
    //组件即将创建钩子
    componentWillMount () {
        this.props.setPathName(this.props.location.pathname);
    }

    render() {
        return this.props.store.isLogin  ? (
            <div className ={`${'App_root'} ${'ui-flex'}`}>

                 <div style={{width:'256px',height:'100%'}}>
                    <SubMenu></SubMenu>
                </div>
                <div style={{height:'100%'}} className={'ui-flex-1'}>
                    <Switch>
                        {
                            routerMap.map((item,index)=>{
                                return  <Route  key={index}  exact={item.exact} path={item.path}
                                   render={
                                        (props) => {
                                            //通过render函数进行路由拦截
                                      /*      console.log(this.props.state);
                                            console.log(props);*/
                                            /*if(props.location.pathname=='/Inbox'){
                                                alert('没有权限');
                                                return ''
                                            }*/
                                            return <item.component {...props}/>
                                        }
                                    }
                                />
                            })
                        }
                        {/*重定向到about*/}
                        <Redirect path="/" to={{pathname: '/About'}} />
                    </Switch>
                </div>

            </div>
        ) : (
            <div className ={`${'App_root'}`}>
                <Switch>
                    <Route path="/Login" component={ Login } />
                    {/*重定向到login*/}
                    <Redirect path="/" to={{pathname: '/Login'}} />
                </Switch>
            </div>
        )
    }
}




class Page extends Component {
    constructor(props) {
        super(props); //传递props给component
        this.state = {

        };
    }
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={App} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default Page;
