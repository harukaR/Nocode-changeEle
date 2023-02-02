import "./styles.css";

import { useRef, useState } from "react";

export default function App() {
  const addStyles = [
    {
      id: 1,
      value: "font-weight",
    },
    {
      id: 2,
      value: "font-nomal",
    },
    {
      id: 3,
      value: "color",
    },
    {
      id: 4,
      value: "font-style",
    },
    {
      id: 5,
      value: "text-decoration",
    },
    {
      id: 6,
      value: "background-color",
    },
    {
      id: 7,
      value: "line-height",
    },
    {
      id: 8,
      value: "letter-spacing",
    },
    {
      id: 9,
      value: "writing-mode",
    },
    {
      id: 10,
      value: "link",
    },
  ];

  //クラス付与用のstate
  // const [addClass01, setAddClass01] = useState(true);
  // const [addClass02, setAddClass02] = useState(true);
  // const [addClass03, setAddClass03] = useState(true);
  // const [addClass04, setAddClass04] = useState(true);
  // const [addClass05, setAddClass05] = useState(true);
  // const [addClass06, setAddClass06] = useState(true);
  // const [addClass07, setAddClass07] = useState(true);
  // const [addClass08, setAddClass08] = useState(true);
  // const [addClass09, setAddClass09] = useState(true);

  const [isActive01, setIsActive01] = useState(false);
  const [isActive02, setIsActive02] = useState(true);
  const [isActive03, setIsActive03] = useState(true);
  const [isActive04, setIsActive04] = useState(true);
  const [isActive05, setIsActive05] = useState(true);
  const [isActive06, setIsActive06] = useState(true);
  const [isActive07, setIsActive07] = useState(true);
  const [isActive08, setIsActive08] = useState(true);
  const [isActive09, setIsActive09] = useState(true);
  const [isActive10, setIsActive10] = useState(true);

  const eleRef = useRef(null);

  //選択したテキストにspanタグを挿入する用の関数
  const insertSpan = () => {
    const range = window.getSelection().getRangeAt(0);
    const span = document.createElement("span");
    span.appendChild(range.cloneContents());
    range.deleteContents();
    range.insertNode(span);
    span.classList.add("styled");
    return span;
  };

  //spanタグにスタイルを付与するようの関数
  const changeStyle = (e) => {
    let span = insertSpan();
    if (e.currentTarget.id === "1") {
      span.classList.add(`${addStyles[0].value}`);
    } else if (e.currentTarget.id === "2") {
      span.classList.add(`${addStyles[1].value}`);
    }
  };

  //buttonにスタイルを付与する用の関数
  const changeButtonStyle = (e) => {
    if (e.currentTarget.id === "1") {
      e.currentTarget.classList.add("active");
    }
  };

  const createButton = (e) => {
    changeStyle(e);
    changeButtonStyle(e);
  };

  // 次のアプローチ
  //選択したテキストのspanタグに"styled"というクラスがあったらボタンの"action"クラスを削除

  return (
    <>
      <div className="App" ref={eleRef}>
        <p>ABCDE</p>
        <p>
          <span>ABCDE</span>
        </p>
        <p>
          さしす <br />
          せそ
        </p>
        <p>
          <strong>カキクケコ</strong>
        </p>
      </div>
      {addStyles.map((item, i) => {
        return (
          <button key={item.id} onClick={createButton} id={item.id}>
            {item.value}
          </button>
        );
      })}
    </>
  );
}
