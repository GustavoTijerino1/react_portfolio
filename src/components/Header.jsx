import { Link } from "react-router-dom";

export default function Header() {
  return (
  <>
    <header>
        <h1>Gustavo Tijerino</h1>
             <nav>
                <ul>
                    <li> 
                        <a href="    https://docs.google.com/document/d/15xFbnUZfvePa9FoQTPy1I7SNRoIZH_Kj/export?format=pdf"target="_blank" rel="noreferrer" download>Resume</a>  

                    </li>
                 
                    <li>
                    <Link to="/">Home</Link>
                        
                    </li>
                    
                    <li>
                    <Link to="projects">Work</Link>
                        
                    </li>

                    <li>
                    <Link to="footer">Contact Me</Link>
                    </li>
                </ul>
            </nav>
    </header>
   </>
  )
}

