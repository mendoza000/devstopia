import { shallow } from "zustand/shallow";
import { Posts } from "@/types";
import ArticleItem from "./ArticleItem";
import CategoriesList from "./CategoriesList";
import { useConfigStore } from "@/store/config";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
	posts: Posts[];
}

const ArticlesList = ({ posts }: Props) => {
	const { tagSelected } = useConfigStore((state) => state, shallow);
	const [hostname, setHostname] = useState("localhost");
	const postListOrderByDate: Posts[] = [];
	const router = useRouter();

	useEffect(() => {
		setHostname(window.location.hostname);
	}, []);

	const orderPosts = () => {
		for (let mounth = 12; mounth >= 1; mounth--) {
			for (let day = 31; day >= 1; day--) {
				posts.forEach((post) => {
					const dateArray = post.date.split("-");
					if (`${day}` === dateArray[0] && `${mounth}` === dateArray[1]) {
						postListOrderByDate.push(post);
					}
				});
			}
		}
	};

	orderPosts();

	return (
		<div className="grid min-w-full gap-5 px-5 py-10 gap-x-28 lg:grid-cols-2 lg:px-44">
			<div className="flex flex-col gap-5">
				<h3 className="text-2xl font-bold">
					<span className="text-green-400">#</span> Articulos recientes
				</h3>

				<div className="flex flex-col gap-5">
					{tagSelected.name === "Ver todos"
						? postListOrderByDate.map((post) => {
								return (
									(hostname === "localhost" || post.dev === false) && (
										<ArticleItem key={post.slug} post={post} />
									)
								);
						  })
						: postListOrderByDate.map((post) => {
								if (post.tags.includes(tagSelected.name)) {
									return (
										(hostname === "localhost" || post.dev === false) && (
											<ArticleItem key={post.slug} post={post} />
										)
									);
								}
						  })}
				</div>
			</div>

			<CategoriesList />
		</div>
	);
};

export default ArticlesList;
