import Experience from "./experience";
import Personal from "./personal";
import Skills from "./skills";

const About =()=>{
    return(
        <div className="container w-75 marTop">
            <Personal />
            {/* <Skills />
            <Experience /> */}
        </div>
    )
}
export default About;