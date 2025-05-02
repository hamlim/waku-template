import mdx from "@mdx-js/rollup";
import rehypeShiki from "@shikijs/rehype";
import tailwindcss from "@tailwindcss/vite";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import packageJson from "./package.json";

export default defineConfig({
  resolve: {
    alias: packageJson.imports,
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
      providerImportSource: "#/utils/mdx-components",
    }),
    tailwindcss(),
  ],
});
