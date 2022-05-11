import './App.css'
import { MySection } from './components/MySection'
import { ConfiguredMySection } from './components/MySection.config'
import { ProfileProvider, Profile } from "./types"

function App() {
  // In a real site this would be coming from streams
  const fakeProfile = {
    name: "Yext DC",
    description: "Yext’s Washington, D.C.-area headquarters, located at 1101 Wilson Boulevard in Arlington, Virginia, connect to Freedom Park and offer unobstructed views of the Potomac River and Washington Monument.",
    logo: {height: 817, width: 1560, thumbnails: [], url: "https://a.mktgcdn.com/p/NIb_6lhCZy78Vx19Hxx9zzA4pre4_f3eZLuTFXiqljQ/1560x817.jpg"},
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
      </div>
    </ProfileProvider>
  )
}

export default App
