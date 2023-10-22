import { setStr } from "./utils/str";

export function Button() {
  return (
    <button
      onClick={() => {
        setStr("bbb");
      }}
    >
      set "bbb"
    </button>
  );
}
