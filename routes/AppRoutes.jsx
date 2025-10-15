import {CreateBrowserRouter} from 'react-router-dom'
import Layout from '../src/Layout'
import Home from '../src/pages/Home'
const router = CreateBrowserRouter([{
    path:'/',
    Element: <Layout/>,
    children:[
        {index: true , Element:<Home/>}
    ]
}])

export default router