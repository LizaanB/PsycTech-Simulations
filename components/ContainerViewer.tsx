"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ContainerViewer() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#111827");

    const camera = new THREE.PerspectiveCamera(60, host.clientWidth / 360, 0.1, 1000);
    camera.position.set(8, 5, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(host.clientWidth, 360);
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 1);
    directional.position.set(8, 10, 5);
    scene.add(directional);

    const container = new THREE.Mesh(
      new THREE.BoxGeometry(12, 3, 2.4),
      new THREE.MeshStandardMaterial({ color: "#2563eb" })
    );
    scene.add(container);

    const leftDoor = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 2.6, 1.1),
      new THREE.MeshStandardMaterial({ color: "#93c5fd" })
    );
    leftDoor.position.set(6.05, 0, -0.65);
    scene.add(leftDoor);

    const rightDoor = leftDoor.clone();
    rightDoor.position.set(6.05, 0, 0.65);
    scene.add(rightDoor);

    const animate = () => {
      container.rotation.y += 0.004;
      leftDoor.rotation.y = Math.sin(Date.now() * 0.001) * 0.7;
      rightDoor.rotation.y = -Math.sin(Date.now() * 0.001) * 0.7;
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!host) return;
      camera.aspect = host.clientWidth / 360;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, 360);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-zinc-100">
      <h3 className="mb-2 text-lg font-semibold">Interactive 3D Container Viewer</h3>
      <p className="mb-4 text-sm text-zinc-300">
        Rotate the model, inspect dimensions, and preview animated door operation.
      </p>
      <div ref={hostRef} className="w-full overflow-hidden rounded-lg" />
    </div>
  );
}
