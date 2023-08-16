import { Box } from "@mui/material";
import TabsComponent from "./components/TabsComponent";
import { shoes as tenis, eletronicos } from "./data";
import TableComponent from "./components/TableComponent";
import { tabs, Tabs } from "./data/tabs.ts";
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from "react-router-dom";
import React, { Fragment, useState } from "react";
import ProductDetail from "./components/ProductDetail";

function App() {
  
  const [key, setKey] = useState<Tabs>(tabs[0].value as Tabs);
  const handleSetKey = (key: Tabs) => {
    setKey(key);
  };

  const products = {
    tenis,
    eletronicos,
    maquiagens: []
}
const productList = products[key]
  

  const RootLayout = () => {
    return (
      <Box>
        <TabsComponent onTabChange={handleSetKey} tabs={tabs} tab={key} />
        <Outlet />
      </Box>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Fragment>
        <Navigate to={`/${key}`} />
        {RootLayout()}
      </Fragment>,
      children: [
        ...tabs.map((tab) => ({
          path: `/${tab.value}`,
          element: (
            <TableComponent
              productName={tab.value as Tabs}
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
