import WordCard from './components/WordCard'
import { Button, Row, Col, Input, Select } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './page/HomePage';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage';
import AddWordPage from './page/AddWordPage';

const StyledWrapper = styled.div`
  
`;

function App() {

  return (
    <StyledWrapper>
      <div>
        <div><Link to ="/">Home Page</Link></div>
        <div><Link to ="/login">Login Page</Link></div>
        <div><Link to ="/register">Register Page</Link></div>
        <div><Link to ="/word">AddWord Page</Link></div>
      </div>
      <Switch>

       <Route path="/register">
          <RegisterPage/>
       </Route>

       <Route path="/add-word">
          <AddWordPage/>
       </Route>

       <Route path="/login">
          <LoginPage/>
       </Route>

        <Route path="/">
          <HomePage/>
        </Route>


      </Switch>
      
    </StyledWrapper>
  );


}

export default App;