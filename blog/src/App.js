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
      <button onClick={ () => { // array 원본을 보존하는 게 좋음
        let copy = [...글제목];// 디스트럭쳐링 할당으로 배열을 복사함 얕은 복사
        copy[0] = '겨울'
        setTitle(copy);
       } }>글 수정</button>

      <div className='list'>
        <h4>{ 글제목[0] } 
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
