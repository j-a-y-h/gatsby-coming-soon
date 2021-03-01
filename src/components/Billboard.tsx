import React from "react";
import { useWindowSize } from "../hooks";

type Props = Readonly<{
  image: string;
  title: string;
  children: JSX.Element;
  setHeight?: number;
}>;

export default function Billboard({
  image,
  title,
  children,
  setHeight = 0,
}: Props): JSX.Element {
  const { height } = useWindowSize();
  return (
    <div
      className="jumbotron"
      style={{
        background: `center / cover no-repeat url('${image}')`,
        height: `${setHeight || height || 360}px`,
        position: "relative",
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
        className="container-fluid"
        style={{
          position: "absolute",
          top: 0,
          color: "white",
          right: 0,
          left: 0,
          padding: "60px",
          zIndex: 1,
        }}
      >
        <h1 style={{ color: "white" }}>{title}</h1>
        {children}
      </div>
    </div>
  );
}
