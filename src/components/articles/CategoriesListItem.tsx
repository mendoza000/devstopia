import { useConfigStore } from "@/store/config";
import { shallow } from "zustand/shallow";
import React from "react";
import { Tags } from "@/types";

const CategoriesListItem = ({ name }: Tags) => {
	const { setTagSelected, tagSelected } = useConfigStore(
		(state) => state,
		shallow
	);

	const handleSelectTag = () => {
		setTagSelected({ name });
	};

	return (
		<p
			className={`duration-200 cursor-pointer opacity-70 hover:opacity-100 ${
				tagSelected.name === name && "underline text-green-700 opacity-100"
			}`}
			onClick={handleSelectTag}
		>
			<span className="text-green-700">#</span> {name}
		</p>
	);
};

export default CategoriesListItem;
