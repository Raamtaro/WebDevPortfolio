import './style.css'
import Lenis from 'lenis'
import Experience from './src/scene/experience/experience.js'
import sources from './src/sources.js'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const sketch = new Experience(sources, document.querySelector('canvas.webgl'))