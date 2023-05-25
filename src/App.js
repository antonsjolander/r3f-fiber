import logo from "./logo.svg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import Cube from "./components/canvas/Cube";
import { Model } from "./components/canvas/Card";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Canvas>
				<ambientLight intensity={2} color={"#fff"} />
				<Float speed={2} floatIntensity={2}>
					<Model />
				</Float>
				<OrbitControls />
				<Environment preset="night" background />
			</Canvas>
		</div>
	);
}

export default App;
