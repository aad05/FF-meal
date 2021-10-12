import Charts from "../Chart";
import Cards from "../Cards";
export const Body = ({ active }) => {
  console.log(active);
  return active ? <Charts /> : <Cards />;
};
export default Body;
