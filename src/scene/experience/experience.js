import * as THREE from 'three'
import GUI from 'lil-gui'
import Sizes from '../../utils/sizes.js'
import Cursor from '../../utils/cursor.js'
import Resources from '../../utils/resources.js'
import Time from '../../utils/time.js'
import Camera from './camera.js'
import Renderer from './renderer.js'
import { WebGLRenderTarget } from 'three'
import LoadingScreen from './loading.js'
import BustModel from '../objects/bustmodel.js'
import BustParticles from '../objects/bustParticles.js'


let instance = null

class Experience {

    constructor(sources, canvas) {

        if(instance)
            {
                return instance
            }
        instance = this

        window.experience = this
        this.canvas = canvas

        this.sizes = new Sizes()
        this.time = new Time()

        this.scene = new THREE.Scene() 
        this.loadingScreen = new LoadingScreen()

        this.camera = new Camera()
        this.renderer = new Renderer()
        this.cursor = new Cursor()

        this.resources = new Resources(sources)

        this.resources.on('ready', this.startup.bind(this))
        // this.sizes.on('resize', this.onResize.bind(this))

        // this.time.on('tick', this.renderScene.bind(this)) //Moved to the startup() function
    }

    startup () {
        //Declare a new BustParticles() class
        this.bustParticles = new BustParticles()
        this.setupGUI()
        this.time.on('tick', this.renderScene.bind(this))
    }

    renderScene () {
        this.renderer.instance.render(this.scene, this.camera.instance)
    }

    setupGUI () {
        this.gui = new GUI({ width: 340 })
        
        this.gui.add(this.bustParticles.shaderMaterial.uniforms.uSize, 'value').min(0).max(1).step(0.001).name('uSize')
        this.gui.add(this.bustParticles.gpgpu.particlesVariable.material.uniforms.uFlowFieldInfluence, 'value').min(0).max(1).step(0.001).name('uFlowfieldInfluence')
        this.gui.add(this.bustParticles.gpgpu.particlesVariable.material.uniforms.uFlowFieldStrength, 'value').min(0).max(10).step(0.001).name('uFlowfieldStrength')
        this.gui.add(this.bustParticles.gpgpu.particlesVariable.material.uniforms.uFlowFieldFrequency, 'value').min(0).max(1).step(0.001).name('uFlowfieldFrequency')

        // this.gui.destroy()
    }


}

export default Experience