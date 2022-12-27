import { useEffect, useRef } from 'react';
import useFocus from './useFocus';
import './App.css';

function App() {
	const inputRef = useRef()

	const isFocused = useFocus(inputRef)

	// useEffect(() => {
	// 	console.log("Logging from App.js: ", inputRef.current)
	// }, [inputRef])

	// useEffect(() => {
	// 	console.log("isFocused: ", isFocused)
	// }, [isFocused])

	return (
		<div className="App" style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<div style={{
				backgroundColor: isFocused ? "green" : "red", 
				margin: 100,
				borderRadius: 15,
				padding: 20
			}}
				>
				<input
					ref={inputRef}
					type="text"
					style={{
						width: "100%",
						marginTop: "auto",
						marginBottom: "auto",
					}}
					onFocus={() => {}} />
			</div>
		</div>
	);
}

export default App;
