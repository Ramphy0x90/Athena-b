import { StrictMode } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './app/router';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppRouter />
	</StrictMode>
);
