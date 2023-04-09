import Link from "next/link";
import React from "react";

interface Props {
	title: string;
	url: string;
	type: "extern" | "local";
}

function Button(props: Props) {
	if (props.type === "extern") {
		return (
			<li>
				<a
					className="p-1 px-4 font-semibold duration-200 rounded-lg hover:dark:bg-green-400 hover:dark:bg-opacity-10 hover:bg-green-400 hover:bg-opacity-50"
					href={props.url}
					target="_blank"
				>
					{props.title}
				</a>
			</li>
		);
	}

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
