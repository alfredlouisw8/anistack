/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s4.anilist.co",
				port: "",
				pathname: "**",
			},
		],
	},
};

module.exports = nextConfig;
