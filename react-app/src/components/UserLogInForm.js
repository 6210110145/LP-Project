import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UserLogInForm = () => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 style={{textAlign:"center"}}>Log in</h1>
                </Col>
            </Row>
            <hr />

            <Row>
                <Col>
                <form>
                
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">Email address or User Name</label>
                    <input type="email" id="form2Example1" class="form-control" />
                </div>

               
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" class="form-control" />
                    
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <div class="text-center">
                    <a href='\home' role="button" class="btn btn-primary btn-lg" aria-pressed="true">Sign in</a>
                </div>
                
                <div class="text-center mt-3">
                    <p>Not a member? <a href="\signup">Register</a></p>
                    

                </div>
                </form>
                </Col>
            </Row>
        </Container>
    )
}

export default UserLogInForm;