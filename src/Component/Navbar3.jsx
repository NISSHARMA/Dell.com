import styles from "../Styles/Navbar3.module.css"

function Navbar3() {
    return (
        <>
            <div className={styles.navbar3div}>
                <div className={styles.navbar3subdiv}>
                    <img width="80px" src="../desktop.png" alt="desktop" />
                    <h3 style={{marginTop:"20px"}}>Desktop</h3>
                </div>
                <div className={styles.navbar3subdiv}>
                    
                    <img width="90px" src="../laptop.png" alt="desktop" />                 
                    
                    <h3>Laptops</h3>
                </div>
                <div className={styles.navbar3subdiv}>
                    <img width="70px" src="../alien.png" alt="desktop" />
                    <h3>Alienware</h3>
                </div>
                <div className={styles.navbar3subdiv}>
                    <img width="80px" src="../monitor.png" alt="desktop" />
                    <h3>Moniter</h3>
                </div>
                <div className={styles.navbar3subdiv}>
                    <img width="80px" src="../keyboard.png" alt="desktop" />
                    <h3>Keyboards </h3>
                </div>
                <div className={styles.navbar3subdiv}>
                    <img width="80px" src="../headphone.png" alt="desktop" />
                    <div>
                    <h3>Accesories</h3>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Navbar3
