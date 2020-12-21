import React from 'react';
import {useRouteData} from "react-static";

export default () => {
  const { content } = useRouteData()
  return (
    <div dangerouslySetInnerHTML={{__html: content}}></div>
  );
};
