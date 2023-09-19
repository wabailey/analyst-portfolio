import Link from "next/link";
import { client } from "../lib/sanity";
import Image from "next/image";
import { Data } from "../lib/interface";

async function getBlogposts() {
	const query = `*[_type == "post"]`;

	const data = await client.fetch(query);

	return data;
};

export default async function Work() {

	const data = await getBlogposts() as Data[];

	return (
		<div className="divide-y divide-gray-100 dark:divide-gray-100/10">
			<div className="space-y-2 pt-6 pb-8 md:space-y-5">
				<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl">
					Posts
				</h1>
			</div>

			<ul>
				{data.map((post) => (
					<li key={post._id} className="py-4">
						<article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
							<div>
								<p className="text-base font-medium text-teal-500">
									{new Date(post._createdAt).toISOString().split("T")[0]}
								</p>
							</div>

							<Link
								href={`/post/${post.slug.current}`}
								prefetch
								className="space-y-3 xl:col-span-3"
							>
								<div>
									<h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
										{post.title}
									</h3>
								</div>

								<p className="prose line-clamp-2 max-w-none text-gray-500 dark:text-gray-400">
									{post.description}
								</p>
							</Link>
						</article>
					</li>
				))}
			</ul>

		</div>
	);
}