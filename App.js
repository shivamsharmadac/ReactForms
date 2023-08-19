// import React from "react";
// import AddProductForm from "./AddProductForm";
// import ProductTable from "./ProductTable";
// // function App() {
// //   return (
// //     <div className="App">
// //       <AddProductForm />
// //     </div>
// //   );
// // }

// function App() {
//   const [products, setProducts] = React.useState([]);

//   const addProduct = (product) => {
//     setProducts([...products, product]);
//   };

//   return (
//     <div className="App">
//       <AddProductForm addProduct={addProduct} />
//       <ProductTable products={products} />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import AddProductForm from './AddProductForm';
import ProductTable from './ProductTable';
import sampleData from './sampleData'; // Import the sample data

function App() {
  const [products, setProducts] = React.useState(sampleData); // Use the sample data initially

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="App">
     {/* <AddProductForm addProduct={addProduct} /> */}
      <ProductTable products={products} />
    </div>
  );
}

export default App;

