import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { getFiles, getFilesBySlug } from "@/lib/mdx";
import { Posts } from "@/types";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Post.module.css";
interface Props {
	frontmatter: Posts;
	source: any;
}

const Post = ({ source, frontmatter }: Props) => {
	// console.log(frontmatter);

	return (
		<div className="dark:text-white">
			<Navbar />
			<div className="min-h-screen px-10 py-20 duration-200 bg-gray-200 lg:py-32 dark:bg-dark lg:px-72">
				<div className="flex flex-col gap-4 mb-10">
					<span className="opacity-50">{frontmatter.date}</span>
					<h1 className="text-4xl font-extrabold">{frontmatter.title}</h1>
					<div className="flex flex-wrap gap-x-4">
						{frontmatter.tags.map((tag) => (
							<span className="text-green-700 cursor-pointer" key={tag}>
								#{tag}
							</span>
						))}
					</div>
				</div>

				<div className={styles.post}>
					<MDXRemote {...source} />
				</div>
			</div>
			<div className="absolute w-[50vw] h-[30vh] bg-green-400 bottom-10 right-10 blur-[15rem] dark:bg-opacity-50"></div>
		</div>
	);
};

export default Post;

export async function getStaticProps({ params }: any) {
	const { source, frontmatter } = await getFilesBySlug(params);

	return {
		props: {
			source,
			frontmatter,
		},
	};
}

export async function getStaticPaths() {
	const posts = await getFiles();
	const paths = posts.map((post) => ({
		params: {
			slug: post.replace(".mdx", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}
