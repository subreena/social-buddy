import React from 'react';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NoMatch from './Components/No Match/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';
import Header from './Components/Header/Header';
import GetStarted from './Components/GetStarted/GetStarted';

const App = () => {
  return (
    <>
    
      <Router>
      <Header></Header>
       <Switch> 
         <Route path="/getStarted">
           <GetStarted></GetStarted>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route exact path="/posts/:postId">
          <PostDetails></PostDetails>
         </Route>
         <Route exact path="/">
         <GetStarted></GetStarted>
         </Route>
         <Route path="*">
           <NoMatch></NoMatch>
         </Route>
       </Switch>
       <Footer></Footer>
         </Router>
      
      
    </>
  );
};

export default App;
