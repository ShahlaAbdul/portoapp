import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_top">
          <div >
            <ul className="footer_contact_info">
              <h3>CONTACT INFO</h3>
              <li>
                <h5>ADDRESS</h5>
                <p>123 Street Name, City, England</p>
              </li>
              <li>
                <h5>PHONE</h5>
                <p>(123) 456-7890</p>
              </li>
              <li>
                <h5>EMAIL</h5>
                <p>mail@example.com</p>
              </li>
              <li>
                <h5>WORKING DAYS/HOURS:</h5>
                <p>Mon - Sun / 9:00 AM - 8:00 PM</p>

              </li>
            </ul>
          </div>
          <div className="footer_right">
            <div className="footer_subscribe">

              <h3>SUBSCRIBE NEWSLETTER</h3>

              <div className="footer_subscribe_bottom">
                <p>Get all the latest information on Events, Sales and Offers.
                  Sign up for newsletter today.</p>
                <div className='subscribe_search'>
                  <input type="text" name="" id="" placeholder='email adress' />
                 <div className='subscribe'> 
                 <p>SUBSCRIBE</p>
                 </div>
                </div>
              </div>
            </div>
            <div className="footer_customer">
              <div className="customer_service">
                <h3>CUSTOMER SERVICE</h3>
               <ul>
               <li>
                  <p>Aboutg Us</p>
                  <p>Contact Us</p>
                  <p>My Account</p>
                </li>
                <li>
                  <p> Order History</p>
                  <p>Advanced Search</p>
                  <p>Login</p>
                </li>
               </ul>
              </div>
              <div className="about_us">
                <h3>ABOUT US</h3>
                <ul>
                <li>
                  <p>Super Fast Wordpress Theme</p>
                  <p>1st Fully working Ajax Theme</p>
                  <p>42 Unique Shop Layouts</p>
                </li>
                <li>
                  <p>Powerful Admin Panel</p>
                  <p>
                    Mobile & Retina Optimized</p>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_left">
            <p>© Porto eCommerce. 2023. All Rights Reserved</p>
          </div>
          <div className="footer_bottom_right">
            right
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer