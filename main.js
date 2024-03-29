import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffe4e1);
// scene.fog =new THREE.Fog( 0xffe4e1 , 2, 1);
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(  1, 32, 5 );
const material = new THREE.MeshBasicMaterial( { color:  0xfa8072, wireframe: true, fog: true} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
