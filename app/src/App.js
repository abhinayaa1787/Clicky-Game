import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";

import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count:0,
    topScore:0,
    arr:[],
    correct:"Click an image to begin",
    style:""
      };
      
       shuffle(friends) {
        let i,
            j,
            temp;
        for (i = friends.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = friends[i];
            friends[i] = friends[j];
            friends[j] = temp;
        }
        return friends;    
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
      this.setState({correct:"Yay!! You guessed a new friend" });
      if(this.state.count>=this.state.topScore)
      {
        this.setState({ topScore: this.state.count + 1 });

      }
this.shuffle(this.state.friends);


    }
else{
  this.setState({ count: 0,
  arr:[], friends:friends,
  correct:"Oops!! Play again"
})
}

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title 
        title={"Clicky Game!!"}
          score={this.state.count}
          correct={this.state.correct}
          topScore={this.state.topScore}
        >  
        </Title>
        <Jumbotron/>
        <Container>   
               {this.state.friends.map(friend => (
          <FriendCard card={this.state.style}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick={this.handleClick}

          />
        ))}
        </Container>
      </Wrapper>
    );
  }
}

export default App;
