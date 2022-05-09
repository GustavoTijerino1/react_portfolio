import React from 'react'

// import Header from './Header'

export default function Body() {
    const gustavo = require('./assets/img/me.jpg')
    
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
        </main>



      </>

  )
}
