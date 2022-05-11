import { Image, Coordinates, Address, Hours } from "@yext/types"
import { createContext, useContext } from "react"

// This should be auto-generated
// https://docs.google.com/document/d/1-UNlTEpPLhuWpbaoCo4xXLz0K0_Sk2g1ofBINOW51NA/edit#
export interface Profile {
	name: string
	description: string
	logo: Image
	address: Address
	openTime: string
	hours: Hours
	mainPhone: string
	geocodedCoordinate: Coordinates
	services: string[]
	photoGallery: Image[]
	nearby?: Profile[]
	_site: any
} 

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
 export function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error("Attempted to call useProfile outside of ProfileProvider");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

// We still have to specify a type, but no default
const [useProfileContext, ProfileProvider] = createCtx<Profile>();

function useProfile<T>(fieldSelector: (p: Profile) => T): T {
	const context = useProfileContext();
  return fieldSelector(context);
}

export { useProfile, ProfileProvider } 