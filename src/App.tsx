import { Box } from "@mui/material";
import TabsComponent from "./components/TabsComponent";
import { tenis, eletronicos } from "./data";
import TableComponent from "./components/TableComponent";
import { tabs, Tabs } from "./data/tabs.ts";
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from "react-router-dom";
import  { Fragment, useState } from "react";
import ProductDetail from "./components/ProductDetail";

function App() {
  
  const [productType, setProductType] = useState<Tabs>(tabs[0].value as Tabs);
  const handleSetKey = (type: Tabs) => {
    setProductType(type);
  };

  const products = {
    tenis,
    eletronicos,
    maquiagens: []
}
const productList = products[productType]
  

  const RootLayout = () => {
    return (
      <Box>
        <TabsComponent onTabChange={handleSetKey} tabs={tabs} tab={productType} />
        <Outlet />
      </Box>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Fragment>
        <Navigate to={`/${productType}`} />
        {RootLayout()}
      </Fragment>,
      children: [
        ...tabs.map((tab) => ({
          path: `/${tab.value}`,
          element: (
            <TableComponent
              products={productList}
              productType={tab.value as Tabs}
            />
          ),
        })),
      ],
    },
    ...tabs.map((tab) => ({
      path: `/${tab.value}/:id`,
      element: <ProductDetail products={productList}/>,
    }))
  ]);
  return <RouterProvider router={router} />;
}

export default App;
