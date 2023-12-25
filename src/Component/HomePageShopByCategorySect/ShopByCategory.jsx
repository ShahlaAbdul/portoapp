import React from 'react';
import './ShopByCategory.scss'
import ShopByCategoryFilter from '../ShopByCategoryFilter/ShopByCategoryFilter';
import ShopByCategorySlider from '../ShopByCategorySilder1/ShopByCategorySlider';

function ShopByCategory() {
  return (
    <div className="shopbycategory">
      <ShopByCategoryFilter />
      <ShopByCategorySlider />
    </div>
  );
}

export default ShopByCategory;
