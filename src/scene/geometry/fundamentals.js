import * as THREE from 'three'

export const buildBox = (color = 0x00ff00) => {
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color })
  const box = new THREE.Mesh(geometry, material)

  return box
}
