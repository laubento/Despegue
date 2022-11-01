import React from "react";
import "./ratingCard.css"
import "../styles/NavBar.css"


export default function RatingCard({ name, photo, description, value }) {
	return (
		<div className="primaryDivRating">
			<li class="box_result shadow">
				<div class="avatar_comment me-4">
					<img src={photo} alt="avatar" />
				</div>
				<div class="result_comment">
					<h4>{name}</h4>
					<div>
						{value >= 1 ? '⭐' : null}
						{value >= 2 ? '⭐' : null}
						{value >= 3 ? '⭐' : null}
						{value >= 4 ? '⭐' : null}
						{value >= 5 ? '⭐' : null}
						<p>{description}</p>
					</div>
				</div>
			</li>
		</div>
	)
}