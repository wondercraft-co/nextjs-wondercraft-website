import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
import { DirectionalLight, Mesh, Vector2, Vector3 } from "three";
interface IScene3dProps {}

const Model = () => {
  const model = useGLTF("/models/compass.gltf");
  useFrame(({ clock }) => {
    if (myMesh.current) {
      myMesh.current.rotation.y = clock.getElapsedTime() / 5;
      myMesh.current.rotation.x = clock.getElapsedTime() / 10;
      // myMesh.current.position.y = data.offset / 100;
    }
  });
  const myMesh = useRef<Mesh>();
  return (
    <primitive
      object={model.scene}
      position={new Vector3(0, 0, 0)}
      scale={1.5}
      ref={myMesh}
    />
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
        width: 200,
        height: 350,
        position: "absolute",
        top: "7.8vw",
        left: "12%",
      }}
    >
      <Canvas>
        <EffectComposer>
          {/* @ts-ignore */}
          <ChromaticAberration
            blendFunction={BlendFunction.ADD} // blend mode
            offset={new Vector2(0.02, 0.002)} // color offset
          />
        </EffectComposer>
        <ambientLight intensity={0.8} />
        <DLight />
        <Model />
      </Canvas>
    </div>
  );
};
export default Scene3d;
