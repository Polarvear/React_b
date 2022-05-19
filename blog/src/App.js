/* esLint-diable */
// 사용하지 않는 변수 warning 뜨지않게


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  let post = '강남 우동 맛집';// 서버에서 가져온 데이터라고 가정
  let [글제목, setTitle] = useState(['남자 코트 추천', '봄', '여름', '가을']); // 잠깐 자료를 저장할 때 사용, 자주 바뀌는 자료에 사용
  // a 는 변수명 b 는 state 변경 도와주는 함수 디스트럭쳐링 문법
  let [logo, setLogo] = useState('React Blog');
  let [like, setLike] = useState(0)
  // onClick 안에는 항상 함수를 넣어줘야함
  // state는 등호로 변경하면 안됨 state 두번쨰 변수명을 사용하면 됨
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'blue', fontSize : '16px'} }>{ logo }</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] } 
        <button onClick={ () => { setTitle(글제목[3] ) }}>이름 변경</button>
        <span onClick={ () => { setLike(like + 1) } }>👍</span> { like } </h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4> 
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
