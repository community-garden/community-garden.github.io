import React from 'react';
import {useRouteData} from "react-static";
import ReactMarkdown from "react-markdown";

export default () => {
  const { content } = useRouteData()
  return (
    <div>
      <ReactMarkdown children={content}/>
    </div>
  );
};
