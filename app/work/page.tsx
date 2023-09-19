import { Data } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getProjects() {
	const query = `*[_type == "project"]`;

	const data = await client.fetch(query);

	return data;
};

export default async function Work() {

	const data = (await getProjects()) as Data[];

	return (
		<div className="divide-y divide-gray-100 dark:divide-gray-100/10">
			<div className="space-y-2 pt-6 pb-8 md:space-y-5">
				<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl">
					Work
				</h1>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg-gap-10 pt-8">
				{data.map((project) => (
					<article key={project._id} className="overflow-hidden rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-700">

						<div className="relative h-56 w-full">
							<Image fill src={project.content} alt="Screenshot of the project" className="w-full h-full object-cover" />
						</div>

						<div className="p-4 sm:p-6">
							<a href={project.link} target="_blank">
								<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{project.title}</h3>
							</a>

							<p className="line-clamp-2 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
								{project.description}
							</p>

							<a href={project.link} target="_blank" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
								Read more...
								<span className="block transition-all group-hover:ms-0.5">
									&rarr;
								</span>
							</a>
						</div>

					</article>
				))}
			</div>

		</div>
	);
}