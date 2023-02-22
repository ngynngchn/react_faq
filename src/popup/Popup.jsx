import { useState } from "react";
import "./Popup.css";

const Popup = () => {
	const [visible, setVisible] = useState(false);

	function show() {
		setVisible(!visible);
	}

	return (
		<section>
			<details>
				<summary>Why is React great?</summary>
				<p>Fast Learning Curve</p>
			</details>

			<article>
				<div>
					<h1>Why is React great?</h1>
					<button onClick={() => setVisible(!visible)}>+</button>
				</div>
				<p style={{ display: visible ? "block" : "none" }}>
					Fast Learning Curve
				</p>
			</article>
		</section>
	);
};

export default Popup;
