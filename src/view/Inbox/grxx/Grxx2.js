import React, { Component } from 'react';
import {  Button} from 'antd'
import { connect } from 'react-redux'
import UiSelect from '@/view/components/Select'
import AboutAction from '@/store/action/About.jsx'

class Grxx2 extends Component {
    state={
        name:'ddd',
        value:11,
        selectData:[
            {name:'菠菜', value:1,},
            {name:'菠萝菜白', value:2,},
            {name:'莲花白阿', value:3,}
        ]
    };
    //props修改钩子
    componentWillReceiveProps (props){
        console.log(this.state);
        console.log(props);
    }
    componentDidMount(){
        console.log('grxx2加载完毕')
    }
    //实例创建钩子
    componentWillMount () {
        this.setState({ name:'eeee'})
    }

    render() {
        return(
            <div>
                {this.state.name}

                <h3>Grxx2</h3>
                <UiSelect selectValue={this.state.value}>
                    {
                      this.state.selectData.map((arr,index)=>{
                          return   <UiSelect.UiOption key={index} name={arr.name} value={arr.value}  />
                      })
                    }
                   {/* <UiSelect.UiOption key={2} name={'菠菜'} value={22}></UiSelect.UiOption>
                    <UiSelect.UiOption key={3} name={'二哈'} value={33}></UiSelect.UiOption>*/}
                </UiSelect>
                <Button onClick={()=>{ return this.setState({value:22}) } }>修改</Button>
            </div>)
    }
}

Grxx2 = connect(store =>({store:store}),AboutAction)(Grxx2);
export default Grxx2