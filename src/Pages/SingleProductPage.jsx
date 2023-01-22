import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../Component/Navbar1";
import Navbar2 from "../Component/Navbar2";
import styles from "../Styles/Mapdata.module.css"
import Footer1 from "../Component/Footer1"
import { Button, ButtonGroup, Text, totalprice, useColorModeValue } from '@chakra-ui/react'
import { Link } from "react-router-dom"




function SingleProductPage() {

    const { id } = useParams();
    //console.log(id);

    const [productDetail, SetproductDetail] = useState([]);
    const [quantity, SetQuantity] = useState(1)

    useEffect(() => {
        const data = fetch(`http://localhost:8000/data/${id}`)
            .then((res) => res.json())
            .then((res) => SetproductDetail(res))
            .catch((err) => console.log(err));
    }, [id]);

    const { name, Display, Graphics, Memory, OS, Processor, Storage, img, price } = productDetail;

    function handleQuantity(changeBy) {
        SetQuantity(quantity + changeBy)
    }

    console.log(productDetail)

    function AddProducttocart() {
        let cartdata = JSON.parse(localStorage.getItem('cartproduct')) || []
        cartdata.push(productDetail)
        localStorage.setItem('cartproduct', JSON.stringify(cartdata))
    }
    return (
        <>
            <Navbar1 />
            <Navbar2 />



            <div style={{ width: "80%", margin: "auto", marginTop: "30px", display: "flex" }} >
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
                <div className={styles.mapdatadiv3} >
                    <p>Dell Price {price}</p>
                    <p>Price inclusive of GST. Free Delivery.</p>
                    <p>Usually delivered in 2-4 days</p>
                    <p><span>Special Offers </span>View All (2)</p>
                    <p><span>Financing</span></p>
                    <p>EMI starts from ₹ 2,832.00 /month</p>
                    <Button onClick={AddProducttocart} colorScheme='blue' className={styles.addtocart}>Add To Cart</Button>
                </div>
            </div>

            <Footer1 />

        </>
    )
}

export default SingleProductPage