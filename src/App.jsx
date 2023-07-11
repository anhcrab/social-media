import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PersonalPage from "./pages/PersonalPage"
import AddCommunityPage from "./pages/AddCommunityPage"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/app/discovery',
      element: <PersonalPage />
    },
    {
      path: '/app/onboarding',
      element: <AddCommunityPage/>
    }
  ])

  return(
    <RouterProvider router={router} />
  )
}

export default App
