import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "주변 맛집";
  let [글제목, 글수정] = useState([
    "여자친구 만드는 법",
    "쿨뷰티 미녀 만나는 법",
    "데이트 예절",
  ]);
  let [like, likeC] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(2);
  let [input, setInput] = useState("");
  const str = "check";

  return (
    <div className="App">
      <div className="black-header">
        <h4>React Blog</h4>
      </div>
      {/* 
      <button onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글수정(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4>{글제목[0]} <tr></tr> <span onClick={() => { likeC(like + 1); }}>👍</span>{like}</h4>
        <p>7월10일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>7월10일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>7월10일 발행</p>
        {modal === true ? <Modal /> : null}
      </div> */}

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
                  likeC(copy);
                  like.push([0]);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>

            <p>7월12일 발행</p>

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

      <input
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(input);
          글수정(copy);
        }}
      >
        글등록
      </button>

      {input === "" ? alert("내용을 입력해주세요") : null}

      {modal === true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글수정(["남자옷브랜드 추천", "대전맛집", "논산핫플"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
