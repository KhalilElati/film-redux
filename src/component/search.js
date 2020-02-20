
import {connect} from 'react-redux'

import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {searchI,Rate} from '../actions/actions'

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            searchInput:'',
            rating:''
        }
    }
    handleInput=(event)=>{
        this.setState({
            searchInput:event.target.value
        })

    }
    onStarClick=(nextValue, prevValue, name)=> {
        this.setState({rating: nextValue});
      }
    render() {
        return (
            <div>
                    <div onClick={()=>this.props.Rate(this.state.rating)}>
                        <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    // value={el.rate}
                                    onStarClick={this.onStarClick}
                                    
                        />
                    </div>
                    <input type='text'onChange={this.handleInput}/>
                    <button onClick={()=>this.props.searchI(this.state.searchInput)}>Search</button>
                    <p>Minimum Rating</p>
                
                
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    searchI:(task)=>dispatch(searchI(task)),
    Rate:(task)=>dispatch(Rate(task))
})
export default connect(null,mapDispatchToProps) (Search)
