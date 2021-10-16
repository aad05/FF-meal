import Charts from "../Chart";
import Cards from "../Cards";
export const Body = ({ active, refresh, cancel }) => {
  return active ? (
    <Charts cancel={cancel} refresh={refresh} />
  ) : (
    <Cards refresh={refresh} />
  );
};
export default Body;
