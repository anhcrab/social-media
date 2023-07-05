import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PersonalPage from "./pages/PersonalPage"


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/app/',
      element: <PersonalPage />
    }
  ])

  return(
    <RouterProvider router={router} />
  )
}

export default App
