import './style.css'

import * as THREE from 'three';

//Creando la camara escena y formateando el renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(34,window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(12);
camera.position.setX(-3.5);
camera.position.setY(-0.5);

renderer.render(scene, camera);

// Torus




//scene.add(torus);


//Añadir el mundo
/*
const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 , wireframe: true} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );*/


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(15, 15, 40);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add( pointLight);

// Moon

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
const spaceTexture = new THREE.TextureLoader().load('fondo.jfif')
scene.background = spaceTexture;
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);


scene.add(moon);

moon.position.z = 0;
moon.position.setX(0);

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  moon.rotation.y += 0.005;

  // controls.update();
 
  renderer.render(scene, camera);
}

animate();
