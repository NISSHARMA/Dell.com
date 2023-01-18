import styles from "../Styles/Navbar1.module.css"
import { ChevronDownIcon } from "@chakra-ui/icons"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button, Tab, TabList, Tabs, TabPanels, TabPanel
} from '@chakra-ui/react'

function Navbar1() {
    return (
        <>
            <div className={styles.navbar_div}>
                <div className={styles.rightcolumn}>
                    <img className={styles.nav_logo} src="data:image/png;base64,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" alt="Image" />

                    <input className={styles.navinput} type="text" placeholder="Search Dell" />
                    <img className={styles.searchicon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxtzt0hmPZuj18iMYzid_ceuLKMwy5Djxr2B9d4-eZw&s" alt="" />

                </div>
                <div className={styles.leftcolumn}>

                    <Menu >
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                            Sign-in
                        </MenuButton>
                        <MenuList style={{ width: "300px", lineHeight: "15px", marginRight: "60px" }}>
                            <MenuItem><b>Welcome to Dell</b></MenuItem>
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Place orders quickly and easily</MenuItem>
                            <MenuItem>View orders and track your shipping status</MenuItem>
                            <MenuItem>Enjoy members-only rewards and discounts</MenuItem>
                            <MenuItem>Create and access a list of your products</MenuItem>
                            <MenuItem><Button className={styles.signinbutton} colorScheme='blue'>Sign in</Button></MenuItem>
                            <MenuItem><Button className={styles.signinbutton} colorScheme='teal' variant='outline'>
                                Create An Account
                            </Button></MenuItem>
                            <MenuItem><Button className={styles.signinbutton} colorScheme='teal' variant='outline'>
                                Dell Financial Services
                            </Button></MenuItem>
                            <MenuItem><Button className={styles.signinbutton} colorScheme='teal' variant='outline'>
                                Premier Sign In
                            </Button></MenuItem>

                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                            US/EN
                        </MenuButton>
                        <MenuList style={{ width: "500px", lineHeight: "15px", height: "500px" }}>

                            <Tabs>
                                <TabList>
                                    <Tab>Americas</Tab>
                                    <Tab>Asia Pasific & Japan</Tab>
                                    <Tab>Europe</Tab>
                                    <Tab>Middle East And Africa</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel style={{ display: "flex" }}>
                                        <div className={styles.america}>
                                            <p>Anguilla (UK)</p>
                                            <p>Antigua and Barbuda</p>
                                            <p>Aruba (NL)</p>
                                            <p>Bahamas</p>
                                            <p>Barbados</p>
                                            <p>Bermuda (UK)</p>
                                            <p>British Virgin Islands (UK)</p>
                                            <p>Cayman Islands (UK)</p>
                                            <p>Cuba</p>
                                            <p>Curaçao (NL)</p>
                                            <p>Dominica</p>
                                            <p>Dominican Republic</p>
                                            <p>Grenada</p>
                                            <p>Guadeloupe (FR)</p>
                                        </div>

                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>
                                            <p>Guatemala</p>
                                            <p>Honduras</p>
                                            <p>Nicaragua</p>
                                            <p>Panama</p>
                                            <p>Dominican Republic</p>
                                            <p>Grenada</p>
                                            <p>Guadeloupe (FR)</p>
                                        </div>

                                        <div className={styles.america}>
                                            <p>Argentina</p>
                                            <p>Bolivia</p>
                                            <p>Brazil</p>
                                            <p>Chile</p>
                                            <p>Colombia</p>
                                            <p>Ecuador</p>
                                            <p>French Guiana (FR)</p>
                                            <p>Guyana</p>
                                            <p>	Paraguay</p>
                                            <p>	Peru</p>
                                            <p>Panama</p>
                                            <p>Uruguay</p>
                                            <p>Grenada</p>
                                            <p>Argentina (FR)</p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel style={{ display: "flex" }}>
                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>
                                            <p>Guatemala</p>
                                            <p>Honduras</p>
                                            <p>Nicaragua</p>
                                            <p>Panama</p>
                                            <p>Dominican Republic</p>
                                            <p>Grenada</p>
                                            <p>Guadeloupe (FR)</p>
                                        </div>

                                        <div className={styles.america}>
                                            <p>Argentina</p>
                                            <p>Bolivia</p>
                                            <p>Brazil</p>
                                            <p>Chile</p>
                                            <p>Colombia</p>
                                            <p>Ecuador</p>
                                            <p>French Guiana (FR)</p>
                                            <p>Guyana</p>
                                            <p>	Paraguay</p>
                                            <p>	Peru</p>
                                            <p>Panama</p>

                                        </div>
                                    </TabPanel>
                                    <TabPanel style={{ display: "flex" }}>
                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>
                                            <p>Guatemala</p>
                                            <p>Honduras</p>
                                            <p>Grenada</p>
                                            <p>Guadeloupe (FR)</p>
                                        </div>

                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>
                                            <p>Guatemala</p>
                                            <p>Honduras</p>
                                            <p>Nicaragua</p>
                                            <p>Panama</p>
                                            <p>Dominican Republic</p>
                                            <p>Grenada</p>
                                            <p>Guadeloupe (FR)</p>
                                        </div>

                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>
                                            <p>Guatemala</p>
                                            <p>Honduras</p>
                                            <p>Nicaragua</p>

                                        </div>

                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>
                                            <p>Guatemala</p>
                                            <p>Honduras</p>
                                            <p>Nicaragua</p>
                                            <p>Panama</p>
                                            <p>Dominican Republic</p>
                                        </div>
                                    </TabPanel>

                                    <TabPanel style={{ display: "flex" }}>
                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>
                                            <p>Guatemala</p>
                                            <p>Honduras</p>
                                            <p>Grenada</p>
                                            <p>Guadeloupe (FR)</p>
                                        </div>

                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>
                                            <p>Guatemala</p>
                                            <p>Honduras</p>
                                            <p>Nicaragua</p>
                                            <p>Panama</p>
                                            <p>Dominican Republic</p>
                                            <p>Grenada</p>
                                            <p>Guadeloupe (FR)</p>
                                        </div>

                                        <div className={styles.america}>
                                            <p>Canada</p>
                                            <p>Greenland (DK)</p>
                                            <p>Mexico</p>
                                            <p>USA</p>
                                            <p>Belize</p>
                                            <p>Costa Rica</p>
                                            <p>El Salvador</p>

                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </MenuList>

                    </Menu>


                    <Menu>
                        <MenuButton as={Button}  >
                          Contact Us
                        </MenuButton>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                          Cart
                        </MenuButton>

                        <MenuList style={{ width: "200px", lineHeight: "15px", height: "200px" }}>
                          <p style={{padding:"20px"}}><b>Your Dell.com Cart</b></p>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default Navbar1