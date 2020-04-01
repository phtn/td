import React, { useRef, useState } from 'react';
import { Frame } from 'framer';
import { Canvas, useFrame } from 'react-three-fiber';

function Box(props: any) {
	const mesh: any = useRef();

	const [hovered, setHovered] = useState(false);
	const [h, sH] = useState(0.15);
	useFrame(
		() => ((mesh.current.rotation.x = 60), (mesh.current.rotation.y += h))
	);

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={[4.0, 0.05, 0.5]}
			onPointerOver={() => {
				sH(0.03);
				setHovered(true);
			}}
			onPointerOut={() => {
				sH(0.15);
				setHovered(false);
			}}
		>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial
				attach="material"
				color={hovered ? 'white' : 'black'}
			/>
		</mesh>
	);
}

function App() {
	return (
		<Frame style={styles.container}>
			<Frame style={{ width: window.innerWidth, height: 64 }}>3d</Frame>
			<Frame
				style={{
					marginTop: 64,
					opacity: 0.3,
					width: window.innerWidth,
					height: 0.7 * window.innerHeight
				}}
			>
				<Canvas>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<Box position={[-1.2, 0, 0]} />
				</Canvas>
			</Frame>
		</Frame>
	);
}

const styles = {
	container: {
		width: window.innerWidth,
		height: window.innerHeight
	}
};
export default App;
