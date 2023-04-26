export default function Footer () {
    const currentYear = new Date().getFullYear();
    const gitHubLink = "https://github.com/veronicadfl/profile-app";
    const Linkedinlink ="https://www.linkedin.com/in/veronicadefelice/"
        return (
    <footer>
        <p>&copy; {currentYear} </p>

        <a href={gitHubLink} 
           target="_blank"
           rel="noreferrer" >GitHub</a>

           <br />

           <a href={Linkedinlink} 
           target="_blank"
           rel="noreferrer" >Linkedln</a>



    </footer>
    
        )
    }