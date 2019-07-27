import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";

import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count:0,
    arr:[]
    };
    handleClick = (event,id) => {

    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
    event.preventDefault();
    if(!this.state.arr.includes(id)){
      this.state.arr.push(id);
      this.setState({ count: this.state.count + 1 });

    }
else{
  alert("Already clicked");
  this.setState({ count: 0,
  arr:[] });
}

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title 
        title={"Memory Game"} 
          score={this.state.count}
        >  


        </Title>
        <Jumbotron/>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
