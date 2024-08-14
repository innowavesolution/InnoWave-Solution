import { createBrowserRouter } from "react-router-dom";
import Home from "../../UserPage/Home";


 const router  = createBrowserRouter([

    {
        path: "/",
        element: <Home/>,
        children : [{
            // path: "",
            // element " ",
        }]
    }
 ])

 export default router;