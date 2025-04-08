import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Library from "./components/Library"

import data from "./assets/data/linksData"
import comics from "./assets/data/comics"

function App() {
  return (
    <>
      <Header links={data.header} />
      <Main comics={comics} />
      <Library links={data.library} />
      <Footer links={data.footer} />
    </>
  )
}

export default App