import Markdown from "@/core/markdown/markdown";

export default function Usage(props: any) {
  return (
	<div>
	  <Markdown source={props.markdown} />
	</div>
  );
}
