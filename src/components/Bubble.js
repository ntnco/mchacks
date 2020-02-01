import Chip from "@material-ui/core/Chip"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"


import React, { Component } from 'react'

class Bubble extends React.Component {

    style = ()=> {
        return {
            'border-radius':"16px", 
            'background-color': this.state.bot ? '#eeeeee' : '#005daa',
            'color':this.state.bot?'black':'white',
            'max-width':'70%',
            'margin':'10px',
            'padding':'10px',
            'padding-top':'6px',
            'padding-bottom':'6px',
        }
    };

    constructor(probs){
        super(probs);

        console.log(probs);
        this.state = {...probs}
    }
    
    render() {
      return <div >
        <Grid container direction="column" alignItems={this.state.bot?"flex-start" : "flex-end"}>
            <Typography style={this.style()}>{this.state.text}</Typography>
               
        </Grid></div>;
    }
  }

export default Bubble;