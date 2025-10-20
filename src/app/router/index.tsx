import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../../pages/home/Home';
import Impressium from '../../pages/impressium/Impressium';
import TermsAndConditions from '../../pages/terms-and-conditions/TermsAndConditions';

export type RouteDef = {
	path: string;
	id: string;
	label: string;
};

export const routes: RouteDef[] = [
	{ path: '/', id: 'home', label: 'Home' },
	{ path: '/impressium', id: 'impressium', label: 'Impressium' },
	{ path: '/agb', id: 'termsAndConditions', label: 'AGB' },
] as const;

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/impressium', element: <Impressium /> },
			{ path: '/agb', element: <TermsAndConditions /> },
		],
	},
]);

export function AppRouter() {
	return <RouterProvider router={router} />;
}
