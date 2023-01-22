import styles from "../Styles/Landingpage.module.css"
import { Button, } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/icons'
import Navbar1 from "../Component/Navbar1"
import Navbar2 from "../Component/Navbar2"
import Navbar3 from "../Component/Navbar3"
import Footer1 from "../Component/Footer1"



function LandingPage() {
    return (
        <>
            <Navbar1 />
            <Navbar2 />
            <Navbar3 />
            <div className={styles.landingpagediv1}>
                <div className={styles.landingpagediv1_left}>
                    <p className={styles.xpshead}>XPS 13 2-IN-1</p>
                    <p className={styles.switchhead}>Switch It Up</p>
                    <p className={styles.versatilehead}>Our most versatile XPS is here. The XPS 13 2-in-1.</p>
                    <Button className={styles.shop_now_button} colorScheme='blue' variant='solid'>
                        Shop Now
                    </Button>

                    <Button className={styles.learn_more_button} colorScheme='blue' variant='outline'>
                        Learn More
                    </Button>

                </div>
                <div className={styles.landingpagediv1_right}>
                    <img src="../mainlaptop1.png" alt="" />
                </div>
            </div>

            <div className={styles.landingpagediv2}>
                <h1>Welcome Back</h1>
            </div>

            <div className={styles.landingpagediv3}>
                <div className={styles.landingpagediv3_subdiv}>
                    <div className={styles.getitfast_div} >
                        <p className={styles.getitfast}>Get It Fast</p>
                    </div>
                    <div className={styles.instock_div}>
                        <img src="https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xps-13-9320-15-9520.png" alt="" />
                        <p>In-stock PCs – ready to ship so they arrive faster.</p>
                    </div>
                    <p className={styles.shop_Now_button}>Shop Now</p>
                </div>


                <div className={styles.landingpagediv3_subdiv}>
                    <div className={styles.getitfast_div} >
                        <p className={styles.getitfast}>Cart (1 item)</p>
                    </div>
                    <div className={styles.instock_div}>
                        <p className={styles.instock_div}>$2,999.99</p><br />
                        <p className={styles.instock_div}>Cart (1 item)</p>
                    </div>


                    <p className={styles.shop_Now_button}>View Cart</p>
                </div>


                <div className={styles.landingpagediv3_subdiv}>

                    <div className={styles.getitfast_div} >
                        <p className={styles.getitfast}>Access Your Perks</p>
                    </div>
                    <div className={styles.instock_div}>
                        <p className={styles.instock_div}>Sign in to your account to enjoy free shipping, track current orders, and more.</p><br />

                    </div>
                    <p className={styles.shop_Now_button}>Sign In</p>

                </div>
            </div>


            <div className={styles.landingpagediv1}>

                <div className={styles.landingpagediv1_right}>
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/modules/prod-2075-laptop-inspiron-16-7620-1023x842.png?fmt=jpg&wid=1288&hei=785" alt="" />

                </div>
                <div className={styles.landingpagediv3_left}>
                    <p className={styles.inspiron}>INSPIRON 16 PLUS</p>
                    <p className={styles.visuals}>11% More Visuals</p>
                    <p className={styles.seemore}>See more with a 16-inch display in a 15-inch laptop* with the new Inspiron 16 Plus.</p>
                    <p className={styles.compared}>*As compared to the Inspiron 15 (3510 3511 3515) with a 16:9 aspect ratio.</p>
                    <Button colorScheme='blue' variant='link'>
                        |  Shop Now
                    </Button>
                    <Button colorScheme='blue' variant='link'>
                        |  Learn More
                    </Button>

                </div>
            </div>


            <div className={styles.landingpagediv1}>
                <div className={styles.landingpagediv3_left}>
                    <p className={styles.inspiron}>ELECTRONICS & ACCESSORIES</p>
                    <p className={styles.visuals}>We Have More Than Just PCs</p>
                    <p className={styles.seemore}>The top-brand electronics & accessories you need - monitors, mice, keyboards and more.</p>
                    <Button colorScheme='blue' variant='link'>
                        | Learn More
                    </Button>
                </div>
                <div className={styles.landingpagediv1_right}>
                    <img width="80%" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/modules/ena-family-cons-dell-u3223qz-wl5022-km5221w-uhp-2303-02-us-homepage-module-lf-1023x842-lr.png?fmt=png-alpha&wid=1023&hei=842" alt="" />
                </div>

            </div>

            <div className={styles.dell_support_div}>
                <div className={styles.dell_support_left}>
                    <p className={styles.dellsupport_head}>Dell Support</p>
                    <p className={styles.question_head}>Get your questions answered</p>
                </div>




                <div className={styles.dell_support_right}>
                    <div className={styles.dell_support_right_div1}>
                        <img width="15%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YImyEcOijEFLkxKkVAfmT8DAzwHqDXI06g&usqp=CAU" alt="" />
                        <div >
                            <p className={styles.dell_support_right_head1}>Support Home</p>
                            <p className={styles.dell_support_right_head2}>Browse all support related information</p>
                        </div>
                    </div>

                    <div className={styles.dell_support_right_div1}>
                        <img width="15%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCXHt_kmLrlofuXOGKtG4DXLOFI9Nb5RVmA&usqp=CAU" alt="" />
                        <div >
                            <p className={styles.dell_support_right_head1}>Drivers & Downloads</p>
                            <p className={styles.dell_support_right_head2}>Get the latest drivers & Software</p>
                        </div>
                    </div>

                    <div className={styles.dell_support_right_div1}>
                        <img width="15%" src="data:image/png;base64,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" alt="" />
                        <div >
                            <p className={styles.dell_support_right_head1}>Order Support</p>
                            <p className={styles.dell_support_right_head2}>Check the status of order</p>
                        </div>
                    </div>

                    <div className={styles.dell_support_right_div1}>
                        <img width="15%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQEhEVFg8WGBYYGBYYFhUXFhUVFRUWFxUZGBcYHSggGBolGxUXITEhJSkrLi4uGCIzODMsNygtLisBCgoKDg0OGxAQGy0lICUvLS0vMi4tLS0tLS0yLS0tLS0tLS0tLS0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHAwQCAf/EAD4QAAIBAQMJBgMGBQQDAAAAAAABAgMEBREGEiExQVFhcYETIpGhscEyQlIUI0NiktEzcoKi8AdjwuEkRHP/xAAaAQEBAAMBAQAAAAAAAAAAAAAABQIDBAYB/8QANBEAAQMBAg0DBAIDAQAAAAAAAAECAwQRMQUSEyEyQVFxobHR4fBhgZEUIsHxcqIjQ7IV/9oADAMBAAIRAxEAPwDcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBvPKehQxjnZ9RfLDTg+MtS9eBkxjnrY1LTCSVkaYz1RE9fO5PH4Z5bssrRPRTiqa3pZz8Xo8iCtVtqVdNSpOXOTa8HoR3R4OkdpKicfPkmS4XiboIq8E45+BqlW86EPirU092fHHwxPLLKOyr8ePRSfojMqFmnP4IuXJN+iPVC5bS9VCp+mS9UbfoIm5nP5IaEwrO7OyPN7ryzGhxyksj/GXVSXqj00r2s89Ea1Nvdnxx8MTNJXJaV+BV/TJ+h5a9jqQ+OE48016ofQQrmR/JR/6k7c7o+acVNhjJPSnij6MbstqnT005uL4ScfQm7DlfaaeiTjUjuawfRx98TU/B0iaKovDtxNsWGInabVTdnT8LwNJBAXJlNStMuzwcauGOa9KeGvNktfXAnzhexzFsclilSKVkrcZi2oAAYmwAACwAAAAAAAAAAAAAAAAAAEZe980rNHGo9L+GK0uXTYuL0EdlHlJGzYwhhKv5Q4ve+H+OgVKlStPGTlOrJ83J7EkvRHdTUayJjPzJxXpv+CXW4RSJcSPO7gnVfT5JO+Mo69pxjjmUvoT1rjLXL04Hhu67KtoebSpuW96kucnoXItNx5Haqlp6U0/Vr0XiW+jSjBKMYqMVqSSSXRG99ZHEmJCnTuckWDpZ1ylQ5U59G+ZkKjd+Q6116mc/phoX6nr8EWGyXHZqXwUY472s6XjLFkmDgkqJZNJxWipIYtFqb71+V/R+H6AaTqtAAAtI+1XPQq/HSg3vwwl+pYMgLfkTTemjNwf0vSvHWvMt4Nsc8kei7p8HNLSwy6bU5L8pnKXk7ktUo11WqyWEccEnji2nHToWCwbLoAfJZXSuxnH2CnZA3FZv2g4WivGnGU5vCEU23uSO5n+Wl9dpL7PTf3cX3mvmktnJevJGUEKzPxU99xjVVLaeNXrfqTavmdSMvu/atpm+840vlgngsNjeGtnG6L5q2aSlCTcPmg3oktujY+J4DpZbNKrONOCxnJ4Je74LWXsnGjMVUTF88tvPKrLK6THRVxtuu3Z2uNfo1VOMZr4ZJNcmsTqeey0FCEILVGMV+lJex6DzZ7JLdYAAPoAAAAAAAAAK3lVf6s0ezg/v5L9Ed747l15yN+3nGzUnUemWqMfqb9tr4Iy+rUnWm5PGVWcusm9CSXlgd1HTJIuO65OK9tfwS8I1qxJk2aS8E6rq+RZ6E601CKcqkn1b1ttvxbZouT+T8LKs54SrNaZ7uC3LjrfkMmrkVlhjLB1pLvPd+VcF5voTwq6vKfa3R59hQUCRJlJNLl32rquT1AA4SoAAAAAAAAAAAAADwXteELNSlVnqWpbZSepI+oiqtiXmLnI1FctyEVldfX2eHZwf301+mOpy57F47DOztbbVOtOVWbxnJ4vhuS4JaDiX6aBIWWa9fnoeTrKpaiTG1Jdu6rrBoOR9y9jDtai++mtGOuENi5vW+iILI25O2n28191B6FsnJey9cOJohx19R/qb79Ov7KWC6T/c/wBuvT52AAEsuAAAAAAAAAAAgcrbx7Cg8HhOfdjvWPxPoserRkxivcjU1mEkiRsV7rkz+eXlOyqvX7TWeD+6hiobnvfVrwSJrIW5/wD2preqa8pP2XUq102F2irCivmel7ktMn4Jms0aShFQjojFJJbklginWPSKNIWbOHfqQ8HRLPK6ok1Lx7J+DqACUXwAAAAAAAAAAAAAADnOaSbbwS0tvUkjMsp75dqq6P4MMVBb97fF+nUnMt7712Wm/wD6NeUfd9FvKYVqCnsTKOvW7r78t55/ClXjLkWXJfv2e2v13A9tzXZK1VVSjoWuUvpS1vnsXFnjpwcmoxTcm0klrbehI07Jy6FZaWbrqywc3x3Lgv3e06KqoyLM163dfNdhyUNItRJn0Uv6earSRstmjShGnBYQisEj0ArmVV/SsihGnFOc8Xi9SSwWpNYvSRGMdI7Fbep6aWVkLMZ2ZE/RYwV7Ja/Xa4yU0lVhhjhjhKL1NJ6tK9N5YRIxzHK116H2KVsrEey5QADA2AAAAAAAzrLu259oVNPRTST5y70vLDwNEMft9p7WpOr9UpPo22vLAoYOjxpFdsTmScMS4sSM2rwTvYW3/T6w6Kloa0vux5LBy883wLoRmT9m7KzUobc1N/zS7z82SZy1EmUlc47aSLJQtb6Z9651BwtFeNOLnOSjFa23gkdyi/6hWmWdTo/JmubX1SbcV4JPxPkEWVkRp9qp8hEr7LSZWV1kxw7SWH1ZksPTHyJujVjOKlFqUWsU08U1wZjpN5NX/KzSzZYuhJ6Vti3tXvv5lCbB6I22O23YuslU+FlV9k1iIutNW/OubkaaDjQrRnFTjJSjJYprU0diUXQAAAAAAQmU18KzUsV/FlioLjtb4L1wJG3WqFGEqk3hGKxfslvb1GW3teErTVlVnt0JbIpal/m1s66SnyrrV0U8s6k/CFXkGYrdJbvRNvT51HjlJtttttvFt623rbAJrJa5vtVTGS+4hg5fmeyPXbw5otPe1jVc65DzUUTpXoxt6k5kTcmCVqqLS/4aexPXLm9nDmXI+UsNGw+jz0srpXq5T19PA2BiMb+12grGXVgz6Cqpd6k8f6ZaJeea+hZzz2yzqrCdN6pxcX1WAikyb0dsPs8SSxuYutP1xM1yUtvY2qnp7snmy5T0L+7NNSMXalF4apxfhJP9zX7HXVSEai1SjGXisTuwkxEc16a83x2JWBpVVjmLqsX5vT5TiekAE0tAAAAAAHivermUKs9qpza55rwMostDPnGH1NL9TS9zTsqZYWSt/Kl4tL3M7uCONppL/cj5ST9irQfbE93mZCFhVMaeNi+WrZyNZP0AlF5QV3Ku5ftUFKH8WGOH5k9ax2PRo/7LEDNj1Y5HNvNUsTZWKx9ymLyi4txaakng09DTWtNA0LKfJ5WhOrTwVdLkppbHue59Hwz6VNxxTTUlimmsGmtDTW/9i9BUNlbal+tDytVSPp32LnTUpNZNX/KyyzZYyoN6Vtg3tX+aTR6FaM4qcWnGSxTWpox3AnMmr+lZpZksZUJPStsXvX7bTmq6XH+9l/Pvz339dBX5L/HJo6l2duW40wHGjWjOKnGScWsU1qaOmeiOejPoH42VXLG+uzj2FN/eTXea+WL/AH9MeBnHGsjka01TTNhYr3XJ5YQmWF8utPs4Y9hB69k5ascdy1Lq9xXTpKS8cdhzwe49BCxGNRqHkqiR0r1e7Xw7eX2ne77HOvUjSgu9J9EtuPBI1W7LBCz01ShqWt7ZN62+LInJS5VZqefNffTWn8sdi93x5FiJNZU5V2K25OJ6DB1HkW47tJeCbN+tQADiKQAABlGUdLNtVaP5sfHT/wAi95IVc6yUntWcvCckvLApuWkcLZU4qD/sivYtWQcv/FS3TkvR+5VqvupWO3ciDQ/bWyN/l/0WQAEovAAAAAAERlTHGyVeSfhJMz3J6WFppP8A3I+ckvc0u+qWfZ6sdrpzw55rwMqsNbMqRn9Mk/0tP2KtBnic1PMxCwp9s8bl8sW1TYwASi8oAAPh8y1FbykuD7Qu1prCuuimlhof5tGh9HwswM43uY7Gaa5YmStVj0zGNSi4txkmmng09DTWzTq/6GP+aDQMp8nVaE6tNJV10U0tj/NufR8M8lBxbTTUk8Gnoaa1pouQTNmbal+tDy1VTvp34q3al2k5k7f0rNLMk3KhLWtsXp70fLFGg0qsZxz4POi1imtTMiJvJq/5WaWZLF2eT0rbF7177zRVUeP97L+ffmddBhDJqkcmjq9O3Lddd77vONmpOpJadUY/U3qXLa+BmVavKpJznJucm3J729XQ92UN7StVVz1U46ILdHe+L1+C2EYbKSmybLVvXyzr6mmurFmksbopd16em8+o7OpaMjLmz39pmu5F9xfVJPXyWzjyIa4LplaqqgtEFpnLdHcuL1Lx2Go0KUYRUIpKMUkktSS1GqunxExG3rf6J35bzowZS5R2Vdcl3qvROe4OLPtS04YaD7BIPQAAAAAAGZZaSxtlTgoL+xP3LTkGv/FXGcvZexTspamdaq0vzYfoSX/EvGR1PNsdPe89/wB8sPLAq1WalYn8eRBofurpHfy/6RCdABKLwAAAAAB8yWKwepmO2yz9nOdN64uS/S2vY2QzfLax9naXLDu1En1Xda8k/wCooYOfZIrdqcu1pIwxFjRNfsXgvdELxclq7Wz0qm1xWP8AMtEvNMkCn/6f23GnOg3pg8Y8nr8JL+4uByTx5ORzfLDvpZcrC1/pxuXiAAajoAAABWsqMnVaE6tNJV0uSmlsf5tz6PhZQZxyOjdjNvNc0LJWKx6ZjF5RcW4tNSTwaehprWmgaHlRk6rQu1ppKulyU0tj/NufR8M8lFxbTTTTwaehprWmi9T1DZm2pfrQ8rVUr6d+K7Oi3LtB90KMqklCCxnJ4Jb2z4L3kXcnZx7eovvJrup/LF7eb9ObFRMkTMZfY+UtM6okxEu1rsTzMnS0mbiuuNlpKmtM3plLe/2WpEoAefc5XKqreetYxrGo1qWIgAB8MgAAAcq9VQjKb+GKbfJLFnUrmWtt7OzOKfeqPNX8q0y6YLD+ozjYr3o1NZrmlSKNz11Jb04md1ajk3J/FJtvm3i/NmuXfQ7OlCn9MYx6pJPzM1ybsfbWmnHDup4y5R73m0l1NVKGEnpa1ias/wCE5EjA0a4r3rrzfleaAAEwtgAAAAAArmWt39rZ3JLv0+8uXzrw09CxnzJY6HqM43qxyOTUa5oklYrHXL5wvMouK8Ps1eFT5fm4xlr8PY1aEk1ininpXIyzKG7HZq0qfyPvQfB7Oa9uJacib3z4fZ5vvwXd/NHdzXphuKVdGkjEmZ4na5exGwZMsUjqeTbm39707ltABKLoAAAAAAIO+MnaNpefJONT6lhp/mT0P1JwGTHuYtrVsUwkjZI3FelqFasGSNClJTljUa0pPBLqlr66CygH18jnra5bTGKGOJLGJYAAYG0AAAAAAGZZX3l29oai+5TxjHc3j3n1ejoi2ZWXx9npZsX99UxUd8V8z/bjyKBdthlXqRow1yev6Vt8EU6CKxFmd7flSJhWdXKkDM66/wAJ+fjaXHIC782ErQ9c9C5Rbzn1ej+kt5ws1CNOEacVhGKSXJHc4ZpMo9XbfEKlNCkMSRpq56+IABqN4AAAAAAAABC5S3QrVSwX8WOLg+O2L4P9nsM2o1Z0ailHGNSD6qS0NNeTRsZUcr8n+1xtFJfeL44r50tq4rzXn30VQjP8b7l8+F5knCVGr0ysekl/r6p6pyJm473haqamtE1olH6X+z2MlTILsvCdnmqtN4Na1sktqfA0y5b4p2qGdB4SXxReuL91xMKqkWJbU0eXoptoK5J0xXaXP1T8p7pmJMAHGUQAAAAAAAAAAAAAAAeK87whZ6bqzehaltk9iXEXleFOzwdSpLBbFtk9yW1maX3e07VPPloivhhsivd72dVNTLMtq3eZkOCtrW07bE0tSbPVfM/ypwvK3TtFSVWb7z2bIpakuCL1kfcvYU+0mvvprVtjHWlzet9FsInJDJ/OatNVd1aacXteyT4bt+vnezfW1CWZFlyX9OvwcuDaR1uXkvW731++rYAATiyAAAAAAAAAAAAAAAVDKfJjtMa1Ffea5Q1KXFbnw289dLs1oqUZqcJOFSL5Nb00/NM2Mgr9ydpWrvfBV+tLXwktvqUKasxUxJM6beu1OJIrMHY65SHM7ZtXamxeC+h5Lkysp1cIVsKdXf8AI+vyvg/Es5k16XTWszwqwwWyS0xlyfs9J2unKGvZsFGWdT+h6Y9Nsemg2S0LXpjwr7avZevyaoMKPjXJ1CLamvX7pr3pxNUBWLvyzoT0VVKlLc+8vFafFIn7NaqdVZ1OcZrfFp+hPkifHppYVop45U+xyL5sv4HoABrNwAAABxr1owWdOSjHe2kvFkFeGVtmp6It1Jbo6I/qejDliZsje9bGpaa5Zo4kte5E39LyxlfvzKalZ8YR79b6U9EX+Z7OWvkVK9cqLRXxin2cH8sdbXF630wIy77vqV5ZlKDk9u6PXUihFQIn3TLm2W81JE+FVcuJAmddfROvwp+3hb6lon2lWWMtmxRW6K2IsmTOS7lhWtEcI6403rfGS2Lht28Za4clqdDCpPCdbZ9MXwT1vi/IspjUVqWYkWZNvTzcZUmDVxspPnXZf87d2o/Ej9AJxZAAAAAAAAAAAAAAAAAAAAAOVWnGScZJOL1prFPmmVq88jKU8ZUpOnLd8UfB6V0eHAtQNkcr41tathpmgjmSyRLfNS3oZdbsmrVS/Dco/VDSvBd4iE3GWjFSXPFe6NoPNabLCosJwjJcYp+p3Mwi5Mz227s3YmS4HYq2xus35/i78mY0b9tUfhtE+ve9cT0wysti/FT5wh7IudXJeyS/BwfCU15J4HmlkZZd01yn+6M/qqZ2kzghq+hrW6Mn9nFWeVlsf4qXKEPdHnq5Q2qeu0S6YL0SLisi7Lum/wCr9kd6WSljj+Di+Mp+mOA+qpUuZ/VB9DXOvk/s7oZrVqOTxlJuW9t4+LJKw5P2mtqpSUfqej10vomaXZrDSp/w6cI/yxSfij1GL8JLZYxtm/tYbI8DNttkd8dVt5FQu3IqnHTXnnvcsYrq9b8i0WezwpxUIRUYrYlgjuDgkmfJpLb5sKcNPFCljEs5/N4ABrN4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==" alt="" />
                        <div >
                            <p className={styles.dell_support_right_head1}>Warranty & Contracts</p>
                            <p className={styles.dell_support_right_head2}>Check Warranty of products</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.accessories_div}>
                <div className={styles.accessories_div_left}>
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/modules/cs2303g0015-616591-gl-cs-co-fy23q4-banner-aw-r15-amd-site-banner-1023x842.png?fmt=jpg&wid=1288&hei=785" alt="Image" />
                </div>
                <div className={styles.accessories_div_right}>
                    <p className={styles.inspiron}>ALIENWARE AURORA R15</p>
                    <p className={styles.visuals}>Leveled Up. Inside & Out.</p>
                    <p className={styles.seemore}>Our new Cryo-tech-enabled, AMD Ryzen™ 7000 Series-based desktop redefines performance.</p>
                    <Button colorScheme='blue' variant='link'>
                        |  Shop Now
                    </Button>
                    <Button colorScheme='blue' variant='link'>
                        |  Accessories Deals
                    </Button>
                </div>

            </div>


            <div className={styles.landingpagediv1}>
                <div className={styles.landingpagediv3_left}>
                    <p className={styles.inspiron}>ALL-IN-ONE PCS</p>
                    <p className={styles.visuals}>Everything In One Place</p>
                    <p className={styles.seemore}>Connect seamlessly with all-in-one desktops designed for easy set up and an enhanced experience.</p>
                    <Button colorScheme='blue' variant='link'>
                        | Shop Now
                    </Button>
                </div>
                <div className={styles.landingpagediv1_right}>
                    <img width="100%" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/modules/aio-homepage-opti-7400-insp-7710-1023x842.png?fmt=png-alpha&wid=1023&hei=842" alt="" />
                </div>

            </div>

            <div className={styles.landingpagelastdiv} >
                <div className={styles.landingpagelast_left}>
                    <p>FROM ANYWHERE</p>
                    <p>The Modern Office</p>
                    <p>Power productivity from home with savings on PCs .</p>
                    <p>PC Deals</p>
                    <div className={styles.landingpagelast_img}>
                        <img width="80%" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/2-ups/from-home-cons-dell-xps-9520t-uhp-2304-12-us-homepage-2up-module-rf-800x400.png?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0" alt="" />
                    </div>
                </div>
                <div className={styles.landingpagelast_right}>
                    <p>FROM ANYWHERE</p>
                    <p>Office Not Required</p>
                    <p>Keep business running smoothly anywhere with savings on monitors.</p>
                    <p>Monitor Deals</p>
                    <div className={styles.landingpagelast_img}>
                        <img width="80%" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/2-ups/from-home-cons-dell-u2722de-uhp-2304-12-us-homepage-2up-module-lf-800x400.png?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0" alt="" />
                    </div>
                </div>

            </div>
                <Footer1/>


        </>
    )

}

export default LandingPage