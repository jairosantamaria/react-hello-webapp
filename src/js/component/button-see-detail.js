import React from "react";

export function ButtonSeeDetail(props) {
	ButtonSeeDetail.propTypes = {
		name: PropTypes.string,
		index: PropTypes.number,
		item: PropTypes.string,
		link: PropTypes.string
	};
	const BUTTON_LABEL = "Learn more!";

	let encodedName = encodeURIComponent(props.name);

	return (
		<div>
			<Link to={"/" + props.link + "/" + encodedName}>
				<button className="btn btn-outline-primary">{BUTTON_LABEL}</button>
			</Link>
		</div>
	);
}
