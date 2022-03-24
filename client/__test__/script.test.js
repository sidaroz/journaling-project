const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("index.html", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  describe("head", () => {
    it("it has a title", () => {
      let title = document.querySelector("header");
      expect(title).toBeTruthy();
      expect(title.textContent).toContain("Factopia");
    });
  });
});

