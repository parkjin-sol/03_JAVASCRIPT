/* 전달 인자, 매개 변수 확인 */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

/** 전달 받은 값이 양수/음수/0인지 판별해서 출력 
 * @param num : 전달 받은 숫자
*/
function testFn1(num) {
    let str = "";

    if(num === 0) {
        str = "0"
    } else if (num > 0) {
        str = "양수";
    } else {
        ste = "음수";
    }
    
    alert(`${num}은/는 ${str}입니다`);
};

/* #btn1이 클릭 되었을 때 */
btn1.addEventListener("click", function() {
    //#input1인 요소에 작성된 값을 얻어와 number 타입으로 변화
    const val = Number(input1.value);

    // 함수 호출 (입력 값 전달)
    testFn1(val); 
});

/** 전달 받은 배열 내 요소의 합 출력하기 
 * @param arr : number만 저장된 1차원 배열
*/
function sumArr(arr) {
    let sum = 0;
    for(let num of arr) {
        // arr 배열에 저장된 요소를
        // 0번 부터 순서대로 하나씩 꺼내 num에 저장
        sum += num;
    } 
    alert(`합계 : ${sum}`);
}

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function() {
    const inputs = document.querySelectorAll("[name = input2]")  ;

    // input에 작성된 값을 얻어와 배열 하나 생성
    const arr = []; // 빈 배열

    for(let input of inputs) {
        // 배열.push(값) : 값을 마지막 요소로 추가
        arr.push( Number(input.value)); 
    }
    //함수 호출
    sumArr(arr);
});

/** 배수 확인 함수
 * @param a : 비교(기준) 되는 수 (큰 수) 
 * @param b : 확인해야하는 수 (작은 수)
 */
function multipleFn(a, b) {
    let str = "";

    if(a % b === 0) {
        str = "맞습니다";
    } else {
        str = "아닙니다";
    }
    alert(`${a}은/는 ${b}의 배수가 ${str} `);
}

    const btn3 = document.querySelector("#btn3");
    btn3.addEventListener("click", function() {
        const inputs = document.querySelectorAll("[name = input3]");

        const val1 = Number(inputs[0].value);
        const val2 = Number(inputs[1].value);

    multipleFn(val1, val2);
});

/* return 확인 1 */

/** num x 제곱 값을 반환하는 함수 
 *  @param num : 곱해질 정수
 *  @param x : 지수
 *  @return : num의 x 제곱
*/
function pow(num, x) {

    // 곱셉, 나눗셈 시 영향 없는 수  === 1
    let result = 1;
    for(let i=0 ; i <x ; i++) {
        result *= num; //result에 num을 계속 곱함
    };
    
    return result; // 함수 종료 + 호출한 곳으로 result 가지고 돌아감
};
/** 제곱의 결과를 문자열로 변환해서 반환하는 함수
 * @param num
 * @param x
 * @param result
 * @return 
 */
function createStr(num, x, result) {
    return `${num}의 ${x}제곱은 ${result} 입니다`;
}

// 버튼 클릭 시 prompt 이용해서 정수, 지수 입력 받아 출력
const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", function() {
    const num = Number(prompt("정수입력"))  ;
    const x = Number(prompt("지수 입력"))  ;

    alert( createStr(num, x, pow(num, x))) ; 
})

/** prompt에 입력된 값을 숫자 배열로 바꿔서 반환하는 함구
 * @param num : 입력 받을 수의 개수
 * @return arr : 입력 받은 수가 저장된 배열
*/
function createArray(num) {
    const arr = [];

    for(let i = 0 ; i<num ; i++) {
       const val =  Number(prompt(`${i}번째 인덱스에 대입할 값`))
    }
    return arr;
}

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function() {

    const arr = createArray(5);

    sumArr(arr);

});

/* 함수를 반환하는 함수 */
function createCounter() {

    let count = 0;

    const fn = function() {
        count++
        return count
    }
    return fn;
    // 테스트 
    // console.log(fn());
    // console.log(fn());
    // console.log(fn());
}

const counter = createCounter();

const btn6 =document.querySelector("#btn6");
btn6 

/* Closure(클로저) 
    - 외부 함수에서 
      종료된 내부 함수에 선언된 변수를 사용하는 기술

    특징 1 : 데이터 은닉(preivate)
    - 외부에서 직접 접근할 수 없는 상태의 변수를 사용하는 기술

    특징 2 : 상태 유지
    - 외부에서 함수를 수행한 후에도 
       내부 함수의 변수 값이 변한 상태로 유지됨
*/

const btn7 = document.querySelector("#btn7");

btn7.addEventListener("click", function() {

    const resultFn = testFn7( function(a, b) {
        return a + b 
    });
    console.log("resultFn(3)", resultFn(3) );
});

function testFn7(otherFn) {
    return function(num) {
        return otherFn(10,20) * num;
    };
};

/* 화살표 함수 */
const arrows = document.querySelectorAll(".arrow");

arrows[0].addEventListener("click", () => {
    const sumFn = (a, b, c) => {
        return a + b + c;
    }
    alert(sumFn(50, 99 ,1234));
} );

// 매개 변수가 1개인 경우
arrows[1].addEventListener("click", () => {

    // 2제곱 반환
    const square = (num) => { // () 생략
        return num * num; 
    }
    alert(square(999));
});

// {} 내 코드가 1줄만 작성된 경우
arrows[2].addEventListener("click", () => {
    const print = str => console.log(str); // () , {} 생략가능
    print("안녕하세요?");

    const dounbleFn = num => num * 2 ; // return, {} 다 생략가능
    
    print( dounbleFn(3) ); // 6
});

// object 타입을 return 하는 경우
arrows[3].addEventListener("click", () => {
    // 배열 반환
    const fn1 = () => [1,2,3];
    console.log(fn1());

    // * { k:v, k:v } === JS 객체

// 객체 반환( return , {} 생략 시 구문 오류 발생! )
const fn2 = () =>{return {   name: "홍길동" , age : 20 }};
console.log(fn2())
});

/*  function() {}, () => {} 차이점  */
document.querySelector("#btn8").addEventListener("click", function() {
    console.log(this); // 이벤트가 발생한 요소
});

document.querySelector("#btn9").addEventListener("click", () => {
    console.log(this); // == window 객체

    /* window 객체란?
        - 창(브라우저) 자체를 나타내는 객체

        - 창(브라우저) 관련 기능을 제공(alert, prompt, setTimleiut, setInterval, open 등 ... )
    */
});

/* 즉시 실행 함수  */
const str = "A";   // 전역 변수
console.log(str);
(function(){
    const str = "B" // {} 내 지역 변수
    console.log(str);
})();

