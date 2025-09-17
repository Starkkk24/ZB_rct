// src/SpaceParticles.js
import * as THREE from 'three';

export default class SpaceParticles {
  constructor(canvas) {
    if (!canvas) {
      console.error('Canvas not found');
      return;
    }

    this.canvas = canvas;
    this.particles = [];
    this.particleCount = 900;
    this.particleDepth = 1500;
    this.speedFactor = 1.5;
    this.mouseX = 0;
    this.mouseY = 0;

    this.isVisible = true;

    this.init();
    this.createParticles();
    this.animate();
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
      vertexShader: `...`,   // keep your vertexShader code
      fragmentShader: `...`, // keep your fragmentShader code
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

      if (distribution < 0.7) radius = 100 + Math.random() * 100;
      else radius = Math.pow(Math.random(), 2) * 100;

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

        if (distribution < 0.7) radius = 100 + Math.random() * 100;
        else radius = Math.pow(Math.random(), 2) * 100;

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
    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden;
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    if (this.isVisible) {
      this.updateParticles();
      this.particleMaterial.uniforms.time.value = performance.now() * 0.001;
      this.renderer.render(this.scene, this.camera);
    }
  }
}
