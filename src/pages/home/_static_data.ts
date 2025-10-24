import type { Feature } from '../../types/feature';
import type { Service } from '../../types/service';

export const SERVICES_DEF: Service[] = [
	{
		title: 'Klassik Kosmetik AND SkinCare',
		description:
			'Nur das Beste ist genug für Ihre Haut. Professionelle Hautpflege mit den feinsten Produkten für strahlende Ergebnisse.',
	},
	{
		title: 'Hydra Facial',
		description:
			'Die berühmte Gesichtspflege aus Hollywood. Tiefenhydratation und sichtbare Verjüngung in einer Behandlung.',
	},
	{
		title: 'Jet Peel',
		description:
			'Partner mit Landsberg. Innovative Behandlungstechnologie für optimale Hautpflege-Ergebnisse.',
	},
	{
		title: 'Hautanalyse',
		description:
			'Visia Canfield - Modernste Technologie für eine präzise Analyse Ihrer Hautbedürfnisse.',
	},
	{
		title: 'Augenbrauen & Wimpern',
		description:
			'Die essentielle Ausdruckverbesserung auf Ihrem Gesicht. Perfekt geformte Brauen und voluminöse Wimpern.',
	},
	{
		title: 'Nails',
		description:
			'Perfekt modellierte Gel Nails mit UV-Licht ausgehärtet für langanhaltende Schönheit.',
	},
	{
		title: 'Maniküre und Pediküre',
		description: 'Gepflegte Nägel und weiche, glänzende Füße - perfekt für jeden Anlass.',
	},
	{
		title: 'Waxing und Sugaring',
		description: 'Sanfte und effektive Haarentfernung für glatte, gepflegte Haut.',
	},
] as const;

export const FEATURES_DEF: Feature[] = [
	{
		icon: '✨',
		title: 'Tiefenreinigung für ein reines Hautbild',
		description:
			'Im Gegensatz zur täglichen Pflege zu Hause reinigt eine professionelle Behandlung die Haut porentief. Verunreinigungen, abgestorbene Hautzellen und überschüssiger Talg werden sanft entfernt. Das Ergebnis: ein frischer, klarer Teint und sichtbar verfeinerte Poren.',
	},
	{
		icon: '🌿',
		title: 'Individuelle Pflege für jeden Hauttyp',
		description:
			'Jede Haut ist einzigartig. Nach einer professionellen Hautanalyse werden Produkte und Pflegeschritte individuell auf Ihre Bedürfnisse abgestimmt – ob trockene, empfindliche, unreine oder reife Haut. So erhält Ihre Haut genau die Pflege, die sie braucht.',
	},
	{
		icon: '💧',
		title: 'Aktivierung der Hautfunktionen',
		description:
			'Durch sanfte Massagen und hochwertige Wirkstoffe wird die Durchblutung gefördert, der Stoffwechsel aktiviert und die natürliche Zellerneuerung unterstützt. Ihre Haut wirkt frischer, vitaler und glatter.',
	},
	{
		icon: '🌼',
		title: 'Anti-Aging & Regeneration',
		description:
			'Spezielle Behandlungen mit Wirkstoffen wie Hyaluronsäure, Vitamin C oder Kollagen mindern feine Linien und verleihen der Haut neue Spannkraft. So beugen Sie vorzeitiger Hautalterung effektiv vor und unterstützen die natürliche Regeneration.',
	},
	{
		icon: '🕯️',
		title: 'Entspannung für Körper und Seele',
		description:
			'Neben den sichtbaren Hautergebnissen schenkt eine Gesichtsbehandlung auch wertvolle Entspannung. Sie wirkt beruhigend, reduziert Stress und trägt zu einem ausgeglichenen, gesunden Hautbild bei.',
	},
] as const;
