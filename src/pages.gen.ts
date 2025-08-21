// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_Mdx_getConfig } from './pages/mdx';

// prettier-ignore
type Page =
| { path: '/_root'; render: 'dynamic' }
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/mdx' } & GetConfigResponse<typeof File_Mdx_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
