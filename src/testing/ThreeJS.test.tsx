import React from 'react';
import { render, screen } from '@testing-library/react';
import ThreeJS from '../components/ThreeJS';
import * as THREE from 'three';



describe('The Three Component', () => {
  // it('should render', () => {
  //   render(<ThreeJS />);
  //   const linkElement = document.querySelector('canvas[data-engine="threejs"]');
  //   expect(linkElement).toBeInTheDocument();
  // });

  it('should have a shodowmap defined', () => {
    expect(THREE.BasicShadowMap).toBeDefined();
  });

  it('should be able to construct a Vector3 with default if x=0', () => {
    const vec3 = new THREE.Vector3();
    expect(vec3.x).toBe(0);
  });
});

