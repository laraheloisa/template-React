import { TemaProvider } from "./context/Tema.Context"
import { Home } from "./pages/Home"
function App() {
  

  return (
    <TemaProvider>
      <Home />
    </TemaProvider>

  
  )
}

export default App
