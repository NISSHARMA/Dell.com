import styles from "../Styles/Mapdata.module.css"
import { Link } from "react-router-dom"

function Mapdata({ name, Display, Graphics, Memory, OS, Processor, Storage, img, price, id }) {
    return (
        <>
            <Link to={`/laptop/${id}`}>
                <div className={styles.mapdatadiv}>
                    <div className={styles.mapdatadiv1}>
                        <img src={img} alt="" />
                    </div>
                    <div className={styles.mapdatadiv2}>
                        <p className={styles.mapdatadiv2_name}>{name}</p>
                        <p className={styles.mapdatadiv2_ordercode}>Order Code d560765win9s</p>
                        <p className={styles.mapdatadiv2_specs}>Specs <span>Customize -</span> </p>
                        <hr />
                        <p className={styles.mapdatadiv2_processer}> <span>Processer:</span> {Processor}</p>
                        <p className={styles.mapdatadiv2_os}> <span>OS:</span> {OS}</p>
                        <p className={styles.mapdatadiv2_graphics}> <span>Graphics:</span> {Graphics}</p>
                        <p className={styles.mapdatadiv2_memory}> <span>Memory:</span>{Memory}</p>
                        <p className={styles.mapdatadiv2_storage}> <span>Storage:</span>  {Storage}</p>

                        <p className={styles.mapdatadiv2_display}> <span>Display:</span>{Display}</p>
                    </div>
                    <div className={styles.mapdatadiv3}>
                        <p>Dell Price {price}</p>
                        <p>Price inclusive of GST. Free Delivery.</p>
                        <p>Usually delivered in 2-4 days</p>
                        <p><span>Special Offers </span>View All (2)</p>
                        <p><span>Financing</span></p>
                        <p>EMI starts from ₹ 2,832.00 /month</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Mapdata