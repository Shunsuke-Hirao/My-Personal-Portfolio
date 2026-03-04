import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Face from "./components/Face";
import SideMenu from "./components/SideMenu";

export default function Home(){
  return(
    <main>
        <Face></Face>
        <About></About>
        <Education></Education>
        <Experience></Experience>
        <SideMenu></SideMenu>
    </main>
  )
}