import React from "react";

type ContentProps = {
  children: JSX.Element;
};

function Content(props: ContentProps) {
  const { children } = props;

  return <div>{children}</div>;
}

export default Content;
