import * as THREE from 'three'

export default class SceneMGMT {
  constructor() {
    this._scene = new THREE.Scene()
    this._elements = {}
  }

  get Instance() {
    return this._scene
  }

  get Elements() {
    return this._elements
  }

  addElement(label, element) {
    this._scene.add(element)
    this._elements[label] = element
  }
}
