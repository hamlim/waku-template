/// <reference types="bun-types" />

import packageJson from "./package.json" with { type: "json" };

let packageName = process.argv[2];

if (!packageName) {
  console.error("Usage: bun ./setup.ts <name>");
  process.exit(1);
}

await Bun.write(
  "./package.json",
  JSON.stringify({ ...packageJson, name: packageName }, null, 2),
);

let wranglerConfig = await Bun.file("./wrangler.jsonc").text();

await Bun.write(
  "./wrangler.jsonc",
  wranglerConfig.replace("waku-template", packageName),
);

let rootFile = await Bun.file("./src/pages/_root.tsx").text();

await Bun.write(
  "./src/pages/_root.tsx",
  rootFile.replace(
    "Waku Template",
    packageName
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  ),
);
