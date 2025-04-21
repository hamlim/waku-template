// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Index_getConfig } from "./pages/index";
// prettier-ignore
import type { getConfig as Mdx_getConfig } from "./pages/mdx";

// prettier-ignore
type Page =
  | { path: "/_root"; render: "dynamic" }
  | ({ path: "/" } & GetConfigResponse<typeof Index_getConfig>)
  | ({ path: "/mdx" } & GetConfigResponse<typeof Mdx_getConfig>);

// prettier-ignore
declare module "waku/router" {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
