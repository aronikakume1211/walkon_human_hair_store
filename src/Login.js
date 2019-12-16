import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {ButtonContainer} from './Button'
export default class Login extends React.Component {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

 state={
   email:'aronikakume1996@gmail.com',
   password:''
  }
   validateForm=()=> {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

   handleEmail=(event)=>{
     this.setState({
       email:event.target.value
     })
  }
   handleSubmit=(event)=> {
    event.preventDefault();
    alert(this.state.email);
    this.props.history.push('/');
  }
render(){
  return (
    <div className="Login">
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="text"
            value={this.state.email}
            placeholder="enter valid email"
            onChange={e => this.handleEmail}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
        <label>Password </label>
          <FormControl
            value={this.state.password}
            placeholder="password"
            onChange={e => this.handleEmail}
            type="password"
          />
        </FormGroup>
        <ButtonContainer >
          <button
          className="btn btn-primary"
           type="submit"
           value="Login">
             Login
           </button>
          {/* <span className="mr-2">
          
          
          <Button  disabled={!validateForm()} type="submit">
         ............. Login .............
        </Button>
        </span> */}
        </ButtonContainer>

      </form>
    </div>
  );
  }
}