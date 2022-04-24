import { initializeDb, getEntryFromDb } from './database.js'
import Bio from './Bio.js'
import addBioEventListeners from './events.js';
import Gallery from './Gallery.js'
import { addGalleryEventListeners, addImagesToGallery }  from './events.js'
import Nav from './Nav.js'

const App = async () => {
  // setTimeout(() => {
  //   getEntryFromDb('bio', 9)
  // }, 1000)

  return `
    ${Nav()}
    <div class="container">
      ${await Bio()}
      ${Gallery()}
    </div>
  `
}

initializeDb.onsuccess = async () => {
  document.getElementById('root').innerHTML = await App()
  addBioEventListeners()
  addGalleryEventListeners()
  addImagesToGallery()
}
