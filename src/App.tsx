import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { MainPage } from './pages/MainPage/MainPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import { FavoritePage } from './pages/FavoritePage/FavoritePage'

const RouterConfig = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
	},
	{
		path: '/main',
		element: <MainPage />,
	},
	{
		path: '/profile',
		element: <ProfilePage />,
	},
	{
		path: '/details/:id',
		element: <DetailsPage />,
	},
	{
		path: '/favorite',
		element: <FavoritePage />,
	},
])
function App() {
	return (
		<div className='App'>
			<div className='container'>
				<RouterProvider router={RouterConfig} />
			</div>
		</div>
	)
}

export default App
