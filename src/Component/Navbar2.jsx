import styles from "../Styles/Navbar2.module.css"
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons"


function Navbar2() {

   /* function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }*/



    return (
        <>

          
            <div className={styles.navbar2div}>
                <div className={styles.topnav} id="myTopnav">

                    <div className={styles.dropdown}>
                        <button class="dropbtn">APEX
                            {<ChevronDownIcon />}
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">View All APEX</a>
                            <a href="">Storage</a>
                            <a href="">Cyber & Data Protection</a>
                            <a href="">Create a Custom Solution</a>
                            <a href="">Resources</a>
                        </div>
                    </div>

                </div>


                <div className={styles.topnav} id="myTopnav">

                    <div className={styles.dropdown}>
                        <button class="dropbtn">Products
                            {<ChevronDownIcon />}
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Laptops</a>
                            <a href="">Desktops & All-in-ones</a>
                            <a href="">Gaming</a>
                            <a href="">Workstations</a>
                            <a href="">Thin Clients</a>
                            <a href="#">Servers</a>
                            <a href="#">Data Storages</a>
                            <a href="#">Data Protection</a>
                            <a href="#">Networking</a>
                            <a href="#">Hyperconverged Infrastructure</a>
                            <a href="#">Monitors</a>
                            <a href="#">Electronics & Accessories</a>
                            <a href="#">Software</a>
                        </div>
                    </div>

                </div>


                <div className={styles.topnav} id="myTopnav">

                    <div className={styles.dropdown}>
                        <button class="dropbtn">Solutions
                            {<ChevronDownIcon />}
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">View All Solutions</a>
                            <a href="">Cloud Solutions</a>
                            <a href="">DevOps Tools & Solutions</a>
                            <a href="">Edge Solutions</a>
                            <a href="">Infrastructure Solutions</a>
                            <a href="#">Midmarket Solutions</a>
                            <a href="#">OEM Solutions</a>
                            <a href="#">Security Solutions</a>
                            <a href="#">Small Business</a>
                            <a href="#">Workforce Solutions</a>
                        </div>
                    </div>

                </div>

                <div className={styles.topnav} id="myTopnav">

                    <div className={styles.dropdown}>
                        <button class="dropbtn">Services
                            {<ChevronDownIcon />}
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">View All Services</a>
                            <a href="">Warranty Extension</a>
                            <a href="">Consulting Services</a>
                            <a href="">Deployment Services</a>
                            <a href="">Support Services</a>
                            <a href="#">Residency Services</a>
                            <a href="#">Education Services</a>
                            <a href="#">Managed Services</a>
                            <a href="#">Services Technology</a>
                            <a href="#">Workforce Solutions</a>
                            <a href="#">Payment & Consumpation Solution</a>

                        </div>
                    </div>

                </div>


                <div className={styles.topnav} id="myTopnav">

                    <div className={styles.dropdown}>
                        <button class="dropbtn">Support
                            {<ChevronDownIcon />}
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">Support Home</a>
                            <a href="">Support Library</a>
                            <a href="">Support Services & Warranty</a>
                            <a href="">Drivers & Downloads</a>
                            <a href="">Manuals & Documentations</a>
                            <a href="#">Diagnostics &Tools</a>
                            <a href="#">Services Requests & Dispatch Status</a>
                            <a href="#">Order Support</a>
                            <a href="#">Contact Support</a>
                            <a href="#">Community</a>

                        </div>
                    </div>

                </div>

                <div className={styles.topnav} id="myTopnav">
                    <div className={styles.dropdown}>
                        <button class="dropbtn">Deals
                            {<ChevronDownIcon />}
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">View All Deals</a>
                            <a href="">Laptop Deals</a>
                            <a href="">Business Laptop Deals</a>
                            <a href="">Desktop Deals</a>
                            <a href="">Business Laptop Deals</a>
                            <a href="#">Desktop Deals</a>
                            <a href="#">Business Desktop Deals</a>
                            <a href="#">Gaming PC Deals</a>
                            <a href="#">Server Deals</a>
                            <a href="#">Monitor Deals</a>
                            <a href="#">Computer Accessories Deals</a>
                        </div>
                    </div>
                </div>

                <div className={styles.topnav} id="myTopnav">
                    <div className={styles.dropdown}>
                        <button class="dropbtn">Financing
                            {<ChevronDownIcon />}
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">For Personal Financing</a>
                            <a href="">For Business Financing</a>
                            <a href="">Pay Buills & Manage Account</a>
                           
                        </div>
                    </div>
                </div>

                <div className={styles.topnav} id="myTopnav">
                    <div className={styles.dropdown}>
                        <button class="dropbtn">About Us
                            {<ChevronDownIcon />}
                        </button>
                        <div className={styles.dropdowncontent}>
                            <a href="#">What We Do</a>
                            <a href="">Who We Are</a>
                            <a href="">Newstroom</a>
                            <a href="">ESG & Impact</a>
                            <a href="">Recycling</a>
                            <a href="#">Investors</a>
                            <a href="#">Dell Technologies Capital</a>
                            <a href="#">Carrers</a>
                            <a href="#">Perspectives</a>
                            <a href="#">Capital</a>                            
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Navbar2