import React, { Component } from 'react';
import { connect } from 'react-redux'
import AboutAction from '@/store/action/About.jsx'

class About extends Component {
    //state修改钩子
    componentWillReceiveProps (props){
  /*      console.log(this.props.state);
        console.log(props.state);*/
    }
    //实例创建钩子
    componentWillMount () {
       // this.props.add2();
    }

    render() {
        return(
            <div className={ 'About_root' }>
                <h3>About</h3>
            </div>)
    }
}

About = connect(store =>({store:store}),AboutAction)(About);
export default About