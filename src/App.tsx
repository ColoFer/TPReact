import { BrowserRouter as Router } from "react-router-dom" //BrowserRouter es el enrutador principal, lo renombra con Router
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import AppRoutes from "./routes/AppRoutes"
import { Container } from "react-bootstrap"
import { Suspense } from "react"
import Loader from "./components/Loader/Loader"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <ToastContainer/>

      <Router>
        <Header/>
          <Container style={{minHeight: "100vh", minWidth:"100%", padding: "0"}}>
            <Suspense fallback={<Loader/>}>
            <AppRoutes/>
            </Suspense>
          </Container>
        <Footer/>
      </Router>
    </>
  )
}

export default App


//Suspense: Carga diferida