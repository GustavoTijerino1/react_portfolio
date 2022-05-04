import React from 'react'

export default function Body() {
  return (
      <>
    <figure id="img">
 
        </figure>
        <main>
            <div id="me" class="gone"> <p id="hidden">Disclaimer: That's Not Me.</p> <img src="./assets/images/goat.jpg" alt="A pic of me"/> </div>
    
                <section id="aboutme" >
                    <h2> About me</h2>

                    <p>
                        Hello, my name is Gustavo Tijerino. I served in the military as a Team Leader with 3 years’ experience in supervising, monitoring performance, and reporting to management. Able to adapt to constant changes and overcome any situation. Adaptable in a fast paced environment with a growth mindset.  
                    </p>
            </section> 

            <section id="work">
            <h2>Projects</h2>

                <figure  class="brd" >
                        <p class="abs"> N-M-N</p>
                        <a href="https://nerds-meet-nerds.herokuapp.com/"target="_blank"rel="noreferrer"> <img id="shrink" src="./assets/images/nerds-meet-nerds.herokuapp.com_.png" alt="Project 2"/></a>
                 </figure>
               <div id="picBox"> 
                    <figure class="row"  >
                        <p class="abs">Quizzle Zizzle</p>
                        <a href="https://gustavotijerino1.github.io/code-quiz/"target="_blank"rel="noreferrer"> <img id="small" src="./assets/images/codeQuiz.png" alt="Timed Quiz"/></a> 
                    </figure>
                
                    <figure class="row"  >
                        <p class="abs">Password Generator</p>
                        <a href="https://gustavotijerino1.github.io/password-generator/"target="_blank"rel="noreferrer"> <img id="small" src="./assets/images/FinalProduct.png" alt="password-generator"/></a> 
                    </figure>
                </div>
            </section>

    
        
        </main>
      </>

  )
}
