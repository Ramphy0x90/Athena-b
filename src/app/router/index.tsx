import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../../pages/home/Home';
import Impressium from '../../pages/impressium/Impressium';
import TermsAndConditions from '../../pages/terms-and-conditions/TermsAndConditions';
import Nails from '../../pages/nails/Nails';

export type RouteDef = {
	path: string;
	id: string;
	label: string;
};

export const routes: RouteDef[] = [
	{ path: '/', id: 'home', label: 'Home' },
	{ path: '/nails', id: 'nails', label: 'Nails' },
	{ path: '/agb', id: 'termsAndConditions', label: 'AGB' },
	{ path: '/impressium', id: 'impressium', label: 'Impressium' },
] as const;

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/nails', element: <Nails /> },
			{ path: '/agb', element: <TermsAndConditions /> },
			{ path: '/impressium', element: <Impressium /> },
		],
	},
]);

export function AppRouter() {
	return <RouterProvider router={router} />;
}
