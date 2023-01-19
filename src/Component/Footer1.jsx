import styles from "../Styles/Footer1.module.css"

function Footer1() {
    return (
        <>
            <div className={styles.footer1MainDiv}>
                <div className={styles.footer1MainDiv_subdiv}>
                    <b><p>IN/EN</p></b>
                    <p>Site Map</p>
                </div>
                <div className={styles.footer1MainDiv_subdiv}>
                    <b><p>Account</p></b>
                    <p>My Account</p>
                    <p>Order Status</p>
                    <p>My Products</p>
                </div>
                <div className={styles.footer1MainDiv_subdiv}>
                    <b><p>Support</p></b>
                    <p>Support Home</p>
                    <p>Contact Support</p>
                </div>
                <div className={styles.footer1MainDiv_subdiv}>
                    <b><p>Connect with Us</p></b>
                    <p>Community</p>
                    <p>Contact Us</p>
                </div>

            </div>

            <div className={styles.footer2MainDiv}>
                <div className={styles.footer2MainDiv_subdiv}>
                    <b><p>Our Offerings</p></b>
                    <p>APEX</p>
                    <p>Products</p>
                    <p>Solutions</p>
                    <p>Services</p>
                </div>
                <div className={styles.footer2MainDiv_subdiv}>
                    <b><p>Our Company</p></b>
                    <p>Who We Are</p>
                    <p>Careers</p>
                    <p>Dell Technologies Capital</p>
                    <p>Investors</p>
                    <p>Newsroom</p>
                    <p>Perspectives</p>
                    <p>Recycling</p>
                    <p>ESG & Impact</p>
                </div>
                <div className={styles.footer2MainDiv_subdiv}>
                    <b><p>Our Partners</p></b>
                    <p>Find a Partner</p>
                    <p>OEM Solutions</p>
                    <p>Partner Program</p>
                </div>
                <div className={styles.footer2MainDiv_subdiv}>
                    <b> <p>Resources</p></b>
                    <p>Blog</p>
                    <p>Events</p>
                    <p>Dell Learning Centre</p>
                    <p>Glossary</p>
                    <p>Privacy Centre</p>
                    <p>Resource Library</p>
                    <p>Trial Software Downloads</p>
                </div>
            </div>

            <div className={styles.footerlast1_row}>
                <p>Dell.com</p>
                <p>Dell Technologies</p>
                <p>Premier</p>
            </div>

            <div className={styles.footerlast2_row}>
                <p>Copyright © 2023 Dell Inc.</p>
                <p>Terms of Sale</p>
                <p>Privacy Statement</p>
                <p>Legal & Regulatory</p>
                <p>Accessibility</p>
            </div>
        </>
    )

}

export default Footer1