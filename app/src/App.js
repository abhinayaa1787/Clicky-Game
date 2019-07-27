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
    arr:[],
    correct:""
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
      this.state.friends.sort(function(a, b) {
        return b.id- a.id;
      });
      this.setState({correct:"Yay!! You guessed a new friend" })


    }
else{
  this.setState({ count: 0,
  arr:[], friends:friends,
  correct:"Oops!! You guessed a friend who was already clicked"

});
}

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title 
        title={"Memory Game"} 
          score={this.state.count}
          correct={this.state.correct}
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
