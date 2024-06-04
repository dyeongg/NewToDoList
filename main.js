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

    const close = document.createElement("span");
    close.classList.add("close");
    close.appendChild(document.createTextNode("\u00D7"));
    li.appendChild(close);

    close.addEventListener('click', function() {
      li.remove();
    });
  }

  // "추가" 버튼 클릭 이벤트 처리
  const addButton = document.querySelector(".addBtn");
  addButton.addEventListener('click', newElement);
});