import styles from "../Styles/Landingpage.module.css"

function LandingPage() {
    return (
        <>
            <div className={styles.landingpagediv1}>
                <div className={styles.landingpagediv1_left}>
                    <p>XPS 13 2-IN-1</p>
                    <p>Switch It Up</p>
                    <p>Our most versatile XPS is here. The XPS 13 2-in-1.</p>

                </div>
                <div className={styles.landingpagediv1_right}>
                    <img src="../mainlaptop1.png" alt="" />
                </div>
            </div>
        </>
    )

}

export default LandingPage