// There should be a helper to generate a stub
// of this file with a default config object based on the
// types of your component's props

import { NearbyWithConfigProps, NearbyConfigProps } from "./Nearby"
import { useProfile } from "../types";
import withConfiguration, { GlobalComponentProps } from "./withConfiguration";

function usePropsForRender(): NearbyConfigProps {
	const nearbyLocs = useProfile(profile => profile.nearby);

	return {
		title: `Nearby Locations`,
		locations: nearbyLocs || [],
		mySectionPropsProvider: (profile) => ({
			title: profile.name,
			image: profile.logo.url,
			description: profile.description,
		})
	}
}

const ConfiguredNearby = withConfiguration(NearbyWithConfigProps, usePropsForRender)
export { ConfiguredNearby }