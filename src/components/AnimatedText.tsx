import Typed from "typed.js";
import * as React from "react"

type Props = Readonly<{
  strings: string[];
}>
export function AnimatedText({strings}: Props) {
  const ref = React.useRef({ typed: (null as unknown) as Typed });
  const refEl = React.useRef<HTMLElement>() as React.MutableRefObject<HTMLParagraphElement>;
  const refPlaceholder = React.useRef<HTMLElement>() as React.MutableRefObject<HTMLParagraphElement>;
  React.useEffect(() => {
    if (refEl.current) {
      setTimeout(() => {
        refPlaceholder.current.innerText = "";
        // eslint-disable-next-line
        // @ts-ignore
        ref.current.typed = new Typed(refEl.current, {
          strings,
          startDelay: 50,
          typeSpeed: 60,
          showCursor: false,
        });
      });
    }
    return (): void => {
      const { typed } = ref.current;
      // eslint-disable-next-line
      typed?.destroy();
    };
  });
  return (
    <>
      <span ref={refEl} />
      <span ref={refPlaceholder}>{strings[0]}</span>
      <span className="invisible">&nbsp;</span>
    </>
  )
}