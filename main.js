document.addEventListener('DOMContentLoaded', () => {
  function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
      alert("내용을 입력하세요!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    li.addEventListener('click', function() {
      li.classList.toggle('checked');
    });
  }

  // "추가" 버튼 클릭 이벤트 처리
  const addButton = document.querySelector(".addBtn");
  addButton.addEventListener('click', newElement);
});
