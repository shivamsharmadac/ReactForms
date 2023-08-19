import React from 'react';
import './ProductTable.css';

const ProductTable = ({ products }) => {
  return (
    <div className="table-container">
        <div className="header">
      <h2>Product Table</h2>
      </div>

      <table className="product-table" >
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Chemical Name</th>
            <th>Price(₹)</th>
            <th>Category</th>
            <th>Company Name</th>
            <th>Expiry Date</th>
            <th>Benefit</th>
            <th>Target Insect</th>
            <th>Weight(g)</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.chemicalName}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.companyName}</td>
              <td>{product.expiryDate}</td>
              <td>{product.benefit}</td>
              <td>{product.targetInsect}</td>
              <td>{product.weight}</td>
              <td>
                <img src={product.image} alt={`Product ${index}`} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
