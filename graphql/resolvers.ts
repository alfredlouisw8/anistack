import prisma from "../lib/prisma";
export const resolvers = {
	Query: {
		animes: () => {
			return prisma.anime.findMany();
		},
	},
};
