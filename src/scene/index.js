import SceneMGMT from './scene.mgmt'
import { buildBox } from './geometry/fundamentals'

const scene = new SceneMGMT()

const box = buildBox()

scene.addElement('cube1', box)

export default scene
