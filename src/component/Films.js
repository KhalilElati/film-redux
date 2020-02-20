import React from 'react'
import {connect} from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';
import { remove } from '../actions/actions';
import Modale1 from './Modal1'
import {Link} from 'react-router-dom'


const Films=(props)=>{
    return (
        <div className="films">
            {props.film.map(el=>
                <div > 
                    <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={el.rate}
                    // onStarClick={this.onStarClick.bind(this)}
                    />
                    <td>
                        <div >
                    
                        </div>
                    </td>
                    <img src={el.img} alt="photo"/>
                    <p>{el.title}</p>
                    <Modale1 title={el.title} rate={el.rate} img={el.img} el={el}  />
                    <Link to={"/"+el.id}><button>Description</button></Link>
                    
                   
                    <button onClick={()=>props.Remove(el.id)}>Remove</button>
                    </div>

                )}

        </div>
    )
}
const mapStateToProps=state=>{
    return {film:state}
}
const mapDispatchToProps=dispatch=>({
    Remove:(task)=>dispatch(remove(task))
})
export default connect(mapStateToProps,mapDispatchToProps) (Films)