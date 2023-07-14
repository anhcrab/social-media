import { RouterProvider, createBrowserRouter } from "react-router-dom"
import UseCase from "./pages/UseCase"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <UseCase/>
    },
  ])

  return(
    <RouterProvider router={router} />
  )
}

export default App
