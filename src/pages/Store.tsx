import products from "../product.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <div>
        {products.map((item) => (
          <StoreItem {...item} />
        ))}
      </div>
    </>
  );
};

export default Store;
