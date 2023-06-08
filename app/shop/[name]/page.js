
import ProductList from "../../components/ProductList";
import styles from "../../page.module.css";
import { products } from "../../../data/products";




const Products = ({ params }) => {
  const filtrProducts = products.filter(product => product.shopName === params.name);
  return (
    <>
      <h1 className={styles.products_title}>{params.name}</h1>
      <ProductList filtrProducts={filtrProducts} />
    </>
  )
}

export default Products;