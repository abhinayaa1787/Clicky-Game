import React  from "react";
import "./style.css";
class FriendCard extends React.Component {

  render()
  {
  return (
    <a href=" " className="custom-card" onClick={(event) =>{this.props.handleClick(event, this.props.id)}}>

    <div className="card" >
      <div className="img-container">
        <img alt={this.props.name} src={this.props.image} />
      </div>
    </div>
    </a>
  );
}
}



export default FriendCard;
