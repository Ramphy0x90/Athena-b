import './Home.css';
import homeHeader from '../../assets/vid/home-header.mp4';
import Feature from '../../components/layout/feature/Feature';
import { FEATURES_DEF, PARTNERS_DEF, SERVICES_DEF } from './_static_data';
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

			<section className="partners">
				<div className="header">Unsere Partnership</div>

				<div className="body">
					<div className="logos-container">
						{PARTNERS_DEF.map((partner) => {
							return (
								<a href={partner.link} target="_blank">
									<img src={partner.img}></img>
								</a>
							);
						})}
					</div>
				</div>
			</section>

			<section className="services">
				<div className="header">Unsere Leistungen</div>

				<div className="body">
					<div className="services-container">
						{SERVICES_DEF.map((service) => {
							return (
								<div className="service">
									<div className="body">
										<div className="title">{service.title}</div>
										<div className="description">{service.description}</div>
									</div>

									<div className="more">
										<a href="">
											<i className="bi bi-arrow-right-circle"></i>Mehr erfahren
										</a>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
