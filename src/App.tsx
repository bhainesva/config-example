import './App.css'
import { MySection } from './components/MySection'
import { ConfiguredMySection } from './components/MySection.config'
import { Nearby, NearbyWithConfiguredCard } from './components/Nearby'
import { ConfiguredNearby } from './components/Nearby.config'
import { ProfileProvider, Profile } from "./types"

function App() {
  // In a real site this would be coming from streams
  const fakeProfile = {
    name: "Yext DC",
    description: "Yext’s Washington, D.C.-area headquarters, located at 1101 Wilson Boulevard in Arlington, Virginia, connect to Freedom Park and offer unobstructed views of the Potomac River and Washington Monument.",
    logo: {height: 817, width: 1560, thumbnails: [], url: "https://a.mktgcdn.com/p/NIb_6lhCZy78Vx19Hxx9zzA4pre4_f3eZLuTFXiqljQ/1560x817.jpg"},
    nearby: [
      {
        name: "Yext New York",
        description: "Yext announces its new global headquarters at 61 Ninth Avenue in Chelsea, a nine-floor building with high ceilings, private terraces on every floor, and a rooftop park overlooking the Hudson River. As Yext grows around the world, The Yext Building will allow the company to hire hundreds of employees in its home of New York City.",
        logo: {height: 817, width: 1560, thumbnails: [], url: "https://www.yext.com/wp-content/uploads/2019/04/exteriorwide_blog.jpg"},
      },
      {
        name: "Yext Paris",
        description: "This office is in paris wow.",
        logo: {height: 817, width: 1560, thumbnails: [], url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221130827/iStock-155381519.jpg"},
      },
      {
        name: "Yext Moon",
        description: "Did you know we have an office on the moon?",
        logo: {height: 817, width: 1560, thumbnails: [], url: "https://i0.wp.com/thehill.com/wp-content/uploads/sites/2/2022/01/ca_wolfmoon_istock.jpg?w=2000&ssl=1"},
      }
    ]
  }

  return (
    <ProfileProvider value={fakeProfile as unknown as Profile}>
      <div className="App">
        {/* Direct usage of component */}
        <MySection title={"About Us!"} description={"Learn About Us!"} image="https://a.mktgcdn.com/p/NIb_6lhCZy78Vx19Hxx9zzA4pre4_f3eZLuTFXiqljQ/1560x817.jpg" headingLevel={2} />
        <br />
        <br />
        <br />
        <br />
        {/* Component using configuration file */}
        <ConfiguredMySection />
        <br />
        <br />
        <br />
        <br />
        {/* Nearby section with everything hardcoded */}
        <Nearby title={"Nearby Locations"} locations={fakeProfile.nearby as unknown as Profile[]} />
        <br />
        <br />
        <br />
        <br />
        {/* Nearby section with separately configured card */}
        <NearbyWithConfiguredCard title={"Nearby Locations"} locations={fakeProfile.nearby as unknown as Profile[]} />
        <br />
        <br />
        <br />
        <br />
        {/* Everything configured at the nearby component level */}
        <ConfiguredNearby />
      </div>
    </ProfileProvider>
  )
}

export default App
