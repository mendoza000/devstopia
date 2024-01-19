import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ArticlesList from "@/components/articles/ArticlesList";
import { getAllFilesMetadata, getFiles } from "@/lib/mdx";
import { Posts } from "@/types";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface Props {
	posts: Posts[];
}

export default function Home({ posts }: Props) {
	// const asd = fs.readFileSync("../articles/hello.md", "utf-8");
	// getFiles();
	return (
		<>
			<Head>
				<title>Devstopia - Omar Mendoza</title>
			</Head>
			<div className="flex flex-col justify-center min-h-screen text-black duration-200 bg-gray-200 dark:bg-dark dark:text-white ">
				<Navbar />
				<Header />
				<ArticlesList posts={posts} />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const posts = await getAllFilesMetadata();

	return {
		props: { posts },
	};
}
