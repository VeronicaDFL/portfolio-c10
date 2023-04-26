import { Github, Linkedin } from "react-bootstrap-icons";
export default function Footer () {
    const currentYear = new Date().getFullYear();
    const gitHubLink = "https://github.com/veronicadfl/profile-app";
    const Linkedinlink ="https://www.linkedin.com/in/veronicadefelice/"
        return (
    <footer>
        <p>&copy; {currentYear} </p>
        <a href={gitHubLink} 
           target="_blank"
           rel="noreferrer"
           className= "button-effect" >
        <Github size ="20" color= "black" />
           </a>


           <br />
        
           <a href={Linkedinlink} 
           target="_blank"
           rel="noreferrer"
           className= "button-effect" >
            <Linkedin  size ="20" color = "black"/>
           </a>



    </footer>
    
        )
    }