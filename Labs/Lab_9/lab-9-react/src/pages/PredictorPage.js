async function getPrediction(event) {
	event.preventDefault();

	// var for a test json
	const testJson = {
		city: "Airdrie",
		province: "Alberta",
		latitude: 43.7,
		longitude: -79.42,
		lease_term: "Long Term",
		type: "Townhouse",
		beds: 2,
		baths: 1,
		sq_feet: 800,
		smoking: "Non-Smoking",
		furnishing: "Unfurnished",
		pets: true
	}

	const response = await fetch("http://localhost:5000/predict_house_price", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(testJson),
	});

	const data = await response.json();
	console.log(data);

}


function PredictorPage() {
	return (
		<div>
			<h1>Predictor Page</h1>
			<p>This is the Predictor Page.</p>
			<button onClick={getPrediction}>Try</button>
		</div>
	);
}

export default PredictorPage;