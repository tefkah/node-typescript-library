import { bench } from "vitest";
import { helloWorld } from "../index.js";

bench("helloWorld", () => {
	helloWorld();
});
