import { defineConfig } from "tsdown";

export default defineConfig({
	entry: "./src/index.ts",
	outDir: "./dist",
	format: ["esm", "cjs"],
	attw: {
		enabled: true,
		profile: "node16",
	},
	dts: true,
	sourcemap: true,
	clean: true,
});
