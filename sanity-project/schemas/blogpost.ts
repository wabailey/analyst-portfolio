export default {
	name: "post",
	type: "document",
	title: "Blog Post",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title"
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
	]
}