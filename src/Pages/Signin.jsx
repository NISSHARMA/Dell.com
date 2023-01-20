import styles from "../Styles/Signin.module.css"
import {useState} from "react"
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"

function Signin() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const InitialUser = {
        email: "",
        password: ""
    }


    const [logindata, setLogindata] = useState(InitialUser)

    function handleLogin(e) {
        setLogindata({ ...logindata, [e.target.name]: e.target.value });
        console.log(logindata)
    }

    const { email, password } = logindata

    async function LoginDataSubmit() {
        let data = await fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify(logindata),
            headers: { "Content-Type": "application/json" }
        })

        let res = await data.json()
        console.log(res)
        window.location.href = '/'
    }


    return (
        <>
            <div className={styles.signin1div}>
                <img src="data:image/png;base64,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" alt="" />
            </div>

            <div className={styles.signin2div}>
                <div className={styles.signin2div_subdiv1}>
                    <p>Sign In</p>
                    <div className={styles.signinsubdiv1}>
                        <img width="25px" src="data:image/png;base64,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" alt="Image" />
                        <p>Google Sign In</p>
                    </div>


                    <div className={styles.signininputdiv}>
                        <Input className={styles.signinemaildiv} variant='outline' isRequired placeholder='Email Address'
                            name="email"
                            value={email}
                            onChange={handleLogin}
                        />
                        <InputGroup size='md' className={styles.signinpassword}
                        >
                            <Input
                                isRequired
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='password'
                                name="password"
                                value={password}
                                onChange={handleLogin}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </div>
                    <p className={styles.resetpassword}>Don't remember your password? <span>Create or Reset password</span> </p>
                    <Button className={styles.signinbutton} colorScheme='blue'
                    onClick={LoginDataSubmit}
                    >Sign In</Button>
                    <p className={styles.resetpassword}>or</p>
                    <Button className={styles.signinbutton} colorScheme='blue' variant='outline'>
                        Send One-Time Password
                    </Button>
                    <p className={styles.resetpassword}>Don't have a Dell account? <span>Create an account</span></p>

                </div>


                <div className={styles.signin2div_subdiv2}>
                    <p className={styles.dellbenefits}>Dell Account Benefits</p>
                    <p className={styles.myaccount}>My Account is an easy, more centralized way to manage your tech. Sign Up Now!</p>
                    <div className={styles.signin2div_subdiv2_orderdiv}>
                        <div className={styles.signin2div_subdiv2_orderdiv1}>
                            <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-1-tracking-36x36.png" alt="" />
                            <p>Order Tracking</p>
                            <p>Manage orders, track shipping status and view support history</p>
                        </div>
                        <div className={styles.signin2div_subdiv2_orderdiv1}>
                            <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-2-mail-36x36.png" alt="" />
                            <p>Manage Communications</p>
                            <p>Manage marketing and communications preferences</p>
                        </div>
                        <div className={styles.signin2div_subdiv2_orderdiv1}>
                            <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-3-profile-36x36.png" alt="" />
                            <p>Profile Setting</p>
                            <p>Save your favorite payment method and shipping details for quicker checkout</p>
                        </div>



                    </div>
                    <div>
                        <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/bannerimage460x460.png" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.signin_lastdiv}>
                <p>About Us</p>
                <p>Careers</p>
                <p>Commuinity</p>
                <p>Events</p>
                <p>Partner Program</p>
                <p>Premier</p>
                <p>Dell Technologies</p>
            </div>
        </>
    )
}

export default Signin