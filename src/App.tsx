import { useEffect, useState } from "react";
import { str } from "./utils/str";

export function App() {
  const [text, setText] = useState(str);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(str);
      if (str !== text) {
        setText(str);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <span>テキスト: {text}</span>;
}
