function createTable() {
    // 입력값 가져오기
    const startInput = document.getElementById("start");
    const endInput = document.getElementById("end");

    // 시작 단과 종료 단
    const start = Number(startInput.value);
    const end = Number(endInput.value);

    // 테이블 요소 가져오기
    const thead = document.getElementById("thead");
    const tbody = document.getElementById("tbody");

    // 기존에 남아있던 표를 삭제하는 작업
    thead.innerHTML = "";
    tbody.innerHTML = "";


    if (start <= 0 || end <= 0) {
        alert("1 이상의 수만 입력해주세요.");
        return;
    }
    if (start > end) {
        alert("시작 단이 종료 단보다 클 수 없습니다.");
        return;
    }

    // 시작 또는 종료 단이 입력되지 않은 경우
    // -> alert("시작/종료 단을 입력해주세요. ")
if (document.getElementById("start").value.length === 0 || document.getElementById("end").value.length === 0) {
    alert("시작/종료 단을 입력해주세요.");
    return; // 함수 종료
}

  // 테이블 생성
  let output1 = "";

  // 테이블 헤더 생성
  output1 += "<tr>";
  for (let dan = start; dan <= end; dan++) {
      output1 += `<th>${dan}단</th>`;
  }
  output1 += "</tr>";

  // 테이블 바디 생성
  for (let num = 1; num <= 9; num++) {
      output1 += "<tr>";
      for (let dan = start; dan <= end; dan++) {
          output1 += `<td>${dan} x ${num} = ${dan * num}</td>`;
      }
      output1 += "</tr>";
  }

  // 테이블 출력
  document.getElementById("thead").innerHTML = ""; // 기존 헤더 삭제
  document.getElementById("tbody").innerHTML = output1; // 새 테이블 삽입

  
}