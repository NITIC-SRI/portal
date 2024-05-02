import fs from "fs";
import App from "./app/app";

export default function Home() {
  const md = getUsage();
  return (
    <div>
      <App markdown={md} />
    </div>
  );
}

function getUsage() {
  const markdown = fs.readFileSync(
    "src/app/usage.md",
    "utf-8"
  );
  return markdown;
}
