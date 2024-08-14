import { createBrowserRouter } from "react-router-dom";
import Home from "../../UserPage/Home";
import UserLayout from "../../Layout/UserLayout/UserLayout";


 const router  = createBrowserRouter([

    {
        path: "/",
        element: <UserLayout/>,
        children : [{
           path: "/",
           element : <Home/>,
        }]
    }
 ])

 export default router;