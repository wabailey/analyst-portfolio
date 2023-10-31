import { Data } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getProjects(slug: string) {
	const query = `*[_type == "project" && slug.current == "${slug}"][0] {
    title,
    link,
    content,
}`;

	const data = await client.fetch(query);

	return data;
};

export default async function WorkPost({ params, }: { params: { slug: string }; }) {

	const data = (await getProjects(params.slug)) as Data;

	const PortableTextComponent = {
		types: {
			image: ({ value }: { value: any }) => (
				<Image src={urlFor(value).url()} alt="Project Screenshot" className="rounded-lg" width={800} height={800} />
			),
		},
	};

	return (
		<div className="divide-y divide-gray-200 dark:divide-gray-700">
			<header className="pt-6 pb-4 md:pb-6">
				<div className="text-center">

					<div>
						<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
							{data.title}
						</h1>
					</div>

					<div className="inline-flex items-center gap-1 mt-8 mb-4">
						<a href={data.link} target="_blank" className="text-lg font-semibold text-blue-500 hover:underline">
							Visit the project
						</a>

						<span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-blue-500">
								<path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
								<path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
							</svg>
						</span>
					</div>

				</div>
			</header>

			<div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700">

				<div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
					<PortableText value={data.content} components={PortableTextComponent} />
				</div>

			</div>
		</div>
	)
};