import './App.css'
import {Navbar, Welcome, Footer, Transactions, Services} from "./Components/index"

function App() {  

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
