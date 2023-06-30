//import styling (download bulma in terminal)
//bulma folder available
import 'bulma/css/bulma.css'
//import cards (capitalize bc it is COMPONANT)
import Chodecard from './chode-card'
//import image for card (PROP being passed thru Componant/card)
import image1 from './react-images/chodie.png'
import image2 from './react-images/blitzed.png'
import image3 from './react-images/blunt.png'
import image4 from './react-images/high.png'
import image5 from './react-images/highaf.png'
import image6 from './react-images/ndub.png'

function App() {
    return(
        <div>
            <section className= 'hero is-small is-danger'>
                <div className= 'hero-body'>
                    <p className= 'title'>
                        Adventures of Tenzin and Tsepal 2008
                    </p>
                </div>
            </section>

            <div className= 'container'>
                <section className= 'section'>
                    <div className='columns'>
                    <div className = 'column is-4'>
                            <Chodecard
                                name= 'Fatty Fatty Murda'
                                handle= '@dimezin'
                                image= {image3}
                                description = 'Tsepal and Tenzin smoke blizz'
                                />
                        </div>
                        <div className = 'column is-4'>
                            <Chodecard
                                name= 'We out hea'
                                handle= '@dimezin'
                                image= {image4}
                                description = 'high on that mary jane'
                                />
                        </div>
                        <div className = 'column is-4'>
                            <Chodecard
                                name= 'dank aftermath'
                                handle= '@dimezin'
                                image= {image2}
                                description = 'Tsepal and Tenzin 2008'
                                />
                        </div>
                    </div>
                    <div className='columns'>
                    <div className = 'column is-4'>
                            <Chodecard
                                name= 'chodie'
                                handle= '@dimezin'
                                image= {image5}
                                description = 'I said Im sorry Momma'
                                />
                        </div>
                        <div className = 'column is-4'>
                            <Chodecard
                                name= 'Munchies'
                                handle= '@dimezin'
                                image= {image1}
                                description = 'Legend says shes still grubbin'
                                />
                        </div>
                        <div className = 'column is-4'>
                            <Chodecard
                                name= 'Morning After'
                                handle= '@dimezin'
                                image= {image6}
                                description = 'N Dub + 20zin'
                                />
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}
export default App //exports file to index.js

//components = similar to an object
//props = goes through components (ie: images)

