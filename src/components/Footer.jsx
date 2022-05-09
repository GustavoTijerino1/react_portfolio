import React from 'react'
import { BsGithub, BsLinkedin, BsFillEnvelopeFill, BsFillTelephonePlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Footer() {
  return (
 <>
    <div><Header/></div>
 <footer id="contact">
            
            <h3>
                Contact Me

            </h3>
        
            <nav>
                <ul>
                    <li>
                    <Link className="icon" to='/contact'><BsFillEnvelopeFill/></Link>
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
