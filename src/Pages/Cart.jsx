
import CartMap from "../Component/CartMap";
import Navbar1 from "../Component/Navbar1";
import Navbar2 from "../Component/Navbar2";
import Footer1 from "../Component/Footer1";
import { Button, ButtonGroup, Text, totalprice, useColorModeValue } from '@chakra-ui/react'
import { Link } from "react-router-dom"


function Cart() {
    let data = JSON.parse(localStorage.getItem("cartproduct")) || []
    let totalprice;
    if (data == null) {
        totalprice = 0
    } else {
        totalprice = data.reduce((acc, el) => {
          
            return acc + Number(el.price)
        }, 0)
    }

    function RemoveItem(j) {

        data.splice(j, 1);
        window.location.reload()
        console.log("a")
    }
    return (
        <>
            <Navbar1 />
            <Navbar2 />
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>


                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", width: "60%", marginTop: "20px", border: "1px solid red" }}>
                    {

                        data.map((elem) => (

                            <CartMap
                                price={elem.price}
                                img={elem.img}
                                Memory={elem.Memory}
                                Processor={elem.Processor}
                                OS={elem.OS}
                                name={elem.name}
                                id={elem.id}
                                RemoveItem={RemoveItem}
                            />


                        ))

                    }
                </div>
                <div style={{
                    width: "20%",
                    height: "400px",
                    marginTop: "150px"
                }}>
                   

                    <Link to="checkout">
                        <Button
                            px={8}
                            bg={useColorModeValue('#151f21', 'gray.900')}
                            color={'white'}
                            rounded={'md'}
                        >
                            CHECKOUT
                        </Button>
                    </Link>

                    <br />
                    <div style={{ width: "80%", margin: "auto" }}>
                        <Text fontSize='xs'>By clicking ‘Check Out Now’, you will be redirected to the ESW checkout page where payment will be taken and your order fulfilled by ESW, J.Crew's preferred partner for international sales.</Text>

                    </div>
                </div>
            </div>
            <Footer1 />




        </>
    )
}

export default Cart