import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
@withRouter
@connect(store =>({store:store}),{})
class TwoMenu extends Component {
    state = {
        menuData:[],
        nowPath: '',
    };
    active_s=()=>{
        let patharrs=this.props.location.pathname.replace(/\//g ,'&/').replace(/^&/,'').split('&');
        this.setState({nowPath:patharrs[0]+patharrs[1]});
    };
    //监听路径修改
    componentDidMount(){
        this.active_s()
    }
    //监听所有组件更新
    componentDidUpdate(nextProps){
        if(nextProps.location.pathname!== this.props.location.pathname){
          this.active_s()
        }
    };
    componentWillUpdate(nextProps,nextState){
        if(nextProps.menuData!==this.props.menuData){
            this.setState({menuData:nextProps.menuData})
        }
    }
    //监听store 修改
    componentWillReceiveProps (props){

    }
    handleClick = (e) => {
        this.props.history.push(e.key);
        this.setState({
            nowPath: e.key,
        });
    };

    render() {

        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.nowPath]}
                mode="horizontal"
            >
                {
                    this.state.menuData.map((item,index)=>{

                           return (
                               <Menu.Item key={item.path}>
                                   <Icon type="mail" />{item.name}
                               </Menu.Item>
                           )
                       
                    })
                }
   {/*             <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </Menu.SubMenu>
                <Menu.Item key="alipay">
                    <span>Navigation Four - Link</span>
                </Menu.Item>*/}
            </Menu>
        );
    }
}

export default TwoMenu