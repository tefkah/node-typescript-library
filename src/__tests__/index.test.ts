import { describe, expect, it } from "vitest";
import { helloWorld } from "../index.js";

describe("helloWorld", () => {
	it("should return 'Hello World'", () => {
		expect(helloWorld()).toBe("Hello World");
	});
});
