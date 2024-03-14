import useInView from "./hooks/useInView";

import "./assets/styles/App.css";

function App() {
	const { inView, ref } = useInView();

	return (
		<>
			<p className="in-view">inView: {String(inView)}</p>
			<div className="screen-box" />
			<div className="screen-box" />
			<div className={`screen-box ${inView ? "bg-blue" : ""}`} ref={ref} />
			<div className="screen-box" />
		</>
	);
}

export default App;
