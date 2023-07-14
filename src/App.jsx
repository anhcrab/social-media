import { RouterProvider, createBrowserRouter } from "react-router-dom";
import L_header from "./components/L_header/L_header";
import L_body from "./components/L_body/L_body";
import L_body1 from "./components/L_body1/L_body1";
import L_body2 from "./components/Lbody2/L_body2";
import L_body23 from "./components/L_body23/L_body23";
import L_body11 from "./components/L_body1.1/L_body11";
import L_body12 from "./components/L_body1.2/L_body12";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <L_body />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
