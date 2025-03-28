
function PredictorPage() {

	let price = 2000;

	return (
		<div className= "predict-page">
			<h1>House Price Predictor</h1>
			<form >
			<div>
				<label htmlFor="city">City:</label>
				<br />
				<input
				type="text"
				id="city"
				name="city"
				required
				/>
			</div>

			<div>
				<label htmlFor="province">Province:</label>
				<br />
				<input
				type="text"
				id="province"
				name="province"
				required
				/>
			</div>

			<div>
				<label htmlFor="latitude">Latitude:</label>
				<br />
				<input
				type="text"
				id="latitude"
				name="latitude"
				required
				/>
			</div>

			<div>
				<label htmlFor="longitude">Longitude:</label>
				<br />
				<input
				type="text"
				id="longitude"
				name="longitude"
				required
				/>
			</div>

			<div>
				<label htmlFor="lease_term">Lease Term:</label>
				<br />
				<input
				type="text"
				id="lease_term"
				name="lease_term"

		
				required
				/>
			</div>

			<div>
				<label htmlFor="type">Type:</label>
				<br />
				<input
				type="text"
				id="type"
				name="type"

	
				required
				/>
			</div>

			<div>
				<label htmlFor="beds">Beds:</label>
				<br />
				<input
				type="number"
				id="beds"
				name="beds"
				required
				/>
			</div>

			<div>
				<label htmlFor="baths">Baths:</label>
				<br />
				<input
				type="number"
				id="baths"
				name="baths"
	
				required
				/>
			</div>

			<div>
				<label htmlFor="sq_feet">Square Feet:</label>
				<br />
				<input
				type="number"
				id="sq_feet"
				name="sq_feet"
		
				required
				/>
			</div>

			<div>
				<label htmlFor="furnishing">Furnishing:</label>
				<br />
				<select
				id="furnishing"
				name="furnishing"

		
				required
				>
				<option value="">Select Furnishing</option>
				<option value="unfurnished">Unfurnished</option>
				<option value="partially_furnished">Partially Furnished</option>
				<option value="fully_furnished">Fully Furnished</option>
				</select>
			</div>

			<div>
				<label htmlFor="smoking">Smoking:</label>
				<br />
				<select
				id="smoking"
				name="smoking"
				required
				>
				<option value="">Select Smoking Preference</option>
				<option value="yes">Smoking</option>
				<option value="no">Non-Smoking</option>
				</select>
			</div>

			<div>
				<label htmlFor="pets">Pets:</label>
				<br />
				<input
				type="checkbox"
				id="pets"
				name="pets"
				/>
			</div>

			<button type="submit">Predict</button>
			</form>

			<br />

			<div className="price-message"> 
				<p>Predicted Rent Price: {price}</p>
			</div>
		</div>
	);
}

export default PredictorPage;


