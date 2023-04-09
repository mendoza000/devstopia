import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {serialize} from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight/lib';

export const getFiles = () => fs.readdirSync(path.join(process.cwd(),'src/data'))

export const getFilesBySlug = async({slug}: {slug:string}) => {
  const mdxSource = fs.readFileSync(path.join(process.cwd(), 'src/data', `${slug}.mdx`), 'utf-8')

  const {data, content} = await matter(mdxSource)
  const source = await serialize(content, {mdxOptions: {rehypePlugins: [rehypeHighlight]}})

  return {
    source,
    frontmatter: {
      slug,
      ...data
    }
  }
}

export const getAllFilesMetadata = async () => {
  const files = getFiles()

  return files.reduce((allPosts: {slug: string, [key: string]: any}[], postSlug: string) => {
    const mdxSource = fs.readFileSync(path.join(process.cwd(), 'src/data', postSlug))
    const {data} = matter(mdxSource)

    return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPosts]
  }, [])
}