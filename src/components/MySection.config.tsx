// There should be a helper to generate a stub
// of this file with a default config object based on the
// types of your component's props

import { MySection, MySectionProps } from "./MySection"
import { useProfile } from "../types";
import withConfiguration, { GlobalComponentProps } from "./withConfiguration";

// If we think the single object is easier to understand than 
// the propsForRender function we can expose something like this
// I kind of like just having the usePropsForRender function on its own
const config: Partial<MySectionProps & GlobalComponentProps> = {
	title: "Config powered description!",
	useEffect: () => {console.log("I'm a custom onMount hook!")},
}

function usePropsForRender(): MySectionProps {
	// This style is copied from the way `useAnswersState` works
	// If you want multiple properties you could also do
	// const { name, logo } = useProfile(profile => profile);
	const name = useProfile(profile => profile.name)

	return Object.assign(config, {
		title: `About ${name}`,
		description: "Learn about Us!",
		image: "https://a.mktgcdn.com/p/NIb_6lhCZy78Vx19Hxx9zzA4pre4_f3eZLuTFXiqljQ/1560x817.jpg",
	})
}

// Use standard withConfiguration helperr to export version powered through configuration
// If we want to use multiple version of this component configured in different ways
// we would export multiple of these with different usePropsForRender functions
// We can think of a way to do that without needing code changes if we think it'll be common
const ConfiguredMySection = withConfiguration(MySection, usePropsForRender)
export { ConfiguredMySection }