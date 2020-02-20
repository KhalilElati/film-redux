import React from "react";
// import "./Description.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Description extends React.Component {
  state = {
    id: this.props.match.params.id
  };
  render() {
    const myTab = this.props.movies.filter(e => e.id === Number(this.state.id));
    if (myTab.length === 0) {
      return <Redirect to="/" />;
    } else {
      const { name,image ,rate } = myTab[0];
      return (
        <div className="details">
      {/* const { name,image ,rate } = myTab[0]; */}
          <img  className="poster" src={image} alt="" />
          <div className="movie-details">
            <p>
              <span>Movie Name:</span> {name}
            </p>
           
            <p>
              <span>Rating:</span>
              <span style={{ color: "gold" }}>★{rate}</span>
            </p>
          </div>
          
        </div>
      );
    }
  }
}
const mapState = state => ({
  movies: state
});
export default connect(mapState)(Description);