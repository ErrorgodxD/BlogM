import logo from "./logo.svg";

import "./App.css";

import { useState } from "react";

function App() {
  let [글제목, 글수정] = useState([
    "배열테스트2",
    "배열테스트1",
    "배열테스트0",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(2);
  let [input, setInput] = useState("");
  let current = new Date();
  let date = `${current.getFullYear()}년${
    current.getMonth() + 1
  }월${current.getDate()}일`;

  return (
    <div className="App">
      <div className="black-header">
        <a href="/">국내 보안 갤러리</a>
      </div>

      {/* 반복문 안에 모달 여닫기, 좋아요 증가 글 삭제 구현 */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={e => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  e.stopPropagation();
                  setLike(copy);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>

            <p>{date}에 작성된 글입니다.</p>

            {/* 글삭제 */}
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글수정(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {/* 인풋 글 등록 */}
      <div className="input-title">
        <input
          type="text"
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.unshift(input);
            if (input === "") {
              alert("제목을 입력해주세요");
              return false;
            }

            글수정(copy);
            if (글수정(copy)) {
              setLike.push([0]);
            }
            like.unshift(0);
          }}
        >
          글등록
        </button>
      </div>

      {modal === true ? (
        <Modal title={title} 글제목={글제목} date={date} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>{props.date}</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글수정(["여자친구", "대전맛집", "논산핫플"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
