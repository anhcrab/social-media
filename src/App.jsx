import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CommunityTemplate from "./pages/CommunityTemplate"
import DiscoveryPage from "./pages/DiscoveryPage"
import AddCommunityPage from "./pages/AddCommunityPage"
import Login from '../src/components/Auth/login'
import ProfilePage from "./pages/ProfilePage"


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
    },
    {
      path: '/app/discovery/*',
      element: <DiscoveryPage />
    },
    {
      path: '/app/dao/*',
      element: <CommunityTemplate />
    },
    {
      path: '/app/onboarding/',
      element: <AddCommunityPage />
    },
    {
      path: '/app/profile/*',
      element: <ProfilePage />
    },
    {
      path:'/auth/login',
      element: <Login/>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
