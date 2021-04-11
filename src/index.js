import * as THREE from 'three'

// SCENE
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

// CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 5

// RENDERER
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

// render half resolution
// setSize(window.innerWidth/2, window.innerHeight/2, false)

document.body.appendChild(renderer.domElement)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
