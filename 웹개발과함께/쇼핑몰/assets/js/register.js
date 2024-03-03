/**
 * 상품 등록 함수
 * @param {Element} container 상품 아이템을 넣을 컨테이너
 * @param {Object} product 등록할 상품 정보
 */
function register(container, product) {
    // div 요소를 만든다.
    var item = document.createElement("div");
    // item class 를 추가해준다.
    item.classList.add("item");
  
    // hidden input 요소 만들기
    var input = document.createElement("input");
    input.type = "hidden";
    input.id = `input-${product.index}`;
    input.value = product.index;
  
    // img 요소를 만든다.
    var img = document.createElement("img");
    // img 에 src 를 설정해준다.
    img.src = product.image;
    // img 에 alt 를 설정해준다.
    img.alt = product.name;
  
    // h3 요소를 만든다.
    var name = document.createElement("h3");
    // h3 요소에 textContent 를 이용해서 텍스트를 넣는다.
    name.textContent = product.name;
  
    // p 요소를 만든다.
    var price = document.createElement("p");
    // p 요소에 textContent 를 이용해서 텍스트를 넣는다.
    price.textContent = "가격: " + product.price;
  
    // button 요소를 만든다.
    var btn = document.createElement("button");
    btn.textContent = "삭제";
  
    btn.addEventListener("click", function () {
      var products = getProducts();
      // 배열 자르기
      products.splice(product.index, 1);
      // 자른 거 저장
      localStorage.setItem("products", JSON.stringify(products));
  
      alert("삭제가 완료되었습니다.");
  
      window.location.reload(); // 새로 고침
    });
  
    // 수정 버튼 요소를 만든다.
    var editBtn = document.createElement("button");
    editBtn.textContent = "수정";
  
    editBtn.addEventListener("click", function () {
      location.href = `../update/index.html?id=${product.index}`;
    });
  
    // appendChild 를 이용해서 위에서 만든 요소를 div 밑에 넣는거에요.
    // div > img, name, price
    item.appendChild(input);
    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(price);
    item.appendChild(btn);
    item.appendChild(editBtn);
  
    // item 요소를 container 요소에 넣어준다.
    container.appendChild(item);
  }
  