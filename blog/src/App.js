import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  let post = '강남 우동 맛집';// 서버에서 가져온 데이터라고 가정
  let [글제목, b] = useState('남자 코트 추천'); // 잠깐 자료를 저장할 때 사용
  // a 는 변수명 b 는 state 변경 도와주는 함수 디스트럭쳐링 문법
  let [logo, setLogo] = useState('React Blog');



  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'blue', fontSize : '16px'} }>{ logo }</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
