document.addEventListener('DOMContentLoaded', () => {
  function loadToDoList() {
    const storedList = JSON.parse(localStorage.getItem('todoList'));
    //로컬스토리지에서 todolist에 해당하는 값 불러오기,JSON 문자열을 JavaScript 객체로 변환
    if (storedList) { //로컬스토리지에 항목이 저장되어있다면 조건문 실행
      storedList.forEach(element => { // 저장된 각 항목에 대해 반복문을 실행
        const li = document.createElement("li");
        const text = document.createTextNode(element.text); //텍스트 노드 생성
        li.appendChild(text); // 생성된 텍스트 노드를 리스트 아이템 요소에 추가
        if (element.checked) {
          li.classList.toggle('checked');
        }

        const close = document.createElement("span");
        close.classList.add("close");
        close.appendChild(document.createTextNode("\u00D7"));// 곱셈 기호를(×) 뜻하는 유니코드
        li.appendChild(close);
        
        close.addEventListener('click', function() {
          li.remove();
          saveToDoList(); //로컬스토리지에 저장
        });

        li.addEventListener('click', function() {
          li.classList.toggle('checked');
          saveToDoList(); // 로컬스토리지에 저장
        });

        document.getElementById("myUL").appendChild(li); //리스트 아이템을 ul 요소에 추가
      });
    }
  } 

  function saveToDoList () {
    const todoListItems = document.querySelectorAll('#myUL li');   // ul 요소 내의 모든 li 요소
    const todoList = [];     // 저장할 항목들을 담을 빈 배열을 생성
    todoListItems.forEach(item => {
      todoList.push({
        text: item.firstChild.textContent,
        checked: item.classList.contains('checked')
      });
    }); //객체 형태로 배열에 추가
    localStorage.setItem('todoList', JSON.stringify(todoList));
        // 배열을 JSON 문자열로 변환하여 로컬스토리지에 저장
  }
  
  function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
      alert("내용을 입력하세요!");
      return; //비어있는 값이면 함수종료
    }

    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    li.addEventListener('click', function() {
      li.classList.toggle('checked');
      saveToDoList(); //로컬스토리지에 저장
    });

    const close = document.createElement("span");
    close.classList.add("close");
    close.appendChild(document.createTextNode("\u00D7"));// 곱셈 기호를(×) 뜻하는 유니코드
    li.appendChild(close);

    close.addEventListener('click', function() {
      li.remove();
      saveToDoList(); //로컬스토리지에 저장
    });
    saveToDoList(); //새 항목을 추가한 후에도 로컬스토리지에 저장
  }

  // "추가" 버튼을 클릭하면 이벤트 처리
  const addButton = document.querySelector(".addBtn");
  addButton.addEventListener('click', newElement); //클릭했을때 뉴 엘리먼트 함수 실행

  loadToDoList();
});

// //localStorage를 사용하는 방법을 알아보겠습니다.
//  

// setItem() - key, value 추가
// getItem() - value 읽어 오기
// removeItem() - item 삭제
// clear() - 도메인 내의 localStorage 값 삭제
// length - 전체 item 갯수
// key() - index로 key값 찾기