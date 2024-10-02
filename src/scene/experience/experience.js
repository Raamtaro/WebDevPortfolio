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

        // this.resources.on('ready', this.startup.bind(this))
        // this.sizes.on('resize', this.onResize.bind(this))

        // this.time.on('tick', this.renderScene.bind(this)) //Moved to the startup() function
    }


}

export default Experience