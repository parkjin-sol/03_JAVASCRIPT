function check1() {
    const stopNumber 
     = Number(prompt("1~20 사이 멈추고 싶은 숫자 입력"));
    
     for(let num =1 ; num <=20 ; num ++) {
        console.log(num);

        if (num == stopNumber) { // nuim 과 입력 받은 수가 같을때 
            break;
        } // 반복 멈춤 (for문 종료)
     }
}

/* 무한 반복 멈추기 */
function check2() {

    let num = 1;
    while(true) { // 조건식 항상 true -> 계속 반복
        // 조건식이 true일 경우 반복할 코드

        console.log(num++);

        if(num === 100) {
            break;
        }
    }
}

function check3() {

    // prompt 에 입력 될떄 까지 숫자를 입력받아 
    // 합계 구하기
    let  sum = 0;

    while(true) {
        const value = prompt("숫자 입력(취소 시 종료)")
        // prompt 취소 클릭 === null
        if(value === null) {
            break; 
        }

        // if 수행 x === 확인 클릭
        sum += Number(value);
    } // while end 
    alert(`합계 : ${sum}`);
}

/* 중첩 반복문에서 break 사용 (분기문 작용 범위) */
function check4() {
    for( let row = 1  ; row <= 3  ; row++  ) {

        let result = "" ;
        for (let col=1 ; col<=5 ; col++) {
            result += col;

            if(col === 4) { // 4일때 멈춤
                break; // 안쪽 for 문에 작용
            }
        }

        console.log(result);
        console.log("-----");

        if(row === 2) {
            break; // 바깥쪽 for문에 작용
        }
    }
}

/* continue */

function check5() {
    //1부터 20까지 1씩 증가하는 반복문을 이용해서 숫자 출력
    // 단, 3과 5의 배수는 건너뛰기
    for(let num=1 ; num<=20 ; num++) {
        // 1) continue 사용 x 
        //     if(num % 3 !== 0 && num % 5 !== 0 )
        //     console.log(num);
        // }
        // 1) continue 사용 x0 
        if(num % 3 === 0  || num % 5 === 0 ) {
            continue;
        }
    }
    console.log(num);
}

/* continue 확인하기2 */

/* 
    - 123456789 를 5줄 출력 
    단, 1번줄 출력시 1 제외
    단, 2번줄 출력시 12 제외
    단, 3번줄 출력시 3 제외
    단, 4번줄 출력시 4 제외
    단, 5번줄 출력시 5 제외
*/
function check6() {
    for( let row = 1 ; row <= 5  ; row++  ) {
        let result ="";
        for ( row = 1 ;  row<= 9 ; row ++ ) {
            if( col ===1 ) {
                continue;
            }
            result += col;
        }
        console.log(result);
    }
};

//-------------------------------------------------------------------------------------
/** UP & DOWN 게임 */
function startGame() {
    // Math.floor(실수) -> 소수점 내림 처리(정수로 변함)
    // Math.random() -> 0.0 ~ 1.0 사이 난수 발생 (1.0 미만)

    // 맞춰야하는 정답 (1~200 사이 난수) 생성
    const answer = Math.floor(Math.random() * 200 + 1);
    console.log("정답 : ", answer); // 디버깅용, 필요 없으면 지워도 됨.

    let count = 0; // 시도 횟수 초기화

    while (true) {
        // 사용자 입력받기
        const userInput = prompt("숫자를 입력하세요 (1~200) 또는 '종료'를 입력하세요:");

        // 종료 조건
        if (userInput.toLowerCase() === "종료") {
            console.log("게임을 종료합니다.");
            break;
        }

        // 입력값을 숫자로 변환
        const userNumber = Number(userInput);

        // 유효성 검사
        if (isNaN(userNumber) || userNumber < 1 || userNumber > 200) {
            console.log("1부터 200 사이의 숫자를 입력해주세요!");
            continue;
        }

        // 시도 횟수 증가
        count++;

        // 정답 비교
        if (userNumber === answer) {
            console.log(`축하합니다! 정답은 ${answer}입니다!`);
            console.log(`총 ${count}번 만에 맞추셨습니다.`);
            break; // 정답을 맞추면 게임 종료
        } else if (userNumber < answer) {
            console.log("Up! 더 큰 숫자를 입력하세요.");
        } else {
            console.log("Down! 더 작은 숫자를 입력하세요.");
        }
    }
}