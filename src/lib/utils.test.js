import { describe, expect, it } from "vitest"
import { cn } from "./utils"

describe("cn", () => {
  it("merges conflicting tailwind utility classes", () => {
    expect(cn("px-2", "px-4", "text-sm")).toBe("px-4 text-sm")
  })

  it("handles conditional and falsy classes", () => {
    const maybeHidden = undefined
    expect(cn("base", maybeHidden, null, undefined, "active")).toBe("base active")
  })
})
