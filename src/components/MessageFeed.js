import React, { Component,  useEffect, useRef  } from 'react'
import Bubble from './Bubble'
import Bar from './Bar'

import { animateScroll } from "react-scroll";



class MessageFeed extends React.Component {
    
    

    constructor(probs){
        super(probs);
        this.state = {messages : probs.messages}

        this.handleClick = this.handleClick.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        
    }

    

    handleClick(msg){
        let mess = this.state.messages.slice();
        mess.push({text:msg, bot:false});
        
        
        this.setState({...this.state, messages:mess});
    }

    scrollToBottom() {
        animateScroll.scrollToBottom({
          containerId: "jsjsjsjsj"
        });
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    componentDidMount() {
        this.scrollToBottom();
    }
    
    
    render() {
        return <div id="jsjsjsjsj" style={{'margin-bottom':"75px"}}>
            {
                this.state.messages.map((value, i) => {
                    if(i == this.state.messages.lenght-1){
                        return <Bubble {...value}></Bubble>;
                    }  
                    return <Bubble {...value}></Bubble>;;
                })
            }

        
            <Bar onClick={this.handleClick}/>
        </div>;
    }
  }

export default MessageFeed;