import { Outlet } from 'react-router-dom';
import './PageLayout.css';

export default function PageLayout() {
	return (
		<div className="page-root-container">
			<Outlet />
		</div>
	);
}
