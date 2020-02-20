import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add} from '../actions/actions'

class Inputs extends Component {
    constructor(props){
        super(props)
        this.state={
            titleInput:'',
            rateInput:'',
            imgInput:'',
            clicked:false
            }

    }
    handleName=(event)=>{
        this.setState({
            titleInput:event.target.value
        })
  
    }
    handleRate=(event)=>{
        this.setState({
            rateInput:event.target.value
        })
  
    }
    handleImg=(event)=>{
        this.setState({
            imgInput:event.target.value
        })
  
    }
    clickImg=(event)=>{
        this.setState({
            clicked:true
        })

    }
    
    render() {
        return (
            <div className="input">
                <img onClick={this.clickImg} src="https://newskigame.com/wp-content/uploads/2018/08/Plus-1.jpg"/>   
                        <div className={(this.state.clicked)?'dislpayed':'none'}>
                            <div className="inputs">
                                <form className="form-container">
                         <p>Title</p>                       
                        <input onChange={this.handleName} type="text"/>
                        <p>Rate</p>
                        <input onChange={this.handleRate} type="text"/>
                        <p>Image</p>
                        <input onChange={this.handleImg} type="text"/>
                        <button onClick={()=>this.props.add(this.state.titleInput,this.state.rateInput,this.state.imgInput)} className="btn">Add</button>
                        </form>
                    </div>
                    </div>
                
            </div>
        )
    }
    
}
const mapDispatchToProps=dispatch=>({
    add:(task1,task2,task3)=>dispatch(add(task1,task2,task3))
})
export default connect(null,mapDispatchToProps) (Inputs)