import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function App() {
  let post = "건양대 주변 맛집";
  let [글제목, 글수정] = useState(["데이트코스 추천", "대전맛집", "논산핫플"]);
  let [like, likeC] = useState([0,0,0]);
  let [modal, setModal] = useState(false);




  return (
    <div className="App">
      <div className="black-header">
        <h4>잡다한 블로그</h4>
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

      {
        글제목.map(function(a, i){
          return(
            <div className="list">
              <h4>{글제목[i]}<span onClick={() => {let copy = [...like];
              copy[i] = copy[i]+1;
              likeC(copy) }}>👍</span>{like[i]}</h4>
              <p>7월12일 발행</p>
              </div>
          )
        })
      }



      
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}


export default App;
