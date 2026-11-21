import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const posterPath = join(botDir, "assets", "keluvia-poster.jpg");
const outputPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(posterPath, outputPath);
