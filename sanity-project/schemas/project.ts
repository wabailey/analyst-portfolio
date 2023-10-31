export default {
	name: "project",
	type: "document",
	title: "Project",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "description",
			type: "string",
			title: "Short Description",
		},
		{
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "title",
			},
		},
		{
			name: "thumbnail",
			type: "image",
			title: "Thumbnail",
		},
		{
			name: "content",
			type: "array",
			title: "Content",
			of: [
				{
					type: "block"
				},
				{
					type: "image",
					fields: [
						{
							type: "text",
							name: "alt",
							title: "Alternative Text",
						}
					]
				}
			]
		},
		{
			name: "link",
			type: "string",
			title: "Link",
		},
	],
}