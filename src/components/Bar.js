import Chip from "@material-ui/core/Chip"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Toolbar from "@material-ui/core/Toolbar"

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button"



import React, { Component } from 'react'

class Bubble extends React.Component {

    constructor(probs){
        super(probs);

        console.log(probs);
        this.state = {...probs}
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

        

    return <Toolbar >
            
            <InputBase
                className={classes.input}
                placeholder="Ask me anything"
                inputProps={{ 'aria-label': 'search google maps' }}
                style={{width:"100%", color:"white"}}
            />
            <Button onClick={this.state.sendMessage} label="send" style={{'background-color':"#ffd200"}}>Send</Button>
      
        </Toolbar>
        
    }
  }

export default Bubble;