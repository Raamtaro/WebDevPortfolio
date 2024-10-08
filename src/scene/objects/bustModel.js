import * as THREE from 'three'
import Experience from '../experience/experience.js'


class BustModel {
    constructor() {
        this.experience = new Experience()

        this.resources = this.experience.resources
        this.resource = this.resources.items.scholarModel

        

        this.setInstance()
    }

    setInstance() {
        this.resource.scene.traverse(
            (child) => {
                if (child.isMesh) {
                    this.instance = child.geometry
                    child.scale.set(0.5, 0.5, 0.5)
                    
                    // console.log(this.instance)
                    return
                }
            }
        )
    }
}

export default BustModel