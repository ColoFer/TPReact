import AboutUs from "../components/AboutUs/AboutUs"
import CarouselHome from "../components/CarouselHome/CarouselHome"

//Renderizar subcomponentes que le estamos pasando
const HomePage = () => {
  return (
    <>
    <CarouselHome/>
    <AboutUs/>
    </>
  )
}

export default HomePage