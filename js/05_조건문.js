/** if 예제 - 양수인지 검사 */
function check1() {
    // id가 "input1"인 요소를 얻어와 in1 상수에 저장
    const in1 = document.getElementById("input1");

    // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여 
    // val 변수에 저장
    const val = Number(in1.value); 
    //양수가 맞는지 검사 
    if(val > 0) {
        //조건식이 true인 경우 수행할 코드;

        alert(`${val} 은/는 양수입니다.`); 
        // alert : 브라우저 알림창 띄우기
    }
    // 양수가 아닌 경우 
    if( val <= 0) {
        alert(`${val} 은/는 양수가 아닙니다.`);
    }
}
/** 1~ 100 사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2() {

    // 난수 발생 : Math.random()
    // 0.0 <= 난수 < 1.0

    // 1 ~ 100 사이 난수 발생
    // Math.random() -> 0.0 <= 난수 < 1.0
    // Math.random() * 100 -> 0.0 * 100 <= 난수 < 1.0 * 100
    //                                   -> 0.0 <= 난수 * 100 < 100.0
     // Math.random() * 100 + 1 -> 1.0 <= 난수 + 100 + 1  < 101 
    // 내림 처림 (소수점 없애기 ) : Math.floor(실수);

    // Math.floor(Math.random() *100 + 1) -> 1 <= 난수 < 101 
    const randomNumber = Math.floor(Math.random()  *100 + 1);

    //발생된 난수가 홀수 인지 검사 
    if( randomNumber % 2 === 1) {
        alert(`${randomNumber}은/는 [홀수 😊] 입니다]`)
    }  
    else { // 홀수가 아닌 경우 == 짝수인 경우 
        alert(`${randomNumber}은/는 [짝수 😁] 입니다]`)  
    } 
 }

function check3() {
    const input3 = document.getElementById('input3');
    const val = Number(input3.value);

    let result; // 결과를 저장할 변수 선언 (현재 undefined)

    // 양수 판별
    if(val > 0) {
        result = "양수";
    }
    // 음수 판별
    else if(val < 0) {
        result = "음수";
    }
    // 양수, 음수도 아닌 경우
    else {
        result = "0";
    }

    // if / else if / else에 모두 resuly 값 대입 코드 작성
    // -> 무조건 result에는 값이 대입되도록 되어있다!!

    alert(`${val}은/는 ${result}입니다.`)
}

function ageCheck() {
     const val = Number(inputAge.value);
     const child = "어린이"
     const youth = "청소년"
     const adult ="성인"
     const error = "잘못된 입력"
     
    let result;
     if (val >= 0 && val <=13) {
        result = child;
     }
     else if (val >= 14 && val <=19) {
        result = youth
     }
     else if (val >= 20 && val <= 120 ) {
        result = adult
     }
     else (
        result= error
     )
     alert(`${val}은/는 ${result}입니다.`);
}

function ageCheck2() {

    const inputAge2 = document.getElementById("inputAge2");
    const age = Number(inputAge2.value)

    let result; //결과 저장용 변수

    // 잘못 입력된 경우
    if (age < 0 || age > 120) {
        result = "잘못 입력 하셨습니다.";
    } else if (age <= 13) {
        result = "어린이";
    }  else if (age <= 19) {
        result = " 청소년"
    } else {
        result = "성인";
    }
    alert(result);
}