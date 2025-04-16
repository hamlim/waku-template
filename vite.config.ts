import mdx from "@mdx-js/rollup";
import rehypeShiki from "@shikijs/rehype";
import tailwindcss from "@tailwindcss/vite";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"#utils/*": "./src/utils/*",
		},
	},
	plugins: [
		mdx({
			remarkPlugins: [
				remarkFrontmatter,
				[remarkMdxFrontmatter, { name: "frontmatter" }],
				remarkGfm,
				remarkFlexibleMarkers,
			],
			rehypePlugins: [
				rehypeMdxCodeProps,
				[
					rehypeShiki,
					{
						themes: {
							light: "vitesse-light",
							dark: "vitesse-dark",
						},
					},
				],
			],
			providerImportSource: "#utils/mdx-components",
		}),
		tailwindcss(),
	],
});
