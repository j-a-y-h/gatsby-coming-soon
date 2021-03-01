import React from "react";
import { useWindowSize } from "../hooks";

type Props = Readonly<{
  subjectRef?: string;
  y: number;
  image: string;
  title: React.ReactChildren;
  children: React.ReactChildren;
  setHeight: number;
}>;

export default function Billboard({
  y = 0,
  subjectRef,
  image,
  title,
  children,
  setHeight = 0,
}: Props): JSX.Element {
  const { height } = useWindowSize();
  return (
    <div
      className="jumbotron"
      ref={subjectRef}
      style={{
        background: `center / cover no-repeat url('${image}')`,
        backgroundPositionY: `${y * 2}px`,
        height: `${setHeight || height || 360}px`,
        position: "relative",
      }}
    >
      <div
        className="container-fluid text-center"
        style={{
          position: "absolute",
          bottom: 0,
          color: "white",
          right: 0,
          left: 0,
          paddingBottom: "20px",
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6965161064425771) 50%, rgba(0,0,0,0) 100%)",
        }}
      >
        <h1 style={{ color: "white" }}>{title}</h1>
        {children}
        <p
          className="text-small"
          style={{ fontSize: "12px", fontStyle: "italic", color: "rgba(255,255,255,0.75)" }}
        >
          Scroll to view more
        </p>
      </div>
    </div>
  );
}
