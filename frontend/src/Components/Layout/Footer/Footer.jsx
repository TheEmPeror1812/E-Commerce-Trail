import React from 'react'
import playstore from "../../../images/playstore.png"
import Appstore from "../../../images/Appstore.png"
import "./Footer.css"

function Footer() {
  return (
    <footer id='footer'>
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playstore} alt="playstore" />
            <img src={Appstore} alt="App STore" />
        </div>
        <div className="midFooter">
            <h1>ECOMMERCE</h1>
            <p>High Quality is our first priority</p>

            <p>Copyrights 2022 &copy; Rohan Kundara</p>

        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.linkedin.com">Linkedin</a>
        </div>

    </footer>
  )
}

export default Footer 