import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
	const { nodes, materials } = useGLTF("/NHL_CARD.glb");
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.78, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes["NHL_Card-Gold2"].geometry}
					material={materials["Gold.2"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes["NHL_Card-Gold"].geometry}
					material={materials.Gold}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes["NHL_Card-Main"].geometry}
					material={materials.Main}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes["NHL_Card-Metallic"].geometry}
					material={materials.Metallic}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/NHL_CARD.glb");
