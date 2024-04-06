# useEffect

리액트의 대표적인 훅으로 라이프사이클 메소드를 함수형 컴포넌트에서 사용할 수 있게 해주는 Hook 입니다.

## 사용법

```jsx
// 첫 발생 후, 컴포넌트가 렌더링 될 때마다 실행
useEffect(() => {
  // 작업
});

// 첫 발생 후, value 값이 바뀔 때 실행
useEffect(() => {
  // 작업
}, [value]);

// clean up 으로 컴포넌트가 해지되거나 useEffect 가 해지될 때 해지시킨다.
useEffect(() => {
  // 작업 mount
  return () => {
    // 해지 unmount
  };
}, []);
```

```js
import { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

위 코드에서는 `useEffect` 를 사용하여 컴포넌트가 업데이트될 때마다 `document.title` 을 업데이트하도록 설정하는 예제입니다. `useEffect` 는 함수형 컴포넌트에서 라이프사이클 메소드와 같은 역할을 하며, 컴포넌트가 마운트될 때, 언마운트될 때, 그리고 업데이트될 때 호출됩니다. 두 번째 인자로 전달된 배열은 `useEffect` 가 실행될 조건을 지정하는데, 해당 배열에 지정된 값이 변경될 때에만 `useEffect` 가 실행됩니다. 위 코드에서는 `count` 가 변경될 때마다 `useEffect` 가 실행되도록 설정되어 있습니다.

### 데이터 패칭

```js
import React, { useState, useEffect } from "react";

const MyComponent = () => {
  // 상태 초기화
  const [data, setData] = useState([]);

  // useEffect를 사용하여 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch를 사용하여 JSONPlaceholder의 포스트 데이터 가져오기
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // fetchData 함수 호출
    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 useEffect가 실행되도록 함

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {/* 데이터 매핑 및 출력 */}
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
```
