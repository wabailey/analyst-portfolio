import { Data } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getBlogposts(slug: string) {
	const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

	const data = await client.fetch(query);

	return data;
}

export default async function BlogPost({ params, }: { params: { slug: string }; }) {
	const data = await getBlogposts(params.slug) as Data;

	const PortableTextComponent = {
		types: {
			image: ({ value }: { value: any }) => (
				<Image src={urlFor(value).url()} alt="Image" className="rounded-lg" width={800} height={800} />
			),
		},
	};

	return (
		<div className="divide-y divide-gray-200 dark:divide-gray-700">
			<header className="pt-6 pb-6">
				<div className="space-y-4 text-center">

					<div>
						<p className="text-base font-medium text-blue-500">
							{new Date(data._createdAt).toISOString().split("T")[0]}
						</p>
					</div>

					<div>
						<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
							{data.title}
						</h1>
					</div>

				</div>
			</header>

			<div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
				<div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
					<div className="prose max-w-5xl mx-auto pb-8 pt-10 dark:prose-invert prose-lg">

						<PortableText value={data.content} components={PortableTextComponent} />

					</div>
				</div>
			</div>
		</div>
	)
}