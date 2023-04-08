import React from "react";

interface Props {
	title: string;
}

const CategoriesListItem = ({ title }: Props) => {
	return (
		<p className="duration-200 cursor-pointer opacity-70 hover:opacity-100">
			<span className="text-green-400">#</span> {title}
		</p>
	);
};

export default CategoriesListItem;
