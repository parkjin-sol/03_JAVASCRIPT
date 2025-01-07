/** 콘솔에 1234 출력하기 */
function check1() {
    
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);

    console.log("-------------------------------");

    /* for문 버전 */

    // num 값이 1부터 5까지 1씩 증가하는 동안 반복
    for( let num = 1;  num <=5 ; num++ ) {
        // 초기식 -> let num = 1 
        // -> 1이 저장된 변수 num을 선언

        // [조건식] num <= 5
        // -> num 변수에 저장된 값이 5이하면 true,
        //      -> 반복 0 == for문 {} 내부 코드를 수행해아 

        // -> num 변수에 저장된 값이 5이하가 아니면  false,
        //      -> 반복 0 == for문 {} 내부 코드를 수행하지 말아라
 
        // [증감식] num++ 
        //  -> num 변수에 저장된 값을  반복 할 때 마다1 증가
         //      -> 
    }
}

/** 콘솔에 1부터 10까지 1씩 증가하며 출력하기 */
function check2() {
    for( let num = 1 ; num <= 10 ; num++ ) {
        console.log(num);
    }
}

/** 콘솔에 5부터 13까지 1씩 증가하며 출력하기 */
function check3() {
    for( let num = 5 ;  num < 14 ; num++ ) {
        console.log(num);
    }
}

/** 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check4() {
    
    let result =""; // 결과를 저장할 변수에 ""(빈칸) 대입

    for( let num = 1 ;  num <= 7 ; num++ ) {
        result += num; // result = result + num;
    }
    
    console.log(result); // '1234567
}

/** 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check5() {
    
    let result =""; // 결과를 저장할 변수에 ""(빈칸) 대입 (string)

    // let result; 
    // result 에 ""(빈칸)을 대입하는 이유
    // -> 변수 선언 시 아무런 값도 대입하지 않으면 undefined 
    //      -> undefined는 산술 연산의 대상이 될 수 없음! 
    //          -> 산술 연산을 수행하면 NaN(Not a Number ) 결과가 반환됨  

    for( let num = 4 ;  num <= 11 ; num++ ) {
        result += num; // result = result + num;
    }
    
    console.log(result); // '1234567
}

/* 1부터 10까지 1씩 증가한 숫자의 합 구하기 */
// check4, check5와 유사하지만 저장 타입에 따라서 결과가 달라짐.

function check6() {

    let sum = 0; // 합계를 저장할 변수를 선언, 0을 대입
                        // -> 더하거나 뺄때 영향이 없는 숫자 0 대입

    for( let num = 1; num<=10; num++) {
        sum += num;
    }
    console.log(sum);

}

/** 입력 받은 값 사이 정수 값들의 합 구하기 */
function check7() {

    // 모든 값 입력되어있고 
    // 입력 1이 입력 2보다 작다고 가정
    const a = Number(document.getElementById("input7a").value);
    const b = Number(document.getElementById("input7b").value);

    let sum = 0;

    const start = Math.min(a, b);
    const end = Math.max(a, b);

    for (let num = start; num <= end; num++) {
        sum += num;
    }

    alert(`${a}부터 ${b} 사이 정수 합 : ${sum}`); 
  
}
/** 1부터 10까지 2씩 증가한 숫자 출력 + 합계 구하기 */

function check8() {

    let sum = 0 ; // 합계

    for ( let num=1 ; num<=10 ; num += 2 ) {
        console.log(num);
        sum += num;
    }

    console.log("합계 : " , sum) ;
}

/** 3부터 30까지 3의 배수만 출력하기  */
function check9() {
    // 1 ) 증감식 변경
    let result = "";
    for(let num = 3; num <= 30 ; num+=3 ) {
        result += num + " ";
    }  
    console.log(result) ;

    // 2) for 문 + if 문
    let result2 = ""
    for(let num = 2 ; num <= 30 ; num++ ) { // num 1씩 증가
        if(num % 3 == 0) { // 3으로 나웠을 때 나머지 0 == 3의 배수
            result2 += num + " ";
        }
    }
    console.log(result2) ;
}

/** 입력 한 숫자 범위 내 지정한 숫자의 배수를 출력, 합계 구하기  */
function check10() {

    const start = Number(document.getElementById("start10").value);
    const end = Number(document.getElementById("end10").value);
    const multiple = Number(document.getElementById("multiple10").value);

    let result= ""; //배수 목록
    let sum = 0;

    for (let num = start ; num <= end ; num++) {

        // start 부터 end 까지 1씩 증가하는 num dk 
        // multiple 로 나눴을 때  나머지가 0인 경우
        // == num이 multiple의 배수인 경우
        if (num % multiple === 0 ) {
            result += num + " "; // 출력 문자열 누적
            sum += num; // 합계 누적
        }
    }

    console.log(`${result}`);
    console.log("합계 : ", sum)
}

/** 구구단 2단 출력하기 */
function check12() {
    // - 2단에 곱해지는 수가 1~9까지 1씩 증가
    // - 곱셈 결과가 1~9까지 1씩 증가한 수에 2를 곱한 값 
    for( let num = 1 ; num <= 9 ; num++ ) {
        console.log(`2 x ${num} = ${num * 2}`) ;
    }
}

/** 입력 받은 단의 구구단 출력하기 */

function check12() {
    const dan =document.getElementById("dan12");

    if( dan.value.length === 0 ) {
        alert("단을 입력해주세요");
        return
    }

    const val = Number(dan.value) ;

    if( val <= 1 || val >= 10 ) {
        alert("2~9단 사이만 입력 해주세요.");
        return
    }
    
    for ( let num=1 ; num <= 9  ; num++) {
        console.log( `${val} x ${num} = ${val * num} `)

    }



}

/** 10부터 1까지 1씩 감소하며 출력하기 */ 
function check13() {

    // 감소 형태 반복문은 조건식을 조금 더 생각해야한다!
    for(let num = 10 ; num >= 1 ; num-- ) {
        console.log(num); 
    }
}
/** 20부터 3까지 3씩 감소하여 출력하기 */

function check14() {
    for(let num = 20 ; num >=3 ; num-=3) {
        console.log(num);
    }
} 
/** 구구단 3단 거꾸로 출력하기 */
function check15() {
    for( let num = 9 ; num >=1 ; num-- ) {
        console.log(`3 x ${num} = ${num * 3}`); 
    }
}
/** 5의 배수마다 @, 10의 배수마다 줄바꿈하면서 출력하기(1~30) */
function check16() {
    let result = "";
    for( let num = 1 ; num <= 30 ; num++) {
        if (num % 5 === 0 ) { // 5의 배수
            result += "@";
        } else {
            result += num + " ";
        }

        // 10의 배수마다 줄바꿈 (따로 생각해야하는 조건)
        if(num % 10 === 0 ) {
            result += "<br>"; // 줄바꿈 태그

        }
    }
    // #result 16에 출력 (HTML 해석)
    document.getElementById("result16").innerHTML = result;

}


/* 
    654321
    654321
    654321
*/
function check19() {
    let result = ""; // 최종 결과를 저장할 변수

    // 행 반복 (1~5행)
    for (let row = 1; row <= 5; row++) {
        // 열 반복 (각 행의 열 개수는 행 번호와 동일)
        for (let col = 1; col <= row; col++) {
            result += col; // 열 번호 추가
        }
        result += "\n"; // 한 행이 끝날 때 줄바꿈 추가
    }

    console.log(result); // 콘솔에 출력
}

function check20() {
    //row
    for( let row = 1 ; row <= 5 ; row++) {
        //
        for (let col = 1 ; col <= row; col++) {

        }
    }
}

/* 
****
***
**
*
*/

function check24() {
    let result = ""; // 결과를 저장할 변수

    // 행 반복 (4행)
    for (let row = 4; row >= 1; row--) {
        // 열 반복 (열의 개수는 현재 행 번호와 동일)
        for (let col = 1; col <= row; col++) {
            result += "*"; // 별 추가
        }
        result += "\n"; // 한 행이 끝날 때 줄바꿈 추가
    }

    console.log(result); // 콘솔에 출력
}
// 다른 방법
console.log("-----------------------------------");

//
for (let row = 1 ; row <= 4 ; row++) {
    let result =""
    for (let col = 1 ; col <= 5 ; col++) {
        result += "*";
    }
    console.log(result)
}

/** prompt를 이용해서 입력 받은 숫자 모두 더하기 */
function check28() {
    let sum = 0; // 합계 누적용 변수
    let val; // prompt에서 입력된 값을 저장할 변수

    while (true) {
        val = prompt("숫자를 입력하세요 (취소를 클릭하면 종료됩니다)");

        // 입력이 취소된 경우 (null 반환)
        if (val === null) {
            break; // 반복문 종료
        }

        // 숫자를 누적
        sum += Number(val);
    }

    // 최종 합계 출력
    alert(`합계: ${sum}`);
}

function check29() {
    const gimbap = 4000;
    const  ramen = 4500;
    const donkkaseu = 9000;

    //메뉴별 주문 개수를 저장할 카운트 변수 선언
    let gCount = 0;
    let rCount = 0;
    let dCount= 0;

    // pronpt에 저장된 값을 저장할 변수 선언
    let input;

    // input 변수에 저장된 값이 null이 아닐 경우 반복 
    // (undefined랑 null은 다름!!)
    while( input !=- null) {

        // prompt 에 반환되는 값 종류: 
        // "1", "2", "3", 매뉴 없는 숫자 (잘못된 입력), null(취소)
        input = prompt("메뉴 번호 입력(1. 김밥 2. 라면 3. 돈까스")
        
        switch(input) {
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문완료!"); break;
            default : alert("잘못 입력 하셨습니다")
        }
    } // while end
    // inner HTML 사용 필요 
    // 주문된 메뉴만 출력 (count 변수에 저장된 값이 0 초과)

    let outputHtml = ' ';  //출력할 html 코드가 포함된 문자열 저장

    if(gCount > 0) { // 김밥을 주문한 경우
        outputHtml +=`<li>김밥(${gCount}개) : ${gimbap * gCount}</li>`
     }
    if(rCount > 0) { // 라면을 주문한 경우
        outputHtml +=`<li>라면(${rCount}개) : ${ramen * rCount}</li>`
    }
    if(dCount > 0) { // 돈까스을 주문한 경우
        outputHtml +=`<li>돈까스(${dCount}개) : ${donkkaseu * dCount}</li>`
    }

    /*  합계 */
    const sum = (gimbap * gCount) + (ramen * rCount) + (donkkaseu & dCount); 
    outputHtml += `<li>합계 : ${sum} 원</li>`
    document.getElementById("result29").innerHTML = outputHtml;
}