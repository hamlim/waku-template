declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontmatter: Record<string, any>;
}
