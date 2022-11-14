import Product from "../Product";
import BuyCart from "./style";
import CartFull from "./style2";

const Cart = ({ productsCart, removeProduct }) => {
  const cartTotalItens = productsCart.reduce(
    (previousValue, currentProduct) => {
      return (previousValue += currentProduct.price);
    },
    0
  );
  return (
    <ul>
      {cartTotalItens > 0 ? (
        <>
          {productsCart.map((product) => {
            return (
              <>
                <CartFull>
                  <div key={product.id}>
                    <div className="image">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="nameCategory">
                      <h4>{product.name}</h4>
                      <p>{product.category}</p>
                    </div>
                    <button
                      onClick={() => removeProduct(product.id)}
                      id={product.id}
                    >
                      Remover
                    </button>
                  </div>
                </CartFull>
              </>
            );
          })}
          <p>R${cartTotalItens.toFixed(2)}</p>
        </>
      ) : (
        <>
          <BuyCart>
            <div>
              <h3>Carrinho de Compras</h3>
            </div>
            <h4>Sua sacola está vazia</h4>
            <p>Adicione itens</p>
          </BuyCart>
        </>
      )}
    </ul>
  );
};

export default Cart;
