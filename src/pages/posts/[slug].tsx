import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { getFiles, getFilesBySlug } from "@/lib/mdx";
import { Posts } from "@/types";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Post.module.css";
import Head from "next/head";
import Image from "next/image";
interface Props {
	frontmatter: Posts;
	source: any;
}

const Post = ({ source, frontmatter }: Props) => {
	// console.log(frontmatter);

	return (
		<>
			<Head>
				<title>{frontmatter.title} - Devstopia</title>
			</Head>
			<div className="dark:text-white">
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
				></link>
				<Navbar />
				<div className="min-h-screen px-10 py-20 duration-200 bg-gray-200 lg:py-32 dark:bg-dark lg:px-96">
					<div className="flex flex-col gap-4 mb-10">
						{frontmatter.media && (
							<Image
								src={frontmatter.media}
								alt={frontmatter.altMedia!}
								width={1200}
								height={300}
								className="relative z-20 shadow-lg rounded-xl"
							/>
						)}
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
		</>
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
