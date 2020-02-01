import React from 'react';
import logo from './logo.svg';
import './App.css';

import Bubble from "./components/Bubble";

import Bar from "./components/Bar"
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import MessageFeed from './components/MessageFeed'


import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  paper: {
    paddingBottom: 50,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  appBarBot: {
    top: 'auto',
    bottom: 0
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mess = [{text:"hi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi therehi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},{text:"hi there", bot:true}, {text:"how doing", bot:false},
]

function App() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Conobot
          </Typography>
        </Toolbar>
      </AppBar>

      <MessageFeed messages={mess} />
        
    </React.Fragment>
  );
}

export default App;
