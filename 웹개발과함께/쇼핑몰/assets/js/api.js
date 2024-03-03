// 우리가 api 를 이용해서 클라이언트와 서버가 데이터를 주고 받는다고 했죠.
// 여기는 이제 서버에서 받은 데이터가 있는 곳 입니다.
function getProducts() {
    var products = JSON.parse(localStorage.getItem("products")) || [];
  
    return products;
  }
  
  // 데이터 전체 삭제
  function removeAll() {
    localStorage.clear();
    alert("모든 데이터가 삭제되었습니다.");
    location.reload();
  }
  