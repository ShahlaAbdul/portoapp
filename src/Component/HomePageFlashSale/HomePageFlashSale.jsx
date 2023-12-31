import React from 'react';
import './HomePageFlashSale.scss';

function HomePageFlashSale() {
  return (
    <div className="flash_sale_cards_container">
      <div className="flash_sale_cards">
        <div className="flash_sale_cards_left">
          <div className="flash_sale_watchCard1">
            <div className="flash_sale">
              <p>40% </p> <span>OFF</span>
            </div>
            <div className="flash_sale_content">
              <span className="t_450">$450</span>
              <span className="t_270">$270</span>
              <p className="watches">Watches</p>
              <p className="mega_sale">Mega Sale</p>
            </div>
          </div>
          <div className="flash_sale_watchCard2">
            <div className="card2_content">
              <strong className="trend">
                TRENDING <br />
                Hot Sales{" "}
              </strong>
              <p className="start">STARTING AT $99 </p>
              <p className="button">BUY NOW!</p>
            </div>
          </div>
          <div className="flash_sale_watchCard3">
            <div className="card3_content">
              <p className="top">
                TOP BRANDS <br /> SMARTPHONES
              </p>
              <p className="center">* LIMITED TIME ONLY</p>

              <p className="button">BUY NOW</p>
            </div>
          </div>
        </div>
        <div className="flash_sale_cards_center">
          <div className="flash_sale_watchCard4">
            <div className="card4_content">
              <p className="electronic">
                ELECTRONIC <br /> DEALS
              </p>
              <div className="exclusive_container">
                {" "}
                <p className="exclusive_text">EXCLUSIVE COUPON</p>
              </div>
              <div className="price">
                <p> $100 </p>
                <span>OFF</span>
              </div>
              <p className='button'>GET YOURS</p>
            </div>
          </div>
          <div className="flash_sale_watchCard5">5</div>
          <div className="flash_sale_watchCard6">6</div>
        </div>
        <div className="flash_sale_cards_right">
          <div className="flash_sale_watchCard7">
            <div className="card7_content">
            <h3 className='flash_sale'>FLASH SALE</h3>
            <p>TOP BRANDS <br />
              SUMMER SUNGLASSES
            </p>
            <h2>STARTING <br />
              AT $199 <sup>99</sup></h2>
              <div className='view_sale'> VIEW SALE</div>
            </div>
            
          </div>
          <div className="flash_sale_watchCard8">
            <div className="card8_content">
            <div>
            <p>Amazing</p> 
              <h4>COLLECTION</h4>
              <p className='check'>CHECK OUR DISCOUNTS</p>
            </div>
            <div className='button'> SHOP NOW!</div>
            </div>
          </div>
          <div className="flash_sale_watchCard9">
            <div className="card9_container">
             <div> 
              <h2>DEAL PROMOS</h2>
              <h3>STARTING AT $99</h3>
              </div>
              <div className='button'>  <p > BUY NOW</p></div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageFlashSale;
