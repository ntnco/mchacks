import React, { Component,  useEffect, useRef  } from 'react'
import Bubble from './Bubble'
import Bar from './Bar'

import { animateScroll } from "react-scroll";
import socketIOClient from "socket.io-client";
import Chip from "@material-ui/core/Chip"




class MessageFeed extends React.Component {
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }


    constructor(probs){
        super(probs);
        this.state = {messages : probs.messages, waiting:false, buttons:[]}

        this.guid = this.uuidv4();


        this.handleClick = this.handleClick.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.addMsg = this.addMsg.bind(this);

        this.xhr = new XMLHttpRequest()

        // get a callback when the server responds
        this.xhr.addEventListener('load', () => {
        // update the state of the component with the result here
            console.log(this.xhr.responseText);
            JSON.parse(this.xhr.responseText).forEach(e => {
                let response = e.text;
                console.log(response);
                if(response == null || response == "utter_default") 
                    //Please could you rephrase ? I can\'t find an answer to this specific question.
                    response = 'Please could you rephrase ? I can\'t find an answer to this specific question.';

                this.addMsg({text:response, bot:true});

                if(e.buttons != null || e.buttons != undefined){
                    this.setState({...this.state, buttons:e.buttons});
                } else {
                    this.setState({buttons:[]})
                }
            });
            
            
        })

        this.xhr.addEventListener('error', ()=>{
            this.addMsg({text:'Sorry, I can\'t connect to our servers. Please check your internet connection.', bot:true});
        })

        
        
    }

    addMsg(msg){
        const newMessage = this.state.messages.slice();
        newMessage.push(msg);
        this.setState({...this.state, messages:newMessage, waiting:false})
    }

    

    handleClick(msg, optional){
        if(optional === undefined){
            optional = msg;
        }

        this.addMsg({text:optional, bot:false})
        // open the request with the verb and the url
        
        // send the request
        this.xhr.open('POST', 'http://35.245.31.192/api')
        this.xhr.send(JSON.stringify({ sender: this.guid,  message:msg}));
    }

    handleButtonClick(title, payload){
        this.handleClick(title + payload, title);
        this.setState({buttons:[]});
    }

    scrollToBottom() {
        animateScroll.scrollToBottom();
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    componentDidMount() {
        this.scrollToBottom();
    }
    
    
    render() {
        console.log(this.state.messages);

        const message = this.state.messages.slice();

        

        return <div id="jsjsjsjsj" style={{'margin-bottom':"75px"}}>
            {
                message.map((value, i) => {
                    console.log(value.text);
                    return <Bubble key={i} {...value}></Bubble>;
                })
            }

            {
                this.state.buttons.map(e=> {
                    return <Chip style={{margin:"10px", 'margin-right':"0px", 'background-color': "#ffd200"}} label={e.title} onClick={()=> this.handleButtonClick(e.title, e.payload)}/>;
                })
            }

        
            <Bar onClick={this.handleClick}/>
        </div>;
    }
  }

export default MessageFeed;