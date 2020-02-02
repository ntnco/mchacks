import Chip from "@material-ui/core/Chip"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import SchoolOutlined from "@material-ui/icons/SchoolOutlined"

import Modal from "@material-ui/core/Modal"

import Tutorial from "./Tutorial"


import React, { Component } from 'react'

class Bubble extends React.Component {

    commands = {
        tutorial : this.tutorial,
        default : this.default
    }

    tutorial(text){
        console.log(text);
        return <Chip style={this.style()} onClick={()=> this.setState({...this.state, open:true, tutorial:JSON.parse(text)})} label={<Typography>Here, I found a tutorial for you.</Typography>} avatar={<SchoolOutlined/>}/>;
    }

    default(text){
        return <Typography style={this.style()}>{text.split('\n').map(function(item, key) {
            return (
              <span key={key}>
                {item}
                <br/>
              </span>
            )
          })}</Typography>;
    }

    style = ()=> {
        return {
            'border-radius':"16px", 
            'background-color': this.probs.bot ? '#eeeeee' : '#005daa',
            'color':this.probs.bot?'black':'white',
            'max-width':'70%',
            'margin':'10px',
            'padding':'10px',
            'padding-top':'6px',
            'padding-bottom':'6px',
        }
    };

    constructor(probs){
        super(probs);
        this.probs = probs;
        this.state = {...probs, open:false}

        Object.keys(this.commands).forEach(e => {
            this.commands[e] = this.commands[e].bind(this)
        })
        this.renderText = this.renderText.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    renderText(text){
        if(text.startsWith("$")){
            const index = text.indexOf(" ");
            const command = text.substring(1, index)
            const text2 = text.substring(index + 1);
            return this.commands[command](text2);
        }
        else
            return this.default(text);
    }

    handleClose(){
        this.setState({...this.state, open:false});
    }
    
    render() {
        console.log(this.state.text);

      return <div>
        <Grid container direction="column" alignItems={this.probs.bot?"flex-start" : "flex-end"}>
            {
                this.renderText(this.probs.text)
            }
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <Tutorial tutorial={this.state.tutorial} />
            </Modal>

        </Grid></div>;
    }
  }

export default Bubble;