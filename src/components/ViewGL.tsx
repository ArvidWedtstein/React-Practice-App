import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class ViewGL {
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    OBJLoader: OBJLoader;
    MTLLoader: MTLLoader;
    GLTFLoader: GLTFLoader;
    Controls: OrbitControls;
    Logo: any;
    constructor(canvasRef: HTMLCanvasElement) {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x000000 );
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: true,
            
        });
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.OBJLoader = new OBJLoader();
        this.MTLLoader = new MTLLoader();
        this.GLTFLoader = new GLTFLoader();


        this.Controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.camera.lookAt( this.scene.position );
        this.init();
    }   
    init() {
        const spot = new THREE.SpotLight(0xffffff, 3, 1000);
        spot.position.set(0, 5, 0)
        spot.castShadow = false
        spot.lookAt(0, 0, 0)
        this.scene.add(spot)

        const light = new THREE.PointLight(0xffe900, 3, 1000);
        light.position.set(-5, -6, 5)
        light.castShadow = true
        light.lookAt(0, 0, 0)
        const lightHelper = new THREE.PointLightHelper( light, 1, 0xff0000 );
        this.scene.add(light)
        lightHelper.position.set(-5, -6, 10)
        this.scene.add(lightHelper)


        // this.OBJ();
        this.GLTF();
                
        // this.camera.rotation.x = -0.2;
        this.camera.position.z = 8;
        this.camera.position.y = 4;
        this.update();
        
    }
    updateValue(value: any) {
        // var memory = new WebAssembly.Memory({initial:10, maximum:100});
        // memory.grow(10);
    }

    onMouseMove() {

    }

    fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }

    onWindowResize(vpW: any, vpH: any) {
        this.renderer.setSize(vpW, vpH);
    }
    update(t?: any) {
        this.renderer.render(this.scene, this.camera);


        let tempVector = new THREE.Vector3(0,0,0)

        this.camera.lookAt(tempVector)


        this.Controls.update();
        requestAnimationFrame(this.update.bind(this));
    }

    OBJ(): void {
        this.MTLLoader.load('olenbetong2.mtl', (materials) => {
            materials.preload()
            this.OBJLoader.setMaterials(materials);
            this.OBJLoader.load('olenbetong2.obj', (obj) => {
                obj.scale.set(0.2, 0.2, 0.2);
                obj.position.set(0, 0, 0);
                this.scene.add(obj);
            });
        })
    }
    GLTF(): void {
        this.GLTFLoader.load('olenbetong2.gltf', (gltf) => {
            const scene = gltf.scene.copy(new THREE.Group());
            scene.scale.set(0.2, 0.2, 0.2);
            scene.position.set(0, 0, 0);
            scene.rotateOnAxis(new THREE.Vector3(0,1,0),180* Math.PI / 180)
            scene.rotateX(-Math.PI / 2);
            scene.rotateY((Math.PI / 2) / 2);
            this.Logo = scene
            this.scene.add(scene);

            console.log(this.fibonacci(6))
        });
    }
}