import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// //---------------Renderer----------------
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// //---------------Scene and Camera-------------
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//     45, 
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );

// //---------------Axes & Orbit control----------
// const orbit = new OrbitControls(camera, renderer.domElement);

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// camera.position.set(-10, 30, 30);
// orbit.update();

// //---------------Added Box Axes-----------------
// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

// //---------------Plane--------------
// const planeGeometry = new THREE.PlaneGeometry(30, 30);
// const planeMaterial = new THREE.MeshStandardMaterial({
//     color: 0xFFFFFF,
//     side: THREE.DoubleSide
// });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(plane);
// plane.rotation.x = -0.5 * Math.PI;

// //--------------Grid-------------
// const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);

// //-------------Added Sphere-----------
// // const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
// // const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
// // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// // scene.add(sphere);
// // sphere.position.set(-10, 10, 0);

// //------------Added Model-------------
// const arm = new THREE;


// //-------------Animate------------------
// function animate(time){
//     box.rotation.x = time / 1000;
//     box.rotation.y = time / 1000;
//     // Render Scene and Camera that we set before
//     renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(animate);

class LoadModelDemo {
    constructor(){
        this._Initialize();
    }

    _Initialize(){
        this._threejs = new THREE.WebGLRenderer({
            antialias : true,
        });
        this._threejs.shadowMap.enabled = true;
        this._threejs.shadowMap.type = THREE.PCFShadowMap;
        this._threejs.setPixelRatio(window.devicePixelRatio);
        this._threejs.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(this._threejs.domELement);

        window.addEventListener('resize', () => {
            this._OnWindowResize();
        }, false);

        const fov = 60;
        const aspect = 1920 / 1080;
        const near = 1.0;
        const far = 1000.0;
        this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this._camera.position.set(75, 20, 0);

        this._scene = new THREE.Scene();

        let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(20, 100, 10);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.bias = -0.001;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.left = 100;
        light.shadow.camera.right = -100;
        light.shadow.camera.top = 100;
        light.shadow.camera.bottom = -100;
        this._scene.add(light);

        light = new THREE.AmbientLight(0xFFFFFF, 4.0);
        this._scene.add(light);

        const controls = new OrbitControls(
            this._camera, this._threejs.domElement);
        controls.target.set(0, 20, 0);
        controls.update();

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100, 10, 10),
            new THREE.MeshStandardMaterial({
                color: 0x202020,
              }));
        plane.castShadow = false;
        plane.receiveShadow = true;
        plane.rotation.x = -Math.PI / 2;
        this._scene.add(plane);
    
        this._mixers = [];
        this._previousRAF = null;
    
        this._LoadAnimatedModel();
        // this._LoadAnimatedModelAndPlay(
        //     './resources/dancer/', 'girl.fbx', 'dance.fbx', new THREE.Vector3(0, -1.5, 5));
        // this._LoadAnimatedModelAndPlay(
        //     './resources/dancer/', 'dancer.fbx', 'Silly Dancing.fbx', new THREE.Vector3(12, 0, -10));
        // this._LoadAnimatedModelAndPlay(
        //     './resources/dancer/', 'dancer.fbx', 'Silly Dancing.fbx', new THREE.Vector3(-12, 0, -10));
        this._RAF();
    
    }

    _LoadModel() {
        // const modelurl = new URL('../assets/animationv2.glb', import.meta.url)
        const loader = new GLTFLoader();
        loader.load('../assets/animationv2.glb', (gltf) => {
            gltf.scene.traverse(c => {
                c.castShadow = true;
            });
            this._scene.add(gtlf.scene)
        });
    }

    _OnWindowResize() {
        this._camera.aspect = window.innerWidth / window.innerHeight
        this._camera.updateProjectionMatrix();
        this._threejs.setSize(window.innerWidth, window.innerHeight);
    }

    _RAF () {
        requestAnimationFrame((t) => {
            if (this.previousRAF === null) {
                previousRAF = t;
            }
            this._RAF();

            this._threejs.render(this._scene, this._camera);
            this._Step(t - this._previousRAF);
            this._previousRAF = t;
        });
    }

    _Step(timeElapsed) {
        const timeElapsedS = timeElapsed * 0.001;
        if (this._mixers) {
          this._mixers.map(m => m.update(timeElapsedS));
        }
    
        if (this._controls) {
          this._controls.Update(timeElapsedS);
        }
    }
}
    
let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
    _APP = new LoadModelDemo();
});


