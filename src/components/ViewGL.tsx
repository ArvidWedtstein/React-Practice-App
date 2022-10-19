import React from "react";
import * as THREE from 'three';



export default class ViewGL {
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;

    constructor(canvasRef: HTMLCanvasElement) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false
        });
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );
        this.camera.position.z = 5;
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
        requestAnimationFrame(this.update.bind(this));
    }

    GLTF() {

    }
}