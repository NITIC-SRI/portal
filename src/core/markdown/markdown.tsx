import MarkdownPreview from "@uiw/react-markdown-preview";

export default function Markdown({ source }: { source: string }) {
  return (
    <div data-color-mode="light">
      <MarkdownPreview source={source} />
    </div>
  );
}
