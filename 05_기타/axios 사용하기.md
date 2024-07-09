# Axios 사용하기

클라이언트와 서버가 통신하기 위해 사용되는 대표적인 라이브러리 중 하나입니다.

### Axios 인스턴스를 사용하여 API 클라이언트 설정하기

우선 axios 를 사용하기 전에, 우리는 좀 간지나게 그냥 쓰지 말고 `axios.create`를 사용하여 axios 에 대한 커스텀 셋팅을 해줍시다.
요청에 대한 baseURL 과 요청마다 자동으로 인증 코드를 추가하는 인터셉터, 타임 아웃 기능을 추가해줍시다.

#### Axios 인스턴스 생성

우선, `axios.create`를 사용하여 기본 설정을 가진 Axios 인스턴스를 생성합니다. 이 인스턴스는 기본 URL과 헤더를 설정하여 모든 요청에서 일관된 설정을 유지할 수 있게 해줍니다.

```javascript
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 8000 // 8초 땡 하면 중지! (해당 부분은 필요시 변경해주면 좋음.)
})
```

위 코드에서는 `baseURL`을 `https://api.example.com`으로 설정하고, 모든 요청의 `Content-Type` 헤더를 `application/json`으로 지정했습니다. 이제 이 인스턴스를 통해 보낸 모든 요청은 기본적으로 JSON 형식을 사용하게 됩니다.

#### 요청 인터셉터 설정

API 요청을 보낼 때마다 인증 토큰(로그인 유무)을 추가해야 하는 경우가 많습니다. 이를 위해 Axios의 인터셉터를 사용할 수 있습니다.

```javascript
apiClient.interceptors.request.use(
  (config) => {
    // localStorage에서 토큰을 가져옵니다. (또는 다른 저장소)
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
```

이 인터셉터는 요청이 전송되기 전에 호출됩니다. `localStorage`에서 `authToken`이라는 이름으로 저장된 토큰을 가져와 요청 헤더에 `Authorization` 헤더로 추가합니다. 만약 토큰이 존재하지 않는다면 헤더를 추가하지 않고 그대로 요청을 진행합니다.

#### 모듈 내보내기

마지막으로, 설정된 `apiClient`를 다른 모듈에서 사용할 수 있도록 내보냅니다.

```javascript
export default apiClient
```

이제 아래와 같이 `apiClient`를 임포트하여 API 요청을 보낼 때 사용할 수 있습니다.

```javascript
import apiClient from './path-to-your-api-client.js'

apiClient.get('/endpoint')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.error(error)
  })
```

이처럼 커스텀하게 Axios 인스턴스를 생성하고 인터셉터를 설정하면, API 요청을 간편하고 일관되게 관리할 수 있습니다. 인증 토큰 추가와 같은 공통 작업을 자동화하여 코드의 중복을 줄이고 유지보수를 용이하게 할 수 있습니다.

### 커스텀한 Axios 를 이용해 get, post 유틸리티 api 만들기

위에서 만들었던 apiClinet 객체를 가져옵니다.

#### GET 요청 함수

```typescript
export const getRequest = async ({ url, params }: RequestParams) => {
  try {
    const response = await apiClient.get(url, { params })
    return response.data
  } catch (error) {
    console.error('GET request failed:', error)
    throw error
  }
}
```
`getRequest` 함수는 비동기적으로 GET 요청을 보냅니다. 

- `url`과 `params`를 인수로 받아서 `apiClient.get` 메서드를 호출합니다.
- 요청이 성공하면, 응답 데이터를 반환합니다.
- 요청이 실패하면, 에러 메시지를 콘솔에 출력하고 에러를 다시 던집니다.

#### POST 요청 함수

```typescript
export const postRequest = async ({ url, data }: RequestParams) => {
  try {
    const response = await apiClient.post(url, data)
    return response.data
  } catch (error) {
    console.error('POST request failed:', error)
    throw error
  }
}
```
`postRequest` 함수는 비동기적으로 POST 요청을 보냅니다. 

- `url`과 `data`를 인수로 받아서 `apiClient.post` 메서드를 호출합니다.
- 요청이 성공하면, 응답 데이터를 반환합니다.
- 요청이 실패하면, 에러 메시지를 콘솔에 출력하고 에러를 다시 던집니다.

### 에러 처리

각 함수는 `try-catch` 블록을 사용하여 에러를 처리합니다. 

- `try` 블록에서 API 요청을 시도하고, 성공 시 응답 데이터를 반환합니다.
- `catch` 블록에서 요청 실패 시 에러 메시지를 콘솔에 출력한 후, 에러를 다시 던집니다.

이렇게 하면 api 요청에 대한 에러처리는 완료됩니다. 이제 해당 함수를 이용해서 호출하게 되면 좀 더 간편하게 관리할 수 있고 api 요청에 대한 일관된 에러를 처리할 수 있습니다.
