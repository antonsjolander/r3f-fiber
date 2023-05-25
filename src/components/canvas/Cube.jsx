import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshTransmissionMaterial, TorusKnot } from "@react-three/drei";
export default function Cube() {
	const ref = useRef();
	// useFrame((delta) => {
	// 	ref.current.rotation.x += delta * 1;
	// 	ref.current.rotation.y += delta * 1;
	// });
	return (
		<TorusKnot position={[0, 0, 0]}>
			<MeshTransmissionMaterial
				thickness={0.5}
				roughness={0.5}
				transmission={1}
				samples={10}
			/>
		</TorusKnot>
	);
}
