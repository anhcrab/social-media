import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import '../components/Community/Community'
import Community from '../components/Community/Community'
import communities from '../data/communities'

const CommunityTemplate = () => {
    
    const routes = []
    
    communities.forEach((community) => {
        routes.push({
            path: community.pageURL,
            element: <Community community={community} />,
        })
    })
    const router = createBrowserRouter(routes)

    return (
        <RouterProvider router={router} />
    )
}

export default CommunityTemplate