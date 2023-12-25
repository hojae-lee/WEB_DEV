# HTTP 상태 코드 정리

HTTP 상태 코드는 HTTP 요청에 대한 서버의 응답을 나타내는 3자리 숫자입니다. 상태 코드는 세 가지 범주로 나뉩니다: 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error), 5xx (Server Error). 아래에 각 범주의 주요 HTTP 상태 코드를 나열하겠습니다.

## 1xx (Informational)

- **100 Continue**: 서버가 클라이언트의 요청을 받았으며 계속 처리할 의사가 있음을 나타냄.

## 2xx (Success)

- **200 OK**: 요청이 성공적으로 처리되었음을 나타냄.
- **201 Created**: 요청에 의해 새로운 리소스가 성공적으로 생성되었음을 나타냄.
- **204 No Content**: 서버가 요청을 성공적으로 처리했지만 응답 본문에 내용이 없음을 나타냄.

## 3xx (Redirection)

- **301 Moved Permanently**: 리소스의 URI가 변경되었으며, 이제 새로운 URI를 사용해야 함을 나타냄.
- **302 Found (or Moved Temporarily)**: 리소스가 일시적으로 새로운 위치로 이동되었음을 나타냄.
- **304 Not Modified**: 클라이언트의 캐시가 최신 상태이며 리소스가 변경되지 않았음을 나타냄.

## 4xx (Client Error)

- **400 Bad Request**: 서버가 요청을 이해하지 못했거나, 잘못된 요청이 전송되었음을 나타냄.
- **401 Unauthorized**: 요청한 리소스에 대한 인증이 필요함을 나타냄.
- **403 Forbidden**: 요청이 서버에 의해 거부되었음을 나타냄.
- **404 Not Found**: 요청한 리소스가 서버에 없음을 나타냄.

## 5xx (Server Error)

- **500 Internal Server Error**: 서버가 요청을 처리하는 동안 예기치 못한 오류가 발생했음을 나타냄.
- **502 Bad Gateway**: 게이트웨이나 프록시 서버가 유효하지 않은 응답을 받았음을 나타냄.
- **503 Service Unavailable**: 서버가 일시적으로 서비스를 제공할 수 없음을 나타냄.

이러한 HTTP 상태 코드는 클라이언트와 서버 간의 통신에서 발생하는 다양한 상황을 나타내며, 개발자들이 문제를 신속하게 식별하고 해결할 수 있도록 도움을 줍니다.
