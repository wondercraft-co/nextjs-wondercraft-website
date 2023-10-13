import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLight, Material, Mesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
interface IScene3dProps {}

type GLTFResult = GLTF & {
  nodes: Record<string, Mesh>[];
  materials: Record<string, Material>[];
};

const Model = () => {
  const model = useGLTF("/models/all.gltf") as GLTFResult;
  useFrame(({ clock }) => {
    if (myMesh.current) {
      // myMesh.current.rotation.y = clock.getElapsedTime() / 5;
      // myMesh.current.rotation.x = clock.getElapsedTime() / 10;
      // myMesh.current.position.y = data.offset / 100;
    }
  });
  console.log(model);
  const myMesh = useRef<Mesh>();
  return (
    <>
      {/* <primitive
        object={model.scene}
        position={new Vector3(0, 0, 0)}
        scale={0.8}
        ref={myMesh}
      /> */}
      {Object.entries(model.nodes).map(([key, node], index) => {
        if (node.isMesh) {
          return <primitive key={index} object={node} />;
        }
      })}
    </>
  );
};

const DLight = () => {
  const myMesh = useRef<DirectionalLight>(null!);
  // useHelper(myMesh, DirectionalLightHelper);
  return (
    <directionalLight
      color="white"
      position={[-2, 1, 3]}
      intensity={1}
      ref={myMesh}
    />
  );
};

const Scene3d = ({}: IScene3dProps) => {
  return (
    <div
      style={{
        // width: 200,
        // height: 350,
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.8} />
        <DLight />
        <Model />
      </Canvas>
    </div>
  );
};
export default Scene3d;
