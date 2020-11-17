import React from 'react';
import {useRouteData} from "react-static";
import ReactMarkdown from "react-markdown";

const Home = () => {
  const { homeMD } = useRouteData()
  return (
    <div>
      <ReactMarkdown children={homeMD}/>
    </div>
  );
};

export default Home;
