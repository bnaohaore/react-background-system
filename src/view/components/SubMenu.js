import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { post ,axiosAll} from '@/server/api'
    post('http://192.168.0.252:8096/realtime/ops/batch',{name:'ddd'}).then(data=>{

    }).catch(err=>{

    });

    post('http://192.168.0.252:8096/realtime/ops/single',{name:'嘎嘎嘎'}).then(data=>{

    }).catch(err=>{

    });

    axiosAll([post('http://192.168.0.252:8096/realtime/ops/batch',{name:'ddd'}),post('http://192.168.0.252:8096/realtime/ops/single',{name:'嘎嘎嘎'})]).then(data=>{

    });

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@withRouter
@connect(store =>({store:store}),{})
class Sider extends Component {

    constructor(props) {
        super(props); //传递props给component
        this.state = {
            nowPath:'/About',
            //侧边栏信息
            menuData:{

            }
        }

    }
    //监听所有组件更新
    componentWillUpdate(nextProps){

    }
    active_s=()=>{
        this.setState({nowPath:this.props.location.pathname.replace(/\//g ,'&/').replace(/^&/,'').split('&')[0]});
    };
    componentDidMount(){
        this.active_s();
    }
    componentDidUpdate(nextProps,state){
        if(nextProps.location.pathname!== this.props.location.pathname){
            this.active_s();
        }
    }
    //监听store 修改
    componentWillReceiveProps (props){


    }
    handleClick = (e) => {
        this.setState({nowPath:e.key});
        this.props.history.push(e.key);
    };
    render() {
        return (
            <div>
            {this.state.nowPath}
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                selectedKeys={[this.state.nowPath]}
                /*defaultSelectedKeys={[this.state.nowPath]}*/
                defaultOpenKeys={['sub1']}
                mode="inline"
            >

                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="/About">About</Menu.Item>
                        <Menu.Item key="/Inbox">Inbox</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu></div>
        );
    }
}


export default Sider