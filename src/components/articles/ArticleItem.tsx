import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
import { Posts } from "@/types";

interface Props {
	post: Posts;
}

const ArticleItem = ({ post }: Props) => {
	return (
		<Link href={`/posts/${post.slug}`}>
			<div className="max-w-xl px-6 py-3 duration-200 border border-opacity-50 hover:bg-slate-900 rounded-2xl border-slate-700 hover:bg-opacity-5 hover:dark:bg-opacity-20">
				<h2 className="text-xl font-semibold">{post.title}</h2>
				<span className="text-xs opacity-50 ">{post.date}</span>
				<p className="mt-4 opacity-70">{post.description}</p>

				<div className="flex flex-wrap gap-2 mt-2">
					{post.tags.map((tag) => {
						return (
							<span
								className="text-green-900 opacity-60 dark:text-green-400"
								key={tag}
							>
								#{tag}
							</span>
						);
					})}
				</div>

				<span className="flex items-center gap-2 mt-4 text-green-600">
					Leer articulo <FiChevronsRight />
				</span>
			</div>
		</Link>
	);
};

export default ArticleItem;
