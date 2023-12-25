import React from 'react';
import './ShopByCategoryFilter.scss'
function ShopByCategoryFilter() {
  return (
    <div>
      <div className="shop_by_category">
        <ul>
          <li className="shop_by_category_top">
            <i class="fa-solid fa-bars"></i>SHOP BY CATEGORY
          </li>
          <li>
            <div>
              <i class="fa-solid fa-shirt"></i>fashion
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            <div>
              <i class="fa-regular fa-clock"></i>Electronics
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            <div>
              <i class="fa-solid fa-gift"></i>Gifts
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            <div>
              <i class="fa-solid fa-seedling"></i>Home&Gardens
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            <div>
              <i class="fa-solid fa-microphone-lines"></i>Music
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            <div>
              <i class="fa-solid fa-volleyball"></i>Sport
              </div>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
        </ul>
        <div className="huge_sale">
          <p>HUGE SALE-70% OF</p>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategoryFilter;
