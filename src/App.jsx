import Navbar from "./Components/Navbar"
import Body from "./Components/Body"

const App = () => {
  return (<>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-700">
      <Body/>
    </div>
   </>
  )
}

export default App