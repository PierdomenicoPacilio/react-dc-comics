import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Library from "./components/Library"
const headerLinks = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"]

function App() {
  return (
    <>
      <Header headerLinks={headerLinks} />
      <Main />
      <Library />
      <Footer />
    </>
  )
}

export default App