import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import '../components/Community/Community'
import Community from '../components/Community/Community'
import communities from '../data/communities'

const CommunityTemplate = () => {
    
    return (
        <Routes>
            {communities.map((community) =>
                <Route
                    key={community.communityId}
                    path={`${community.community}/${community.communityId}/*`}
                    element={<Community community={community} />}
                />
            )}
        </Routes>
    )
}

export default CommunityTemplate