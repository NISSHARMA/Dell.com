import { useState, useEffect } from "react"
import {
    Card, CardBody, Stack, StackDivider,
    Box, Heading, Text, Button
} from "@chakra-ui/react"
import { Link } from "react-router-dom"



function Allproducts() {

    const [product, SetProduct] = useState([])

    async function getData() {
        return fetch(`http://localhost:8000/data`)
    }

    async function fetchAndUpdateData() {
        const response = await getData()
        const res = response.json()
            .then(function (res) {
                SetProduct(res)
            })
    }
    // console.log(allproduct)

    useEffect((data) => {
        fetchAndUpdateData()

    }, [])

    async function handledelete(id) {
        let res = await fetch(`http://localhost:8000/data/${id}`, {
    
          method: 'DELETE'
    
        })
        window.location.reload()
      }




    return (
        <>
            <ul>
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/admin/addproduct">Add Product</Link></li>
                <li><Link to="/admin/allproduct"> All Products</Link></li>
            </ul>
            <b><Text style={{textAlign:"center"}} fontSize='2xl'>All Avaliable Products</Text></b>
            <div style={{ width: "80%", margin: "auto", display: "grid", gridTemplateColumns: "repeat(2,1fr)",marginTop:"40px" }}>
                {

                    product.map((elem) => (

                        <Card>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            {elem.name}
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {elem.Processor}
                                        </Text>
                                        <Text pt='2' fontSize='sm'>
                                            {elem.OS}
                                        </Text>
                                        <Text pt='2' fontSize='sm'>
                                            {elem.Memory}
                                        </Text>
                                        <Text pt='2' fontSize='sm'>
                                            {elem.Storage}
                                        </Text>
                                        <Button colorScheme='red' onClick={() => handledelete(elem.id)}>Delete</Button>
                                    </Box>

                                </Stack>
                            </CardBody>
                        </Card>




                    ))
                }
            </div>


        </>
    )
}

export default Allproducts