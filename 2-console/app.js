console.log('hello');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
// if the first parameter is true then print the second parameter
console.assert(2 === 3, 'not same');
console.assert(2 === 3, 'same');

// print obejct
const student = { name: 'Jae', age: 20 };
console.log(student);
console.table(student);
console.dir(student);

// 중첩된 오브젝트를 컨트롤해서 프린트 할 수 있음
const student1 = { name: 'Jae', age: 20, school: { name: 'Lwtech' } };
console.dir(student1, { showHidden: true, colors: false, depth: 1 });
console.dir(student1, { showHidden: true, colors: false, depth: 0 });

// measuring time: 성능을 확인할때 이용하면 좋음
// it mush be the same lable('for loop')
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting: 내가 호출한 횟수가 몇번 호출되는지는 확인할때
function a() {
  console.count('a function');
}
a();
// countReset: initial count
console.countReset('a function');
a();

// trace: 함수가 어떻게 호출되었는지, 누가 호출했는지 확인할때
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();
