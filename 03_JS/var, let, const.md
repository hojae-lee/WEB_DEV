# var, let, const란?
    
    `var`, `const`, 그리고 `let`은 JavaScript에서 변수를 선언하는 데 사용되는 키워드들
    
    1. **`var`**:
        - `var`는 변수를 선언하는 데 사용되는 가장 오래된 키워드이다.
        - 함수 스코프를 가지고 있어 함수 내에서 선언된 변수는 함수 내에서만 유효하다.
        - 호이스팅(hoisting)이 발생해 선언 전에 변수에 접근 가능하다.
        
        ```jsx
        function exampleVar() {
            if (true) {
                var x = 10;
                console.log(x); // 10
            }
            console.log(x); // 10
        }
        
        ```
        
    2. **`let`**:
        - `let`은 ECMAScript 6에서 도입되었으며 블록 스코프를 가진다.
        - 변수를 선언한 블록 내에서만 유효하다.
        - 호이스팅이 발생하지만 선언 전에 변수에 접근하면 `ReferenceError`가 발생한다.
        
        ```jsx
        function exampleLet() {
            if (true) {
                let y = 20;
                console.log(y); // 20
            }
            console.log(y); // ReferenceError: y is not defined
        }
        
        ```
        
    3. **`const`**:
        - `const`는 상수를 선언하는 데 사용되며, 재할당이 불가능하다.
        - 블록 스코프를 가진다.
        - **반드시 초기화**되어야 하며, 선언과 동시에 값을 할당해야 한다.
        
        ```jsx
        function exampleConst() {
            const z = 30;
            console.log(z); // 30
        
            // Error: 상수에 재할당할 수 없음
            z = 40;
        }
        
        ```
        
    
    **차이점 요약:**
    
    - `var`는 함수 스코프, `let`과 `const`는 블록 스코프를 가진다.
    - `var`는 호이스팅이 발생하고, `let`과 `const`는 호이스팅이 발생하지만 선언 전에 접근하면 오류가 발생한다.
    - `const`는 상수로 선언되어 값을 재할당할 수 없다.