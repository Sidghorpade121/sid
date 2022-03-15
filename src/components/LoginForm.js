import React, { Component } from 'react';
import { Form, InputGroup, Button, Row, Col, Container } from 'react-bootstrap';
import "./Form.css"

class UserDetails extends Component {

  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        //input["Add"] = "";
        input["eml"] = "";
        input["pwd"] = "";
    //    input["Add1"] = "";
    //    input["stt"] = "";
    //    input["twn"] = "";
    //    input["cty"] = "";
    //    input["pn"] = "";
      // input["km"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    {/*if (!input["Add"]) {
      isValid = false;
      errors["Add"] = "Please enter your Address.";
    }
    if (!input["Add1"]) {
      isValid = false;
      errors["Add1"] = "Please enter your Address1.";
    }
    if (!input["stt"]) {
      isValid = false;
      errors["stt"] = "Please enter your State.";
    }
    if (!input["twn"]) {
      isValid = false;
      errors["twn"] = "Please enter your Town.";
    }
    if (!input["cty"]) {
      isValid = false;
      errors["cty"] = "Please enter your City.";
    }
    if (!input["pn"]) {
      isValid = false;
      errors["pn"] = "Please enter your Pin.";
    }*/}

    if (!input["eml"]) {
      isValid = false;
      errors["eml"] = "Please enter your email Address.";
    }

    if (typeof input["eml"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["eml"])) {
        isValid = false;
        errors["eml"] = "Please enter valid email address.";
      }
    }

    if (!input["pwd"]) {
      isValid = false;
      errors["pwd"] = "Please enter your Password.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
}

    render() {
        return (<Container>
           <h1 align="center"><b>Staff Login</b></h1>
           <br/>
        <Form onSubmit={this.handleSubmit}>
  <Row>
  
  <Form.Floating className="mb-3">
    <Form.Control
    
      id="floatingEmailCustom"
      type="email"
      name="eml"
      value={this.state.input.eml}
      onChange={this.handleChange}
      placeholder="Email"
    />
    <label htmlFor="floatingInputCustom">Email</label>
    <div className="text-danger">{this.state.errors.eml}</div>
  </Form.Floating>
  </Row>
  <Row>
  <Form.Floating>
    <Form.Control
      id="floatingpwdCustom"
      type="password"
      placeholder="Password"
      name="pwd"
      value={this.state.input.pwd}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
    <div className="text-danger">{this.state.errors.pwd}</div>
  </Form.Floating>

  </Row>
  <br/>
  {/*<Row>
  <Col>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingSttCustom"
      type="text"
      placeholder="State"
      name="stt"
      value={this.state.input.stt}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingInputCustom">State</label>
    <div className="text-danger">{this.state.errors.stt}</div>
  </Form.Floating>
  </Col><Col>
  <Form.Floating>
    <Form.Control
      id="floatingTwnCustom"
      type="text"
      placeholder="Town"
      name="twn"
      value={this.state.input.twn}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingPasswordCustom">Town</label>
    <div className="text-danger">{this.state.errors.twn}</div>
  </Form.Floating>
</Col>
  </Row>
  <Row>
  <Col>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingctyCustom"
      type="text"
      placeholder="city"
      name="cty"
      value={this.state.input.cty}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingInputCustom">City</label>
    <div className="text-danger">{this.state.errors.cty}</div>
  </Form.Floating>
  </Col><Col>
  <Form.Floating>
    <Form.Control
      id="floatingpinCustom"
      type="text"
      placeholder="pin"
      name="pn"
      value={this.state.input.pn}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingPasswordCustom">Pin</label>
    <div className="text-danger">{this.state.errors.pn}</div>
  </Form.Floating>
</Col>
  </Row>
  <Row>
  
  <Form.Floating>
    <Form.Control
      id="floatingkmCustom"
      type="text"
      placeholder="km"
      name="km"
      value={this.state.input.km}
      onChange={this.handleChange}
    />
    <label htmlFor="floatingPasswordCustom">Within KM</label>
    <div className="text-danger">{this.state.errors.km}</div>
  </Form.Floating>

  </Row>*/}
  <br/>
        <Row>
      <Col>
      <div>
      <Button type ="submit" variant="secondary" size="lg">
      Login
    </Button>
  </div>
  </Col>
 
  </Row>
</Form>
        </Container>
        );
    }
}

export default UserDetails;