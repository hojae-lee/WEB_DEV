# UI 만들기

```html
<style>
    .alert-box {
        background: #aba8f4;
        color: #fff;
        padding: 15px;
        border-radius: 10px;
    }
</style>
<body>
    <div class="alert-box">alert</div>
    <button onclick="">보이기/숨기기</button>
</body>
```

순서

1. html 태그 만들기
2. 디자인 하기 -> css 파일로 별도로 빼서 import 하는 방법. ex) link...
3. 버튼 동작 추가

## 예제

1. 버튼 클릭시 alert 가 나오고 **숨겼다,보였다** 메시지를 띄워주신 후, 확인을 누르면, div 숨겼다 보였다하기
2. 버튼 클릭시 버튼의 텍스트를 보이기, 숨기기로 치환해보기

### 힌트
1. 버튼 클릭용 함수 만들기
2. 함수 안에서 class 요소를 가져오기 (`document.querySelector(".alert-box")`)
3. 숨겼다, 보였다의 style 은 display 라는 스타일을 찾아보면 됨.
4. 버튼의 텍스트를 바꿀라면, 버튼 요소를 가져와서 text를 바꿔주면 됨.
