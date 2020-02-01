import React, { Component } from 'react'
import Bubble from './Bubble'

class MessageFeed extends React.Component {
    
    constructor(probs){
        super(probs);
        this.state = {messages : probs.messages}
    }
    
    render() {
      return <div>
        {
            this.state.messages.map((value, i) => {
                return <Bubble {...value}></Bubble> 
            })
        }
      </div>;
    }
  }

export default MessageFeed;