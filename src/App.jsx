import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PersonalPage from "./pages/PersonalPage"
import CommunityTemplate from "./pages/CommunityTemplate"


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/app/*',
      element: <PersonalPage />,
    },
    {
      path: '/app/discovery/*',
      element: <PersonalPage />
    },
    {
      path: '/app/dao/*',
      element: <CommunityTemplate />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
