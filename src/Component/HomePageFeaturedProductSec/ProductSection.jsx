import React, { useEffect, useState } from "react";
import "./ProductSection.scss";
import { v4 as uuidv4 } from "uuid";

function ProductSection() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  return (
    <div>
      <div className="products_cards">
        {fetchData.map((x) => (
          <div className="product_card">
            <ul key={uuidv4}>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${x.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: '1px solid black',
                  width: "100%",
                  minHeight:"300px"
                }}
              >
                {" "}
              </div>
              <li>{x.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
