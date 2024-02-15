import Link from "next/link";
import { client } from "../lib/sanity";
import Image from "next/image";
import Placeholder from "../../public/Placeholder.jpg";
import { Data } from "../lib/interface";

async function getBlogposts() {
	const query = `*[_type == "post"] | order(_createdAt desc) {
		title,
		description,
		"thumbnailUrl": thumbnail.asset->url,
		content,
		link,
		_id,
		"slug": slug.current,
		_createdAt,
	}`;

	const data = await client.fetch(query);

	return data;
};

export const revalidate = 60

export default async function Work() {

	const data = await getBlogposts() as Data[];

	return (
		<div className="divide-y divide-gray-100 dark:divide-gray-100/10">
			<div className="space-y-2 pt-6 pb-8 md:space-y-5">
				<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-6xl">
					Posts
				</h1>
				<p className="sm:text-xl font-light text-gray-500 dark:text-gray-400">Here you will see posts about what I am currently working on or learning about.</p>
			</div>

			<div className="grid justify-center gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
				{data.map((post) => (
					<article key={post._id} className="overflow-hidden rounded-lg max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">

						<div className="relative h-56 w-full">
							<Link href={`/blog/${post.slug}`} prefetch>
								<Image fill src={post.thumbnailUrl || Placeholder} alt="Thumbnail image of the post" className="rounded-t-lg w-full h-full object-cover" />
							</Link>
						</div>

						<div className="p-4">
							<Link href={`/blog/${post.slug}`} prefetch>
								<h3 className="line-clamp-1 text-2xl font-semibold">{post.title}</h3>
							</Link>

							<p className="line-clamp-2 mt-2 mb-4 text-md font-light leading-relaxed text-gray-500 dark:text-gray-400">
								{post.description}
							</p>

							<Link href={`/blog/${post.slug}`} prefetch className="group inline-flex gap-1 items-center text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5">
								Read more
								<svg className="w-3 h-3" fill="currentColor" viewBox="1 4 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
							</Link>

						</div>

					</article>
				))}
			</div>

		</div>
	);
}