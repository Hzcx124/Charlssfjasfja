
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import { VRMLoaderPlugin } from 'https://cdn.jsdelivr.net/npm/three-vrm@0.5.3';

// Crear la escena y la cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.5, 3);

// Crear el renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cargar el modelo VRM
const loader = new GLTFLoader();
loader.register((parser) => new VRMLoaderPlugin(parser));
loader.load('pathtoyourmodel.vrm', (gltf) => {
    const vrm = gltf.userData.vrm;
    scene.add(vrm.scene);

    animate();
});

// Crear la luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
