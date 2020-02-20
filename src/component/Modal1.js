import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {edit} from '../actions/actions'

class Modale1 extends Component {
    state={
        titleInput:this.props.title,
        rateInput:this.props.rate,
        imgInput:this.props.img,
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
        Edit
      </Button>

      <Modal show={this.state.clicked} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form className="form-container">
                         <p>Title</p>                       
                        <input name="t" value={this.state.titleInput} onChange={this.handleName} type="text"/>
                        <p>Rate</p>
                        <input name="rate" value={this.state.rateInput} onChange={this.handleRate} type="text"/>
                        <p>Image</p>
                        <input name="img"value={this.state.imgInput} onChange={this.handleImg} type="text"/>
                        
                 </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.props.Edit(this.props.el.id,this.state) ;(this.handleClose())}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                
            </div>
        )
    }
    
}
const mapDispatchToProps=dispatch=>({
    Edit:(task1,task2)=>dispatch(edit(task1,task2))
    
})
export default connect(null,mapDispatchToProps) (Modale1)