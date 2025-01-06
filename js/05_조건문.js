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

/* 
    input 요소에 작성된 겂 얻어오기 : input요소.value
    html 요소에 작성된 내용 얻어오기 : html요소.innerText 
*/

/** 두 수 A,B를 입력 받아 A가 B의 배수가 맞는지 확인 */
function check4() {
    // id가 inputA, inputB인 요소를 얻어와 변수에 저장
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB"); 

    // 1) A, B가 하나라도 입력되지 않을 경우
    // -> "입력되지 않은 값이 존재합니다."

    // "string".length : 문자열의 길이 반환

    // inputA 또는 inputB 중 하나라도 입력되지 않은 경우
    if(inputA.value.length === 0 || inputB.value.length === 0 ) { 
        alert("입력되지 않은 값이 존재합니다.")
        return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
                    // -> 함수를 수행할 수 없는 상태여서 미리 종료
    }

    // 위 if문을 건너 뜀 == 둘 다 입력된 상태

    const v1 = Number(inputA.value);
    const v2 = Number(inputB.value)

    //  2) A가 B보다 작을 경우
    // -> A가 B보다 작습니다.

    if(v1 < v2) {
        alert("A가 B보다 작습니다.");
        return; 
    }

    // 위 if문 건너 뜀 
    // == A,B가 모두 입력됨 + A가 B보다 크거나 같음

    // 3) A가 B보다 클 경우
    // -> 배수 판별 수행

    if(v1 % v2 ===0) { // A가 B의 배수가 맞을 경우
        alert (`${v1}은 ${v2}의 배수가 맞습니다.`);
        return;
    }
    alert (`${v1}은 ${v2}의 배수가 아닙니다.`);
}


function check5() {
    const input5 = document.getElementById("input5")

    // 입력된 값이 없을 경우 
    if(input5.value.length === 0) {
        alert(`숫자를 입력해주세요.`);
        return;
    }

    let result; // 결과 저장용 변수
    switch(Number(input5.value) ) {
        case 3 : result ="3이 입력되었습니다. "; break;
        case 4 : result="입력된 숫자는 4입니다."; break;
        case 5 : result = "5를 입력하셨습니다."; break;
        default : result = "3,4,5 가 아닌 다른 숫자가 입력 되었습니다";  break;
    }
    alert(result);

    /* switch -> if else 문으로 입력 */
    let result2;
    if (Number(input5.value) === 3 ) {
        result2= "3이 입력 되었습니다.";
    } else if (Number(input5.value) === 4 ) {
        result2 = "입력된 숫자는 4 입니다.";
    } else if (Number(input5.value) === 5) {
        result2 = "3,4,5 가 아닌 다른 숫자가 입력 되었습니다";
    }
    alert(result2);
}

// 매개 변수(Parameter)
// - 함수가 호출될 때 전달된 값(전달 인자, Argument)을
// 저장하기 위한 변수

/** switch 문을 이용한 계산기 */
function calc(op) {
    console.log("매개 변수 op 확인 : ", op , typeof op);
    //숫자가 입력되는 input 요소 얻어와 변수에 저장
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    //숫자가 둘 중 하나라도 입력되지 않은 경우 
    if(number1.value.length===0 || number2.value.length === 0 ) {
        alert("숫자를 모두 입력해주세요");
        return; // 함수 종료
    } 
    // number 타입을 입력 받은 값 변경 
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);

    // 전달 받은 매개 변수(op) 값에 따라 서로 다른 연산 수행 
    let result; 

    switch(op) {
        // 전달 받은 매개 변수가 '+' 인 경우
        case '+' : result = n1 + n2; break;
        case '-' : result = n1 - n2; break;
        case '*' : result = n1 * n2; break;
        case '/' : result = n1 / n2; break;
        case '%' : result = n1 % n2; break;
        default : result = "잘못된 연산자"

    }
    // 결과를 #calcResult 요소의 내용으로 출력
    document.getElementById("calcResult").innerText = result;
}

/** 입력 받은 월(달)의 알맞는 계절 출력(break; 관련 예제)  */
function check6() {
    const input6 = document.getElementById("input6") ;

    // 입력된 값이 없을 경우
    if(input6.value.length === 0) {
        alert("월(달)을 입력해주세요");
        return;
    }
    // break(멈추다) : 현재 case 까지만 해석하고 switch 문을 멈추\ㅁ

    // -> break  미작성 시 
    // 모든 구문을 실행

    let result;
    switch(Number(input6.value)) {
        case 3 : result = "봄"; break;
        case 4 : result = "봄"; break;
        case 5 : result = "봄"; break;

        case 6 : result = "여름"; break;
        case 7 : result = "여름"; break;
        case 8 : result = "여름"; break;
        
        case 9 : result = "가을"; break;
        case 10 : result = "가을"; break;
        case 11 : result = "가을"; break;

        case 12 : result = "겨울"; break;
        case  1 : result = "겨울"; break;
        case  2 : result = "겨울"; break;

        default :  result = "잘못입력";
    }
    alert(result);
}