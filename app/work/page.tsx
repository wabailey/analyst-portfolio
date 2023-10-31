import Link from "next/link";
import { Data } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getProjects() {
	const query = `*[_type == "project"] {
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

export default async function Work() {

	const data = (await getProjects()) as Data[];

	return (
		<div className="divide-y divide-gray-100 dark:divide-gray-100/10">
			<div className="space-y-2 pt-6 pb-8 md:space-y-5">
				<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-6xl">
					Projects
				</h1>
				<p className="sm:text-xl font-light text-gray-500 dark:text-gray-400">What are these projects of?</p>
			</div>

			<div className="grid justify-center gap-4 md:gap-6 md:grid-cols-2 lg:gap-10 pt-8">
				{data.map((project) => (
					<article key={project._id} className="overflow-hidden rounded-lg max-w-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">

						<div className="relative h-80 w-full">
							<Link href={`/work/${project.slug}`} prefetch>
								<Image fill src={project.thumbnailUrl} alt="Thumbnail image of the project" className="w-full h-full object-cover" />
							</Link>
						</div>

						<div className="p-4">
							<Link href={`/work/${project.slug}`} prefetch>
								<h3 className="line-clamp-1 text-2xl font-semibold">{project.title}</h3>
							</Link>

							<p className="line-clamp-1 mt-2 text-md font-light leading-relaxed text-gray-500 dark:text-gray-400">
								{project.description}
							</p>
						</div>

					</article>
				))}
			</div>

		</div>
	);
}