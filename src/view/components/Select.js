import React, { Component } from 'react';
import { Popover , Button} from 'antd'
import './uiSelect.scss'
import PropTypes from 'prop-types'

class UiSelect extends Component{
    state={
        selectValue:null,
        selectName:null,
    };
    componentWillMount(){
        this.setState({selectValue:this.props.selectValue,selectName:this.getNameByValue(this.props.selectValue)})
    }
    componentWillReceiveProps(props){
        console.log(props);
        if(props.selectValue!==this.state.selectValue){
            this.setState({
                selectValue:props.selectValue,
                selectName:this.getNameByValue(props.selectValue)
            });
        }
    }
    componentWillUpdate(nextp,nexts){
       /* if(this.state.selectValue!==nextp.selectValue){
            this.setState({selectValue:nextp.selectValue})
        }*/
    }
    changeSelect=(data)=>{

        if(data.value!==this.state.selectValue){
            this.setState({selectValue:data.value,selectName:data.name});
            this.refs.popover.tooltip.setState({visible:false});
        }else {
            this.refs.popover.tooltip.setState({visible:false});
        }

    };
    getNameByValue=(value)=>{
        let ac=this.get_children().filter(child =>{
            return  child.props.value===value
        })[0];
       if(ac){
           return ac.props.name
       }else {
           return '请选择'
       }

    };
    get_children=()=>{
        if(Array.isArray(this.props.children)){
            return this.props.children
        }else {
            return [this.props.children]
        }
    };
    children = ()=>{
      return  this.get_children().map(child =>{ return React.cloneElement(child,{selectValue:this.state.selectValue,changeSelect:this.changeSelect})}) || '' ;
    };
    render(){

        return  <div>
                    <Popover overlayClassName={'ui-select-popover-out'} ref="popover"  placement="bottom"  trigger="click"  content={ this.children() }>
                        <Button>{this.state.selectName}</Button>
                    </Popover >
                 </div>
    }
}

class UiOption extends Component{
    changeSelect = () =>{
        this.props.changeSelect({name:this.props.name,value:this.props.value});
    };
    render(){
        return  <div  onClick={ ()=>this.changeSelect() }
                      className={'ui-cous ui-flex ui-cont-center ui-pdt-4 ui-pdb-4 '+(this.props.selectValue===this.props.value ? 'ui-select-active':'')}
                 >
                    <div className={'ui-mgr-6 ui-mgl-6'} style={{margin:'0 6px 0 6px'}}>{this.props.name}</div>
                </div>
    }
}

UiOption.propTypes = {
    name:PropTypes.string,
    value:PropTypes.number
};
UiOption.defaultProps = {
    name:'',
    value:''
};

UiSelect.UiOption=UiOption;

export default UiSelect