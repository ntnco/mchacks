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

import ReactMarkdown from 'react-markdown';



import React, { Component } from 'react'
import { Container } from "@material-ui/core"

class Tutorial extends React.Component {

    constructor(probs){
        super(probs);

        this.state = {...probs, index:0, left:false, right:true}

        console.log(this.state);

        this.getTutorial = this.getTutorial.bind(this);
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.handleClickRight = this.handleClickRight.bind(this);
        this.updateButtons = this.updateButtons.bind(this);

        this.updateButtons(0);
    }

    updateButtons(newIndex){

      this.setState(
        {
          left : newIndex == (this.state.tutorial.length -1), 
          right: newIndex == 0
        });

        console.log(this.state);

    }

    getTutorial(){
        return this.state.tutorial[this.state.index];
    }

    handleClickLeft(){
      const newIndex = (this.state.index+1);
        this.setState({index:newIndex});
        this.updateButtons(newIndex);
        
    }  

    handleClickRight(){
      const newIndex = (this.state.index-1);
        this.setState({index:newIndex});
        this.updateButtons(newIndex);
    }
    
    render() {
        return <Container style={{ position:"absolute", top:"50%", transform:"translate(0, -50%)", maxWidth:"10000000px"}}>
        <Card>
            <CardHeader
            title={this.getTutorial().title}
        />

        <CardContent style={{minHeight:"300px", maxHeight:"600px", overflow:"scroll"}}>
          <Typography>
          {this.getTutorial().content.split('\n').map(function(item, key) {
            return (
              <span key={key}>
                {item}
                <br/>
              </span>
            )
          })}
          </Typography>
            
        </CardContent>

        <CardActions>
        <Button key="pre" size="small" color="primary" onClick={this.handleClickRight} disabled={this.state.right}>
          Previous
        </Button>
        <Button key="next" size="small" color="primary" onClick={this.handleClickLeft} disabled={this.state.left}>
          Next
        </Button>
      </CardActions>
        
        </Card>
        </Container>
        ;
    }
  }

export default Tutorial;