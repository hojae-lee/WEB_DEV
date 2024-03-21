# React Starter

페이지 전환 같은게 새로고침 없이 부드럽게 동작하는 싸이트들이 있을 겁니다. 이런 사이트들을 Single Page Application 이라고 합니다. 특징은 아래와 같아요.

- html 파일을 1개만 씀
- 다른 페이지를 보여주고 싶을 때 html 부분만 샥 갈아치워서 보여줍니다.

실제로 빌드시에 정적 파일(html, css, js)로 만들어집니다.

여튼 이러한, SPA 가 그냥 자바스크립트로만 하면 너무 어렵고 길어집니다. 그래서 리액트라는 라이브러리를 사용하면 훨씬 편하게 코딩 가능합니다.

## Create React App 설치

```bash
npx create-react-app my-app
```

## Vite 를 이용한 React App 설치

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

### JSX

리액트라고 복잡하고 어려운게 아니고, 그냥 똑같이 html, css 를 이용해서 웹페이지를 만드는건데 이제 html 대신에 jsx 라는 것을 사용합니다. 크게 다른 부분은 없어요!
- html에 class 를 넣을 때는 className 사용, 잘보면 평소에 짜던 html/css와 다른 부분이 있습니다. 스타일을 주기 위한 class명을 넣을 때 class=" " 가 아니라 className=" " 이렇게 쓰는 부분이 좀 다름
- html에 변수를 넣을 때는 {중괄호} 사용
```jsx
<div>{ post }</div>
```

- html에 style 속성 사용
```jsx
<div style=”color:blue;font-size:30px”></div> ⇒ <div style={{color: ‘blue’, fontSize: ‘30px’}}></div>
```
와 같이 { { 속성명: ‘속성값’ } } 으로 넣으면 됩니다. font-size 처럼 속성명에 대쉬기호를 사용할 수 없음. 붙여쓰는 경우, 카멜 케이스로 변경해서 사용해야 합니다.


### 예제 1

```jsx
import "./App.css";
import { useState } from "react";

function App() {
  let post = "개발 일기";
  const [title, setTitle] = useState("첫번째 일기");
  const [date, setDate] = useState("2월 17일");

  return (
    <div className="App">
      <div className="black-nav">
        <div>{post}</div>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default App;
```

리액트에서는 변수말고 state를 만들어서 데이터를 저장할 수 있습니다.

저장한 state 는 set을 사용해서만 변경할 수 있습니다.

### 변수 말고 state에 데이터 저장해서 쓰는 이유

- 잘 생각해보면 state도 용도는 그냥 변수랑 똑같습니다. 자료 잠깐 보관하는게 끝인데
- 변수 만들어 쓰면 되는거지 왜 굳이 state 만들어쓰냐 -> state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링해줍니다
- **자주변경될 것 같은 데이터**들은 state에 저장했다가 html에 {데이터바인딩} 해놓으십시오

### 예제 2

useState 를 이용한 리스트 추가 방식

```jsx
import "./App.css";
import { useState } from "react";

function App() {
  let post = "개발 일기";
  const [title, setTitle] = useState([
    "일기1",
    "일기2",
    "일기3",
  ]);

  const getTitle = () => {
    return (
      <div>
        {title.map((item) => (
          <div className="list" key={item}>
            <h4>{item}</h4>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>{post}</div>
      </div>
      {getTitle()}
    </div>
  );
}

export default App;
```

### 버튼 기능 개발 / state 변경하기

> onClick 사용법

- 이제 버튼을 누르면 따봉이라는 state 를 카운팅 시키기
- 어떤 html을 클릭시 원하는 코드 실행하는 법을 알아봅시다.

```html
<div onclick="실행할 자바스크립트~~~">
```

일반 html 파일에선 이렇게 하면 됩니다.

```xml
<div onClick={실행할함수}>
```

JSX에서는 이렇게 합니다.

```jsx
import "./App.css";
import { useState } from "react";

function App() {
  let post = "개발 일기";
  const [title, setTitle] = useState([
    "일기1",
    "일기2",
    "일기3",
  ]);
  const [count, setCount] = useState(0);

  const clickHanlder = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const GetTitle = () => {
    return (
      <div>
        {title.map((item) => (
          <div className="list" key={item}>
            <h4>
              {item} <span onClick={clickHanlder}>👍</span>
              {count}
            </h4>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>{post}</div>
      </div>
      <GetTitle />
    </div>
  );
}

export default App;
```

따봉이 따로따로 될 수 있는 방법 -> 별도의 리스트를 이용해서 만들기

```jsx
import "./App.css";
import { useState } from "react";

function App() {
  let post = "개발 일기";
  const [list, setList] = useState([
    { title: "일기1", likes: 0 },
    { title: "일기2", likes: 0 },
    { title: "일기3", likes: 0 },
  ]);

  const clickCountHandler = (index) => {
    const newList = [...list];
    newList[index].likes += 1;
    setList(newList);

    console.log(info);
  };

  const ItemList = () => {
    return (
      <div>
        {list.map((item, index) => (
          <div className="list" key={index}>
            <h4>
              {item.title} <span onClick={() => clickCountHandler(index)}>👍</span>
              {item.likes}
            </h4>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>{post}</div>
      </div>
      <ItemList />
    </div>
  );
}

export default App;
```

