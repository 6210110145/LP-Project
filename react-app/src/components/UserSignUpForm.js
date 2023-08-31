import React, { useEffect, useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initialState = {
    name: "",
    email: "",
    phone: "",
    LP: "",
    LPProvince: "",
    password: "",
    confirmPass: "",
}

const passwordVerification = {
    isMin: false,
    isMax: false,
    confirmPass: false
}

const phoneVertifiacation = {
    isLength: false
}

const UserSignUPForm = () => {
    const [newUser, setNewUser] = useState(initialState)
    const [passwordError, setPasswordError] = useState(passwordVerification)
    const [phoneCheck, setPhone] = useState(phoneVertifiacation);

    useEffect(() => {}, [newUser])

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setNewUser({...newUser, [name]: value })

        if (name === "password") {
            const isMin = value.length > 4;
            const isMax = value.length < 21;

            setPasswordError({ ...passwordError, isMin, isMax})
        }

        if (name === "confirmPass") {
            setPasswordError({ ...passwordError, 
                               confirmPass: newUser.password === value})
        }

        if (name === "phone") {
            const isLength = value.length == 10;

            setPhone({ ...phoneCheck, isLength})
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    console.log(newUser)

    return(
        <Container>
            <Row>
                <Col>
                <h1>User Register</h1>
                </Col>
            </Row>
            <hr/>

            <Row>
                <Col>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' value={newUser.name} onChange={handleOnChange} 
                                      placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={newUser.email} onChange={handleOnChange} 
                                      placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Your Phone</Form.Label>
                        <Form.Control type="text" name="phone" value={newUser.phone} onChange={handleOnChange} 
                                      placeholder="ไม่ต้องเว้นวรรค" />
                        <ul><li className={phoneCheck.isLength ? "text-success" : "text-danger"}>ผ่าน</li></ul>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>เลขป้ายทะเบียน (Ex. ฟฟ1234)</Form.Label>
                        <Form.Control type="text" name="LP" value={newUser.LP} onChange={handleOnChange} 
                                      placeholder="ไม่ต้องเว้นวรรค" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>จังหวัดตามป้ายทะเบียน</Form.Label>
                        <Form.Control type="text" name="LPProvince" value={newUser.LPProvince} onChange={handleOnChange} 
                                      placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={newUser.password} onChange={handleOnChange} 
                                       placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmPass" value={newUser.confirmPass} onChange={handleOnChange} 
                                    placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Text>
                        {!passwordError.confirmPass && (
                        <div className="text-danger mb-3">Password doesn't match</div>
                        )}    
                    </Form.Text>

                    <ul className="mb-3">
                        <li className={passwordError.isMin ? "text-success" : "text-danger"}>รหัสผ่านต้อง 4 ตัวขึ้นไป</li>
                        <li className={passwordError.isMax ? "text-success" : "text-danger"}>รหัสผ่านห้ามเกิน 20 ตัว</li>
                    </ul>

                    <Button variant="primary" type="submit" 
                            disabled={Object.values(passwordError, phoneCheck).includes(false)}>
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>

            <Row>
                <Col className="mt-3">
                If you already have account <a href="/">Login Now</a>
                </Col>
            </Row>
        </Container>
    )
};

export default UserSignUPForm;