import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h2>Winter sale</h2>
      <Outlet />
    </>
  );
};
export default Home;
