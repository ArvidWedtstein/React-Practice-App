import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class ViewGL {
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    OBJLoader: OBJLoader;
    MTLLoader: MTLLoader;
    Controls: OrbitControls;
    constructor(canvasRef: HTMLCanvasElement) {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xffffff );
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
            
        });
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.OBJLoader = new OBJLoader();
        this.MTLLoader = new MTLLoader();

        const light = new THREE.PointLight()
        light.position.set(2.5, 7.5, 15)
        this.scene.add(light)

        this.Controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.camera.lookAt( this.scene.position );

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );
        cube.position.x = 10

        this.OBJ();
        
        this.camera.rotation.x = -0.8;
        this.camera.position.z = 3;
        this.camera.position.y = 4;
        this.update();
    }   

    updateValue(value: any) {
        // var memory = new WebAssembly.Memory({initial:10, maximum:100});
        // memory.grow(10);
    }

    onMouseMove() {

    }

    onWindowResize(vpW: any, vpH: any) {
        this.renderer.setSize(vpW, vpH);
    }
    update(t?: any) {
        this.renderer.render(this.scene, this.camera);
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
}