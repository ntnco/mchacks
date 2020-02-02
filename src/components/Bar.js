import Chip from "@material-ui/core/Chip"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Toolbar from "@material-ui/core/Toolbar"

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";



import React, { Component } from 'react'

class Bubble extends React.Component {

    constructor(probs){
        super(probs);
        this.state = {...probs}

        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleEnter = this.handleEnter.bind(this);


    }

    handleClick(){
        if(this.state.value !== ""){
            this.state.onClick(this.state.value)
            this.state.value = "";    
        }
    }

    handleClick2(event){
        this.setState({...this.state, value:event.target.value})
    }

    handleEnter(event){
        if(event.keyCode == 13){
            this.handleClick();
        }

        
    }
    
    render() {


        const useStyles = () => ({
            root: {
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
            },
            input: {
                
            },
            iconButton: {
                padding: 10,
            },
            divider: {
                height: 28,
                margin: 4,
            },
        });

        const classes = useStyles();

        

    return <AppBar style={{
        top: 'auto',
        bottom: 0, 
        backgroundColor:"#005DAA"
      }}>
    <Toolbar >
            
            <InputBase
                className={classes.input}
                placeholder="Ask me anything"
                inputProps={{ 'aria-label': 'search google maps' }}
                style={{width:"100%", color:"white"}}
                value={this.state.value}
                onChange={this.handleClick2}
                onKeyDown={this.handleEnter}

            />
            <Button label="send" onClick={this.handleClick}  style={{'background-color':"#ffd200"}}>Send</Button>
            
      
        </Toolbar>
        </AppBar>
        
    }
  }

export default Bubble;