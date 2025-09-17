import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Space Particles Class - keeping your exact behavior
class SpaceParticles {
  constructor(canvas) {
    // Modified to accept canvas parameter instead of getElementById
    this.canvas = canvas;
    if (!this.canvas) {
      console.error('Space particles canvas not found');
      return;
    }

    this.particles = [];
    this.particleCount = 900;
    this.particleDepth = 1500;
    this.speedFactor = 1.5;
    this.mouseX = 0;
    this.mouseY = 0;
    
    this.init();
    this.createParticles();
    this.animate();
    
    // Add visibility checking
    this.isVisible = true;
    this.addVisibilityHandler();
  }

  init() {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    this.camera.position.z = 100;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000005, 1);

    this.particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        size: { value: 2.5 }
      },
      vertexShader: `
        uniform float time;
        uniform float size;
        attribute float scale;
        varying float vDistance;
        
        void main() {
          vec3 pos = position;
          vDistance = pos.z;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vDistance;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.0, dist);
          vec3 color = mix(
            vec3(0.6, 0.8, 1.0),
            vec3(0.4, 0.6, 0.8),
            vDistance / 1500.0
          );
          
          gl_FragColor = vec4(color, alpha * (1.0 - vDistance / 1500.0) * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  createParticles() {
    const positions = new Float32Array(this.particleCount * 3);
    const scales = new Float32Array(this.particleCount);
    
    for (let i = 0; i < this.particleCount; i++) {
      let radius;
      const distribution = Math.random();
      
      if (distribution < 0.7) {
        radius = 100 + Math.random() * 100;
      } else {
        radius = Math.pow(Math.random(), 2) * 100;
      }

      const theta = Math.random() * Math.PI * 2;
      const z = Math.random() * -this.particleDepth;
      
      positions[i * 3] = Math.cos(theta) * radius * (1 + z / this.particleDepth);
      positions[i * 3 + 1] = Math.sin(theta) * radius * (1 + z / this.particleDepth);
      positions[i * 3 + 2] = z;
      
      scales[i] = Math.random() * 1.5 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    this.particleSystem = new THREE.Points(geometry, this.particleMaterial);
    this.scene.add(this.particleSystem);
  }

  updateParticles() {
    const positions = this.particleSystem.geometry.attributes.position.array;
    const time = performance.now() * 0.0001;

    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      
      positions[i3 + 2] += this.speedFactor;

      if (positions[i3 + 2] > 100) {
        let radius;
        const distribution = Math.random();
        
        if (distribution < 0.7) {
          radius = 100 + Math.random() * 100;
        } else {
          radius = Math.pow(Math.random(), 2) * 100;
        }

        const theta = Math.random() * Math.PI * 2;
        
        positions[i3] = Math.cos(theta) * radius * 2;
        positions[i3 + 1] = Math.sin(theta) * radius * 2;
        positions[i3 + 2] = -this.particleDepth;
      }

      positions[i3] += Math.sin(time + i * 0.1) * 0.05;
      positions[i3 + 1] += Math.cos(time + i * 0.1) * 0.05;
    }

    this.particleSystem.geometry.attributes.position.needsUpdate = true;
  }

  onMouseMove(event) {
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    this.camera.position.x += (this.mouseX * 20 - this.camera.position.x) * 0.05;
    this.camera.position.y += (this.mouseY * 20 - this.camera.position.y) * 0.05;
    this.camera.lookAt(0, 0, 0);
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  addVisibilityHandler() {
    // Pause animation when page is not visible
    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden;
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    // Only update when visible
    if (this.isVisible) {
      this.updateParticles();
      this.particleMaterial.uniforms.time.value = performance.now() * 0.001;
      this.renderer.render(this.scene, this.camera);
    }
  }

  // Added cleanup method for React
  cleanup() {
    window.removeEventListener('resize', this.onResize.bind(this));
    window.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('visibilitychange', this.addVisibilityHandler.bind(this));
    
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.particleMaterial) {
      this.particleMaterial.dispose();
    }
    if (this.particleSystem && this.particleSystem.geometry) {
      this.particleSystem.geometry.dispose();
    }
  }
}

// SpaceBackground Component
function SpaceBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Small delay to ensure everything is properly loaded (matching your setTimeout)
    const timer = setTimeout(() => {
      particlesRef.current = new SpaceParticles(canvasRef.current);
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (particlesRef.current && particlesRef.current.cleanup) {
        particlesRef.current.cleanup();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

// Export just the SpaceBackground component
export default SpaceBackground;