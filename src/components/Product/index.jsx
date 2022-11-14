import ProductItem from "./style";

const Product = ({ handleClick, product }) => {
  const { name, category, price, img, id } = product;
  return (
    <ProductItem>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{category}</p>
      <span>R${price.toFixed(2)}</span>
      <button id={id} onClick={() => handleClick(id)}>
        Adicionar
      </button>
    </ProductItem>
  );
};

export default Product;
