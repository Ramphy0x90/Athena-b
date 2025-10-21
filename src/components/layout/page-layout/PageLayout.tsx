import './PageLayout.css';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
	return (
		<div className="page-root-container">
			<Outlet />
		</div>
	);
}
