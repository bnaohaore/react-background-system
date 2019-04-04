import React, { Component } from 'react';
import TwoMenu from '@/view/components/TwoMenu'
import {  Route  , Switch,Redirect} from 'react-router-dom'
import routerMap from '@/router/routerMap'
class Inbox extends Component {
    state={
        menuData:[]
    };

    componentDidMount(){
        this.setState({menuData:[{path:'/Inbox/Grxx1',name:'个人信息1'},{path:'/Inbox/Grxx2',name:'个人信息2'}]});
    }
    render() {

        return (
            <div className={ 'Inbox_root' && 'ui-size-20'}>
                <TwoMenu menuData={this.state.menuData}></TwoMenu>
     {/*           <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}*/}
                <div>
                    <Switch>
                        {
                            (()=>{
                                var arr=[];

                                routerMap.forEach((item)=>{
                                    if(item.path === '/Inbox') {
                                    arr =  item.children.map((items,indexs)=>{

                                            return   <Route exact={items.exact} key={ indexs } path={items.path} component={ items.component } />
                                        })
                                    }
                                });
                                return arr
                            })()
                        }
                        {/*重定向到login*/}
                        <Redirect path="/Inbox" to={{pathname: '/Inbox/Grxx1'}} />
                    </Switch>
                </div>
            </div>
        )
    }
}
export default Inbox