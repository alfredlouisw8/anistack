import { builder } from "../builder";

builder.prismaObject("Anime", {
	fields: (t) => ({
		id: t.exposeID("id"),
		title: t.exposeString("title"),
		description: t.exposeString("description"),
		thumbnail: t.exposeString("thumbnail"),
		users: t.relation("users"),
	}),
});

builder.queryField("animes", (t) =>
	t.prismaField({
		type: ["Anime"],
		resolve: (query, _parent, _args, _ctx, _info) =>
			prisma.anime.findMany({ ...query }),
	})
);
