

export default function Header({text}) {
  return (
  <>
    <header>
        <h1>{text}</h1>
             <nav>
                <ul>
                    <li> 
                        <a href="https://docs.google.com/document/d/15xFbnUZfvePa9FoQTPy1I7SNRoIZH_Kj/view"target="_blank" rel="noreferrer">Resume</a>  

                    </li>
                    
                    <li>
                        <a href="#aboutme">Learn About Me</a>
                        
                    </li>
                    
                    <li>
                        <a href="#work">My Work</a>
                        
                    </li>

                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
    </header>
   </>
  )
}

