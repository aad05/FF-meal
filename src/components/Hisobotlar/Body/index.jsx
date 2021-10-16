import Charts from "../Chart";
import Cards from "../Cards";
export const Body = ({ active }) => {
  return active ? <Charts /> : <Cards />;
};
export default Body;
