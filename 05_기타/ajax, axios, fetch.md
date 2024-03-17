# 개요

- 클라이언트와 서버간의 데이터를 주고 받기 위해서는 http 통신을 이용한 rest api 를 많이 사용합니다.
- http 통신을 위해 가장 대표적으로 사용되는 ajax, axios, fetch 가 있습니다.

## Ajax

- Asynchronous Javascript And XML 의 약자로, 자바스크립트를 이용한 비동기 통신, 클라이언트와 서버간에 데이터를 주고 받는 기술입니다.
- 일반적으로 이 기술을 쉽게 사용하기 위해 Jquery 를 이용하여 Ajax 를 활용하기도 합니다.

```js
// jQuery의 .get 메소드 사용
$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    type: 'GET',
    success: (data) => {
        console.log(data);
    },
    error: (error) => {
        console.error(error);
    }
});
```

## Axios

- axios 는 Promise 기반의 http 통신으로 promise 객체를 리턴해주기 때문에 최신 문법, async, await 를 사용해서 응답 데이터를 쉽게 만질 수 있습니다.
- 요즘에는 axios 를 많이 사용하는 형태를 보여줍니다.
- 크로스 브라우징 지원으로 브라우저 호환성이 좋다.

```js
axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/todos/1',
})
  .then((response) => {
    console.log(response)
  });
```

## fetch

- fetch 는 es6부터 자바스크립트에 내장되었고 promise 기반으로 axios 와 마찬가지로 promise 를 리턴해줍니다. 그리고 별도로 설치할 필요가 없습니다.
- fetch(url, [options])

```js
// 방법1
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))

// 방법2
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const jsonData = await response.json();
console.log(jsonData);
```
