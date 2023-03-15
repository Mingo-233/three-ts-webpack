import { PointLightHelper, AxesHelper } from 'three'
export class Helper {
  public helperList
  public scene

  constructor(scene) {
    this.helperList = []
    this.scene = scene
  }

  public addLight(light) {
    const h = new PointLightHelper(light, 10)
    this.helperList.push(h)
    this.scene.add(h)
    return h
  }

  public addAxes() {
    const h = new AxesHelper(500)
    this.helperList.push(h)
    this.scene.add(h)
    return h
  }
}
