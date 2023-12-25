import React from 'react';

function ProductSectionCard(img) {
  return (
    <div>
          <div className="product_card">
              <ul>
                  <li>
                      <img src={img} alt="" />
                  </li>
              </ul>
      </div>
    </div>
  );
}

export default ProductSectionCard;
