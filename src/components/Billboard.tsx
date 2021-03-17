import React from "react";
import { useWindowSize } from "../hooks";

type Props = Readonly<{
  image: string;
  title: string;
  children: JSX.Element;
  defaultHeight?: number;
}>;

export default function Billboard({
  image,
  title,
  children,
  defaultHeight = 0,
}: Props): JSX.Element {
  const ref = React.useRef<HTMLDivElement>();
  const { height: windowHeight } = useWindowSize();
  const [height, setHeight] = React.useState(windowHeight);
  if (ref.current) {
    setTimeout(() => {
      const cHeight = Array.from(ref.current.children).reduce((c, e) => c + e.clientHeight, 0);
      if (cHeight > windowHeight) {
        setHeight(cHeight + 40);
      }
    })
  }
  return (
    <div
      className="jumbotron"
      style={{
        background: `center / cover no-repeat url('${image}')`,
        height: `${defaultHeight || height || 360}px`,
        position: "relative",
        boxSizing: "content-box",
      }}
    >
      <div style={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}></div>
      <div
        className="container-fluid pt-sm-4"
        ref={ref}
        style={{
          position: "relative",
          height: "100%",
          color: "white",
          paddingTop: "0.5rem",
          zIndex: 1,
        }}
      >
        <div className="row">
          <h1 className="col-6" style={{ color: "white", fontSize: "6rem" }}>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
