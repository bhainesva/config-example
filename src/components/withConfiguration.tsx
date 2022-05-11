import React, { EffectCallback, PropsWithChildren, useEffect } from "react"

type Provider<P> = () => P

// These are props that all components should take. 
// The logic for handling them should be handled in the withConfiguration function,
// implementers of components shouldn't have to think about them
export interface GlobalComponentProps {
  useEffect?: () => EffectCallback | void
}

export default function withConfiguration<P>(Component: React.ComponentType<P>, useProvider: Provider<P & GlobalComponentProps>) {
  function Comp(props: PropsWithChildren<{}>) {
    const providedProps = useProvider()
    useEffect(() => {
      if (providedProps.useEffect) providedProps.useEffect()
    }, [])
    return <Component {...providedProps} {...props} />
  }
  return Comp
}