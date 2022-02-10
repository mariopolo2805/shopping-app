import Home from "../pages/Home/Home";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProducDetail/ProductDetail";
import NotFound from "../pages/NotFound/NotFound";

const routes = [
  {
    exact: true,
    path: "",
    element: <Home />,
  },
  {
    path: "products",
    element: <ProductList />,
  },
  {
    path: "products/:productId",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
