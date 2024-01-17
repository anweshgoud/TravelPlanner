import HeaderContains from "../ContainPages/Headercontain";
import Asian from "../Asia_Countries/Asia_Country_Wise";
import Footer from "../ContainPages/footer";
import CountryPlans from "../Asia_Countries/CountryPlans";
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Route,
} from "react-router-dom";
import Combination from "../ContainPages/ComBination";

const MainCombination = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Combination></Combination> },
    { path: "/country", element: <Asian></Asian> },
    { path: "/Countryplans", element: <CountryPlans></CountryPlans> },
  ]);
  return (
    <>
      <HeaderContains></HeaderContains>

      <RouterProvider router={router}>
        <div>
          <nav>
            <Link to="/"></Link>
          </nav>

          <Route path="/" element={<Combination></Combination>}></Route>
          <Route path="/country" element={<Asian></Asian>}></Route>
          <Route
            path="/Countryplans"
            element={<CountryPlans></CountryPlans>}
          ></Route>
        </div>
      </RouterProvider>

      <Footer></Footer>
    </>
  );
};

export default MainCombination;
