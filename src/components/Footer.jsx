import React from 'react'
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill, BsFillTelephonePlusFill } from "react-icons/bs";
export default function Footer() {
  return (
 <>
 <footer id="contact">
            
            <h3>
                Contact Me

            </h3>
        
            <nav>
                <ul>
                    <li>
                        <a href="mailto:marquee@gmail.com"target="_blank"rel="noreferrer"><BsFillEnvelopeFill/></a>
                    </li>
                    
                    <li>
                        <a href="tell:555-555-5555"> <BsFillTelephonePlusFill/></a>

                    </li>
                    
                    <li>
                        <a href="https://github.com/GustavoTijerino1"target="_blank"rel="noreferrer"> <BsGithub/></a>

                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/gustavo-tijerino-203647224/"target="_blank"rel="noreferrer"><BsLinkedin/></a>

                    </li>

                </ul>
            </nav>

        </footer>
 
 
 </>
  )
}
