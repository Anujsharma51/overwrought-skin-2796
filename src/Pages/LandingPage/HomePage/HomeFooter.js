import React from 'react'
import style from './header.module.css'


export default function HomeFooter() {
  return (
    <div className={style.footer}>
        <div className={style.flexFooter}>
            <div className={style.underflexFooter}>
                <img  style={{width:"40%",}}src='https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg'/>
            </div>
            <div className={style.underflexFooter}>
              <p style={{fontSize:"22px"}}>Member Resources</p>
              <a><p style={{textAlign:"left", marginLeft:"10%"}}>How It Works</p></a>
              <a> <p style={{textAlign:"left", marginLeft:"10%"}}>Premium</p></a>
              <a> <p style={{textAlign:"left", marginLeft:"10%"}}>Lose It! Blog</p></a>
              <a><p style={{textAlign:"left", marginLeft:"10%"}}>Lose It! Blog</p></a>
            </div>
            <div className={style.underflexFooter}>
            <p style={{fontSize:"22px"}}>Connect With Us</p>
             <a> <p style={{textAlign:"left", marginLeft:"16%"}}>Press & Media Kit</p></a>
             <a><p style={{textAlign:"left", marginLeft:"16%"}}>Contact Us</p></a>
             <a> <p style={{textAlign:"left", marginLeft:"16%"}}>Partners & API</p></a>
             <a> <p style={{textAlign:"left", marginLeft:"16%"}}>Share Your Story	</p></a>
            </div>
            <div className={style.underflexFooter}><p style={{fontSize:"22px"}}>Our Team</p>
            <a>  <p style={{textAlign:"left", marginLeft:"30%"}} >About Us </p></a>
            <a>  <p style={{textAlign:"left", marginLeft:"30%"}}>Careers</p></a>
            <a>   <p style={{textAlign:"left", marginLeft:"30%"}}>Diversity</p></a>
              </div>
        </div>
        <div>
            <div className={style.iconFlex}>
              {/* <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div> */}
              

              
            <a href="https://www.facebook.com/loseit/" aria-label="Facebook page of Lose It!"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/loseitapp/" aria-label="Instagram page of Lose It!"><i class="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com/loseit/" aria-label="Twitter page of Lose It!"> <i class="fab fa-twitter"></i></a>
            <a href="https://www.pinterest.com/loseit/" aria-label="Pinterest page of Lose It!"> <i class="fab fa-pinterest"></i></a>
            <a href="https://www.linkedin.com/company/lose-it-" aria-label="LinkedIn page of Lose It!"> <i class="fab fa-linkedin"></i></a>
            </div>

            
            <div className={style.lastdiv}>
              <p>Copyright 2008-2021 FitNow, Inc, All Rights Reserved</p>
              <p>Privacy | Terms of Service</p>
            </div>
        </div>
    </div>
  )
}
