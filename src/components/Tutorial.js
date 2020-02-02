import Chip from "@material-ui/core/Chip"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import SchoolOutlined from "@material-ui/icons/SchoolOutlined"

import Modal from "@material-ui/core/Modal"

import { Widget } from 'rasa-webchat';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



import React, { Component } from 'react'
import { Container } from "@material-ui/core"

class Tutorial extends React.Component {

    constructor(probs){
        super(probs);

        this.state = {...probs, index:0}

        console.log(this.state);

        this.getTutorial = this.getTutorial.bind(this);
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.handleClickRight = this.handleClickRight.bind(this);
    }

    getTutorial(){
        return this.state.tutorial[this.state.index];
    }

    handleClickLeft(){
        this.setState({...this.state, index:this.state.index+1});
        
    }  

    handleClickRight(){
        this.setState({...this.state, index:this.state.index-1});
    }
    
    render() {
        return <Container style={{position:"absolute", top:"50%", transform:"translate(0, -50%)"}}>
        <Card>
            <CardHeader
            title={this.getTutorial().title}
        />

        <CardContent style={{minHeight:"300px"}}>
            {this.getTutorial().content}
        </CardContent>

        <CardActions>
        <Button size="small" color="primary" onClick={this.handleClickLeft}>
          Previous
        </Button>
        <Button size="small" color="primary" onClick={this.handleClickRight}>
          Next
        </Button>
      </CardActions>
        
        </Card>
        </Container>
        ;
    }
  }

export default Tutorial;