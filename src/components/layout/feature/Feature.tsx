import type { ReactNode } from 'react';
import type { Feature } from '../../../types/feature';
import './Feature.css';

export type FeatureProps = {
	icon: string;
	title: ReactNode;
	description: ReactNode;
};

export default function Feature(props: FeatureProps) {
	const { icon, title, description } = props;

	return (
		<div className="feature-container">
			<div className="icon">{icon}</div>

			<div className="title">{title}</div>

			<div className="description">{description}</div>
		</div>
	);
}
