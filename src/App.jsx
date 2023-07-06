import { RouterProvider, createBrowserRouter } from "react-router-dom";
import L_header from "./components/L_header/L_header";
import L_body from "./components/L_body/L_body";

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
