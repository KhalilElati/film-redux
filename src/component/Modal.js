import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {add} from '../actions/actions'

class Modale extends Component {
    state={
        titleInput:'',
        rateInput:'',
        imgInput:'',
        clicked:false
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
    handleShow=(event)=>{
        this.setState({clicked:true})
    }
    handleClose=(event)=>{
        this.setState({clicked:false})
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
Add Film      </Button>

      <Modal show={this.state.clicked} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form className="form-container">
                         <p>Title</p>                       
                        <input  onChange={this.handleName} type="text"/>
                        <p>Rate</p>
                        <input  onChange={this.handleRate} type="text"/>
                        <p>Image</p>
                        <input  onChange={this.handleImg} type="text"/>
                        
                 </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.props.add(this.state.titleInput,this.state.rateInput,this.state.imgInput) ;(this.handleClose())}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                
            </div>
        )
    }
    
}
const mapDispatchToProps=dispatch=>({
    add:(task1,task2,task3)=>dispatch(add(task1,task2,task3))
})
export default connect(null,mapDispatchToProps) (Modale)
