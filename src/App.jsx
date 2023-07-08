import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonalPage from "./pages/PersonalPage";
import Login from "./components/Auth/login";
import ProfilePage from "./pages/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/app/",
      element: <PersonalPage />,
    },
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/app/profile",
      element: <ProfilePage/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
