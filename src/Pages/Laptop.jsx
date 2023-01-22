import Navbar1 from "../Component/Navbar1"
import Navbar2 from "../Component/Navbar2"
import styles from "../Styles/Laptop.module.css"
import Mapdata from "../Component/Mapdata"
import { useState, useEffect } from "react"
import Footer1 from "../Component/Footer1"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, Radio, RadioGroup,
    Checkbox, Button
} from '@chakra-ui/react'


function LaptopPage() {
    const [value, setValue] = useState('1')
    const [page, setPage] = useState(1)



    const [product, SetProduct] = useState([])

    async function getData() {
        return fetch(`http://localhost:8000/data?_page=${page}&_limit=5`)
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

    }, [page])
    console.log(product)

    function handlepagechange(val) {
        setPage(page + val)
    }




    return (
        <>
            <Navbar1 />
            <Navbar2 />
            <div className={styles.laptopdiv1}>
                <div className={styles.laptopdiv1_subdiv1}><p>India | For Home | Laptops & 2-in-1 PCs | Inspiron Laptops & 2-in-1 PCs</p> </div>
                <div className={styles.laptopdiv1_subdiv2}>
                    <img width="200px" src="https://i.dell.com/is/svg/brand-assets/3rd-party-logos/microsoft/windows-11/windows-11-mda-banner-en-us.svg" alt="" />
                    <p>Intel® Core™ Processors</p>
                    <img src="https://i.dell.com/sites/csimages/DellMicroContent_Images/all/family-core-i5i7i3-60h.png" alt="" />
                </div>
            </div>

            <div className={styles.inspironlaptop}><p>Inspiron Laptops & 2-in-1 PCs</p></div>

            <div className={styles.laptopdiv2}>
                <div className={styles.laptopdiv2_subdiv1}>
                    <p>Filter Results</p>


                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" className={styles.refineby} flex='1' textAlign='left'>
                                        Refine By
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <RadioGroup onChange={setValue} value={value}>
                                    <Radio value='1'>Home</Radio> <br />
                                    <Radio value='2'>Business</Radio>
                                </RadioGroup>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" className={styles.refineby} flex='1' textAlign='left'>
                                        Screen Size
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Checkbox >40.60 cm (16 inch) (10)</Checkbox><br />
                                <Checkbox >38.10 cm (15 inch) (13)</Checkbox><br />
                                <Checkbox >35.56 cm (14 inch) (18)</Checkbox><br />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" className={styles.refineby} flex='1' textAlign='left'>
                                        Form Factor
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Checkbox >2-in-1 and/or Detachable (8)</Checkbox><br />
                                <Checkbox >Laptop (33)</Checkbox><br />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" className={styles.refineby} flex='1' textAlign='left'>
                                        Processer
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Checkbox >All Intel Processors (32)</Checkbox><br />
                                <Checkbox >Intel Core i7 (10)</Checkbox><br />
                                <Checkbox >Intel Core i5 (12)</Checkbox><br />
                                <Checkbox >Intel Core i3 (9)</Checkbox><br />
                                <Checkbox >Intel Pentium (1)</Checkbox><br />
                                <Checkbox >All AMD Processors (9)</Checkbox><br />
                                <Checkbox >AMD Ryzen 7 (1)</Checkbox><br />
                                <Checkbox >AMD Ryzen 5 (5)</Checkbox><br />
                                <Checkbox >AMD Ryzen 3 (2)</Checkbox><br />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" className={styles.refineby} flex='1' textAlign='left'>
                                        Processer
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Checkbox >12th Gen Intel Core (31)</Checkbox><br />
                                <Checkbox >AMD Ryzen 5000 Series (8)</Checkbox><br />

                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" className={styles.refineby} flex='1' textAlign='left'>
                                        Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Checkbox >₹30,000 - ₹40,000 (2)</Checkbox><br />
                                <Checkbox >₹40,000 - ₹50,000 (6)</Checkbox><br />
                                <Checkbox >₹50,000 - ₹60,000 (7)</Checkbox><br />
                                <Checkbox >₹60,000 - ₹70,000 (9)</Checkbox><br />
                                <Checkbox >₹70,000 - ₹80,000 (9)</Checkbox><br />
                                <Checkbox >₹80,000 or more (8)</Checkbox><br />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                </div>






                <div className={styles.laptopdiv2_subdiv2}>
                    {
                        product.map((elem) => (
                            <Mapdata
                                name={elem.name}
                                Display={elem.Display}
                                Graphics={elem.Graphics}
                                Memory={elem.Memory}
                                OS={elem.OS}
                                Processor={elem.Processor}
                                Storage={elem.Storage}
                                img={elem.img}
                                price={elem.price}
                                id={elem.id}

                            />
                        ))
                    }
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "1000px" }}>
                        <Button colorScheme='teal' size='md' variant='outline' onClick={() => handlepagechange(-1)} isDisabled={page == 1}>
                            Prev
                        </Button>
                        <Button colorScheme='teal' size='md' variant='outline' isDisabled="true">
                            {page}
                        </Button>
                        <Button colorScheme='teal' size='md' variant='outline' onClick={() => handlepagechange(1)} isDisabled={page == 5}>
                            Next
                        </Button>
                    </div>

                </div>

            </div>
            <div >
                <Footer1 />
            </div>

        </>

    )
}

export default LaptopPage