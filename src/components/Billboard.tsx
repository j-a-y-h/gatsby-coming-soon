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
        backgroundColor: 'rgba(0,0,0,0.25)'
      }}></div>
      <div
        className="container-fluid"
        style={{
          position: "absolute",
          top: 0,
          color: "white",
          right: 0,
          left: 0,
          paddingTop: "2.5rem",
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
