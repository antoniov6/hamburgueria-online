import { useEffect, useState } from "react";
import ContainerHeader from "./styles";
import logo from "./logo.png";

const Header = ({ products, setProductsFiltered }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const productFiltered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      );
    });
    setProductsFiltered(productFiltered);
  }, [search]);

  return (
    <ContainerHeader>
      <img src={logo} alt="" />
      <form>
        <input
          placeholder="Digitar Pesquisa"
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button type="submit">Pesquisa</button>
      </form>
    </ContainerHeader>
  );
};

export default Header;
