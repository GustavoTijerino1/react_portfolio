import React from 'react'


export default function Body() {
    const nmn = require('./assets/img/nmn.png')
    const quiz = require('./assets/img/codeQuiz.png')
    const passWord = require('./assets/img/passWord.png')
    const gustavo = require('./assets/img/me.jpg')
    const ecom = require('./assets/img/runStart.png')
    const project = require('./assets/img/project.png')
    const noteTaker = require('./assets/img/noteTaker.png')
    
  return (
      <>
    <figure id="img">
 
        </figure>
        <main>
            <div id="me"> <img src={gustavo} alt="A pic of me"/> </div>
    
                <section id="aboutme" >
                    <h2> About me</h2>

                    <p>
                        Hello, my name is Gustavo Tijerino. I served in the military as a Team Leader with 3 years’ experience in supervising, monitoring performance, and reporting to management. Able to adapt to constant changes and overcome any situation. Adaptable in a fast paced environment with a growth mindset.  
                    </p>
            </section> 

            <section id="work">
            <h2>Projects</h2>

                <figure  className="brd" >
                        <p className="abs"> N-M-N</p>
                        <a href="https://nerds-meet-nerds.herokuapp.com/"target="_blank"rel="noreferrer"> <img id="shrink" src={nmn} alt="Project 2"/></a>
                 </figure>
               <div id="picBox"> 
                    <figure className="row"  >
                        <p className="abs">Quizzle Zizzle</p>
                        <a href="https://gustavotijerino1.github.io/code-quiz/"target="_blank"rel="noreferrer"> <img id="small" src={quiz} alt="Timed Quiz"/></a> 
                    </figure>
                
                    <figure className="row"  >
                        <p className="abs">Password Generator</p>
                        <a href="https://gustavotijerino1.github.io/password-generator/"target="_blank"rel="noreferrer"> <img id="small" src={passWord} alt="password-generator"/></a> 
                    </figure>

                    <figure className="row"  >
                        <p className="abs">E-Com</p>
                        <a href="https://gustavotijerino1.github.io/password-generator/"target="_blank"rel="noreferrer"> <img id="small" src={ecom} alt="e-com"/></a> 
                    </figure>

                    <figure className="row"  >
                        <p className="abs">Project 1</p>
                        <a href="https://caitlinscodes.github.io/group_project_one/"target="_blank"rel="noreferrer"> <img id="small" src={project} alt="project1"/></a> 
                    </figure>

                    <figure className="row"  >
                        <p className="abs">Note Taker</p>
                        <a href="https://thawing-coast-19158.herokuapp.com/"target="_blank"rel="noreferrer"> <img id="small" src={noteTaker} alt="noteTaker"/></a> 
                    </figure>
                </div>
            </section>

    
        
        </main>
      </>

  )
}
