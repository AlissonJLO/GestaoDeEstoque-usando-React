import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Layout from "./pages/Layout.jsx";
import NewItem from "./pages/NewItem.jsx";
import List from "./pages/List.jsx";
import LayoutItem from "./pages/LayoutItem.jsx";
import SeeItem from "./pages/SeeItem.jsx";
import Update from "./pages/Update.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/list",
        element: <LayoutItem />,
        children: [
          {
            path: "/list",
            element: <List />,
          },
          {
            path: "/list/new",
            element: <NewItem />,
          },
          {
            path: "/list/:id",
            element: <SeeItem />,
          },
          {
            path: "/list/:id/update",
            element: <Update />,
          },
        ],
      },
    ],
  },
]);

export default router;
