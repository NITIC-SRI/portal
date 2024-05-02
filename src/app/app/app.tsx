"use client";
import Article from "@/components/article/article";
import Board from "@/components/board/board";
import QandA from "@/components/qa/qa";
import Setting from "@/components/setting/setting";
import Tests from "@/components/tests/tests";
import Timeline from "@/components/timeline/timeline";
import Usage from "@/components/usage/usage";
import Appbar from "@/core/appbar/Appbar";
import { apps } from "@/types/app.type";
import { useCallback, useState } from "react";

export default function App(props: any) {
  const [app, setApp] = useState(0);

  const handleChangeApp = useCallback((index: number) => {
    setApp(index);
  }, []);

  return (
    <div>
      <Appbar setApp={handleChangeApp}>
        {apps[app] === "timeline" ? (
          <Timeline />
        ) : apps[app] === "qanda" ? (
          <QandA />
        ) : apps[app] === "article" ? (
          <Article />
        ) : apps[app] === "tests" ? (
          <Tests />
        ) : apps[app] === "board" ? (
          <Board />
        ) : apps[app] === "setting" ? (
          <Setting />
        ) : (
          <Usage markdown={props.markdown} />
        )}
      </Appbar>
    </div>
  );
}
