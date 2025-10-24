import './Home.css';
import homeHeader from '../../assets/vid/home-header.mp4';
import Feature from '../../components/layout/feature/Feature';
import { FEATURES_DEF } from './_static_data';
import FeatureListEntry from '../../components/layout/FeatureList/FeatureListEntry';

export default function Home() {
	const FEATURES = FEATURES_DEF;

	return (
		<div className="home-page-container page-container">
			<div className="header">
				<div className="video-container">
					<video autoPlay muted loop src={homeHeader} />
				</div>
			</div>

			<section className="intro">
				<Feature
					icon="🌸"
					title={
						<>
							Warum eine professionelle
							<br />
							Gesichtsbehandlung wichtig ist
						</>
					}
					description="Unsere Haut ist täglich zahlreichen Belastungen ausgesetzt - Umweltfaktoren, Stress,
					UV-Strahlung und Make-up hinterlassen Spuren. Eine professionelle Gesichtsbehandlung ist
					daher weit mehr als nur Wellness - sie ist eine gezielte Pflege, die Ihre Haut langfristig
					gesund, strahlend und jugendlich hält."></Feature>
			</section>

			<section className="features">
				{FEATURES.map((feature, index) => {
					return (
						<FeatureListEntry
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							isLast={FEATURES.length === index + 1}></FeatureListEntry>
					);
				})}
			</section>
		</div>
	);
}
