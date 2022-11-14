import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setProductsFiltered(json);
      });
  }, []);

  function handleClick(id) {
    const productFound = products.find((elem) => elem.id === id);
    if (productsCart.includes(productFound)) {
      console.log("produto já existe");
    } else {
      setProductsCart([...productsCart, productFound]);
    }
  }

  function removeProduct(id) {
    const productRemove = productsCart.filter((elem) => elem.id !== id);
    setProductsCart(productRemove);
  }

  return (
    <>
      <Header products={products} setProductsFiltered={setProductsFiltered} />
      <div className="ProducListCart">
        <ProductList
          products={products}
          setProductsFiltered={setProductsFiltered}
          productsFiltered={productsFiltered}
          handleClick={handleClick}
        />
        <Cart productsCart={productsCart} removeProduct={removeProduct} />
      </div>
    </>
  );
}

export default App;
