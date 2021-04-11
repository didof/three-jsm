import * as THREE from 'three'
import scene from './scene'

const cube = scene.Elements['cube1']

// CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 10

// RENDERER
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

// render half resolution
// setSize(window.innerWidth/2, window.innerHeight/2, false)

document.body.appendChild(renderer.domElement)

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene.Instance, camera)
}
animate()
