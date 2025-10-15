import { createBrowserRouter } from 'react-router-dom'
import Layout from '../src/Layout'
import Home from '../src/pages/home'
const router = createBrowserRouter([{
    path:'/',
    element: <Layout/>,
    children:[
        {index: true , element:<Home/>}
    ]
}])

export default router