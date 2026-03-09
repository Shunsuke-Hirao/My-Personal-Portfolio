import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Face from "./components/Face";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";

export default function Home(){
  return(
    <main className="overflow-hidden">
        <Face></Face>
        <About></About>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <SideMenu></SideMenu>
        <Footer></Footer>
    </main>
  )
}