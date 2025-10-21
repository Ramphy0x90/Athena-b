import './Home.css';
import homeHeader from '../../assets/vid/home-header.mp4';

export default function Home() {
	return (
		<div className="home-page-container page-container">
			<div className="header">
				<div className="video-container">
					<video autoPlay muted loop src={homeHeader} />
				</div>
			</div>
		</div>
	);
}
