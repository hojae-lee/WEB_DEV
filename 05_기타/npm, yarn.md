# npm, yarn

- npm, yarn 은 nodejs 의 패키지 관리자 입니다.
- 자바스크립트가 발전하면서 자바스크립트로 만든 패키지들이 나오기 시작했고 지금은 npm 에서 만든 서비스에 패키지들을 올리면서 거대한 인프라가 만들어졌습니다.
- npm 은 nodejs 를 설치하면 자동으로 설치되는 기본 패키지 관리자입니다.
- yarn 은 페이스북에서 개발한 패키지 관리자로 npm 보다 속도, 안정성 측면에서 향상되었습니다.
- 사용할거면 둘 중 하나를 통일해서 사용하는 것이 좋다.

## yarn 설치

```bash
npm install yarn --global
```

## 명령어

아래는 명령어 입니다.

```bash
// 설치
npm install [패키지]

yarn add [패키지]

// dev 패키지
npm install --save-dev [패키지]

yarn add --dev [패키지]

// 제거
npm uninstall [패키지]

yarn remove [패키지]

// dev 제거
npm uninstall --save-dev [패키지]

yarn remove [패키지]
```
