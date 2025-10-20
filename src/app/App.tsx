import './App.css';
import Navbar from '../components/layout/navbar/Navbar';
import PageLayout from '../components/layout/page-layout/PageLayout';

function App() {
	return (
		<div className="app-container">
			<Navbar></Navbar>
			<PageLayout />
		</div>
	);
}

export default App;
export const APP_NAME = 'Beauty Babe';
