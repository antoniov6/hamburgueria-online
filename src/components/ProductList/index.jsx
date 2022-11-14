import Product from "../Product";
import List from "./style";

const ProductList = ({ products, productsFiltered, handleClick }) => {
  return (
    <>
      <List>
        {productsFiltered.length > 0 ? (
          <>
            {productsFiltered.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleClick={handleClick}
              />
            ))}
          </>
        ) : (
          <>
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleClick={handleClick}
              />
            ))}
          </>
        )}
      </List>
    </>
  );
};

export default ProductList;
