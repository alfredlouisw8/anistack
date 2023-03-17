import { builder } from "../builder";

builder.prismaObject("User", {
	fields: (t) => ({
		id: t.exposeID("id"),
		email: t.exposeString("email"),
		username: t.exposeString("username"),
		role: t.expose("role", { type: Role }),
		favorites: t.relation("favorites"),
	}),
});

const Role = builder.enumType("Role", {
	values: ["USER", "ADMIN"] as const,
});
