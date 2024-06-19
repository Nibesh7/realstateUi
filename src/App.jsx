import HomePage from "./pages/HomePage/homepage"
import Layout from "./pages/Layout/Layout";
import ListPage from "./pages/ListPage/ListPage";
import Profile from "./pages/ProfilePage/Profile";
import SinglePage from "./pages/SinglePage/SinglePage";


import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>

        },
        {
          path: "/list",
          element: <ListPage/>

        },
        {
          path:"/:id",
          element: <SinglePage/>
        },
        {
          path:"/profile",
          element: <Profile/>
        }
      ]
    },
    
  ]);
  return (
    <RouterProvider router={router} />
    
  )
}

export default App