// 드롭다운 메뉴가 있는 요소
var dropdown = document.querySelector(".dropdown");

// 클릭 이벤트를 추가하여 메뉴가 토글
dropdown.addEventListener("click", function (event) {
  var dropdownContent = this.querySelector(".dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

// 문서의 다른 부분을 클릭했을 때 메뉴가 사라지도록
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    var dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.style.display = "none";
  }
});

function mobile() {
  document.getElementById("tell").innerHTML = "스마트폰/태블릿/웨어러블";
  document.getElementById("abc").innerHTML =
    "전원/배터리/충전/멈춤/오류/재시작";
  document.getElementById("same").innerHTML =
    "Make New에서 더 나은 서비스를 제공해드립니다.";
}
function com() {
  document.getElementById("tell").innerHTML = "노트북/데스크톱/모니터";
  document.getElementById("abc").innerHTML =
    "전원/배터리/충전/멈춤/오류/재시작";
  document.getElementById("same").innerHTML =
    "Make New에서 더 나은 서비스를 제공해드립니다.";
}
function camera() {
  document.getElementById("tell").innerHTML = "카메라/가전제품";
  document.getElementById("abc").innerHTML =
    "전원/배터리/촬영/렌즈/멈춤/오류/재시작";
  document.getElementById("same").innerHTML =
    "Make New에서 더 나은 서비스를 제공해드립니다.";
}
function tv() {
  document.getElementById("tell").innerHTML = "TV/DMB";
  document.getElementById("abc").innerHTML = "전원/배터리/멈춤/오류";
  document.getElementById("same").innerHTML =
    "Make New에서 더 나은 서비스를 제공해드립니다.";
}
function print() {
  document.getElementById("tell").innerHTML = "프린트";
  document.getElementById("abc").innerHTML = "전원/배터리/멈춤/오류/재시작";
  document.getElementById("same").innerHTML =
    "Make New에서 더 나은 서비스를 제공해드립니다.";
}
