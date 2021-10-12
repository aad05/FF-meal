import MenuH from "../menuH";
import MenuV from "../menuV";
export const Body = ({ active }) => {
  return active ? <MenuH /> : <MenuV />;
};
export default Body;
