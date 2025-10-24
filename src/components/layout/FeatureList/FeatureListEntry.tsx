import './FeatureListEntry.css';
import type { FeatureProps } from '../feature/Feature';

export type FeatureListEntryProps = FeatureProps & {
	isLast: boolean;
};

export default function FeatureListEntry(props: FeatureListEntryProps) {
	const { icon, title, description, isLast } = props;

	return (
		<div className="feature-list-entry-container">
			<div className="icon-line">
				<div className="icon">{icon}</div>
				{!isLast ? <div className="line"></div> : <></>}
			</div>

			<div className="content">
				<div className="title">{title}</div>
				<div className="description">{description}</div>
			</div>
		</div>
	);
}
