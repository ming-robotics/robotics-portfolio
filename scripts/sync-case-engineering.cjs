const fs = require("node:fs");
const path = require("node:path");
const { renderCaseEngineering } = require("../assets/js/case-engineering.js");

const staticCases = {
  W01: "fishing-boat-control.html",
  W02: "net-fishing-usv.html",
  W03: "drain-inspection.html",
  W04: "water-pipe-inspection.html",
  W05: "wind-blade-inspection.html",
  W06: "suspended-platform-monitoring.html",
  S01: "ros1-uav.html",
  S02: "agv-navigation.html",
  S03: "medical-delivery-robot.html",
  S04: "coverage-seeding-uav.html",
  S05: "air-ground-firefighting.html",
  S06: "delivery-uav.html",
  S07: "mobile-aiming-device.html",
  S08: "autonomous-parking-car.html",
  S09: "slope-driving-car.html"
};
const start = "      <!-- case-engineering:start -->";
const end = "      <!-- case-engineering:end -->";
const checkOnly = process.argv.includes("--check");

for (const [id, filename] of Object.entries(staticCases)) {
  const file = path.join(__dirname, "..", "cases", filename);
  const html = fs.readFileSync(file, "utf8");
  const startIndex = html.indexOf(start);
  const endIndex = html.indexOf(end, startIndex + start.length);
  const engineering = renderCaseEngineering(id);
  if (startIndex < 0 || endIndex < 0 || !engineering) {
    throw new Error(`Missing engineering content or markers in ${filename}`);
  }

  const newline = html.includes("\r\n") ? "\r\n" : "\n";
  const markup = engineering.split("\n").map(line => "      " + line).join(newline);
  const updated = html.slice(0, startIndex + start.length) + newline + markup + newline + html.slice(endIndex);
  if (updated !== html) {
    if (checkOnly) {
      console.error(`${filename}: engineering content is out of date`);
      process.exitCode = 1;
    } else {
      fs.writeFileSync(file, updated);
    }
  }
}
