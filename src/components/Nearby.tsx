// Nearby component using the MySection component as a card
import { Profile, ProfileProvider } from "../types";
import { MySection, MySectionProps } from "./MySection";
import { MySectionForNearby } from "./MySection.config";

interface NearbyProps {
	title: string
	locations: Profile[]
}

export function Nearby(props: NearbyProps) {
	return (
		<div>
			<h2 className="font-bold mb-3">{props.title}</h2>
			<div className="grid grid-cols-3 gap-4">
				{props.locations.map(loc => <MySection title={loc.name} description={loc.description} image={loc.logo.url} />)}
			</div>
		</div>
	)
}

export function NearbyWithConfiguredCard(props: NearbyProps) {
	return (
		<div>
			<h2 className="font-bold mb-3">{props.title}</h2>
			<div className="grid grid-cols-3 gap-4">
				{props.locations.map((loc) => 
					<ProfileProvider value={loc}>
						<MySectionForNearby />
					</ProfileProvider>
				)}
			</div>
		</div>
	)
}

export interface NearbyConfigProps {
	title: string
	locations: Profile[]
	mySectionPropsProvider: (p: Profile) => MySectionProps
}

export function NearbyWithConfigProps(props: NearbyConfigProps) {
	return (
		<div>
			<h2 className="font-bold mb-3">{props.title}</h2>
			<div className="grid grid-cols-3 gap-4">
				{props.locations.map(loc => <MySection {...props.mySectionPropsProvider(loc)}/> )}
			</div>
		</div>
	)
}