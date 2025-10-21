import './App.css';
import Navbar from '../components/layout/navbar/Navbar';
import PageLayout from '../components/layout/page-layout/PageLayout';
import Footer from '../components/layout/footer/Footer';

function App() {
	return (
		<div className="app-container">
			<Navbar></Navbar>

			<PageLayout />

			<Footer />
		</div>
	);
}

export default App;
export const APP_NAME = 'Beauty Babe';
