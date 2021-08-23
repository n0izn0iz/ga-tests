// The picomatch library is what's used by dorny/path-filters@v2 action

const picomatch = require("picomatch")

const patterns = ["**/no-trigger/**", "**/.git/**"]

const isMatch = picomatch(patterns, { dot: true })

for (const p of [
    "no-trigger/bar",
    "other/42"
]) {
    console.log(p + "\t", !isMatch(p))
}