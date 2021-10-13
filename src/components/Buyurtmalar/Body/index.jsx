import MenuH from "../menuH";
import MenuV from "../menuV";

export const Body = ({ active, productType }) => {
  return active ? <MenuH productType={productType} /> : <MenuV />;
};

export default Body;
