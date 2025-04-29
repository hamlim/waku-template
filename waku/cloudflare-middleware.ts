// Workaround https://github.com/cloudflare/workers-sdk/issues/6577
import type { Middleware } from "waku/config";

function isWranglerDev(headers?: Record<string, string | string[]>): boolean {
  // This header seems to only be set for production cloudflare workers
  return !headers?.["cf-visitor"];
}

type Context = Parameters<ReturnType<Middleware>>[0];
type Next = Parameters<ReturnType<Middleware>>[1];

export default function cloudflareMiddleware(): ReturnType<Middleware> {
  return async (ctx: Context, next: Next) => {
    await next();
    if (!import.meta.env?.PROD) {
      return;
    }
    if (!isWranglerDev(ctx.req.headers)) {
      return;
    }
    let contentType = ctx.res.headers?.["content-type"];
    if (
      !contentType ||
      contentType.includes("text/html") ||
      contentType.includes("text/plain")
    ) {
      ctx.res.headers ||= {};
      ctx.res.headers["content-encoding"] = "Identity";
    }
  };
}
