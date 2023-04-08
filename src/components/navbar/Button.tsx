import Link from "next/link";
import React from "react";

interface Props {
	title: string;
	url: string;
}

function Button(props: Props) {
	return (
		<li>
			<Link
				className="p-1 px-4 font-semibold duration-200 rounded-lg hover:dark:bg-green-400 hover:dark:bg-opacity-10 hover:bg-green-400 hover:bg-opacity-50"
				href={props.url}
			>
				{props.title}
			</Link>
		</li>
	);
}

export default Button;
