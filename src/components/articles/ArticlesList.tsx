import Link from "next/link";
import { Posts } from "@/types";
import ArticleItem from "./ArticleItem";
import CategoriesList from "./CategoriesList";

interface Props {
	posts: Posts[];
}

const ArticlesList = ({ posts }: Props) => {
	return (
		<div className="grid min-w-full gap-5 px-5 py-10 gap-x-28 lg:grid-cols-2 lg:px-44">
			<div className="flex flex-col gap-5">
				<h3 className="text-2xl font-bold">
					<span className="text-green-400">#</span> Articulos recientes
				</h3>

				<div className="flex flex-col gap-5">
					{posts.map((post) => {
						return <ArticleItem key={post.slug} post={post} />;
					})}
				</div>
			</div>

			<CategoriesList />
		</div>
	);
};

export default ArticlesList;
