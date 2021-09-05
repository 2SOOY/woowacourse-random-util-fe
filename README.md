# 우아한테크코스 프리코스 유틸

## 1. 사용법

### 스크립트

1. 스크립트 삽입하기

```index.html
<script src="https://cdn.jsdelivr.net/npm/woowacourse-util/lib/main.js"></script>
<script type="module" src="index.js"></script>
```

- `index.html`에 해당 스크립트 태그를 삽입해주세요.
- 유틸 라이브러리의 경우 실제 작성할 스크립트 이전에 작성해야 합니다.

2. 유틸 사용하기

```js
// example
console.log(WoowaUtil.Random.pickOneInArray([1, 2, 3]));
```

- `script` 태그로 삽입된 경우 전역에 할당되어 `WoowaUtil.[util]` 형태로 사용할 수 있습니다.

### NPM

1. 모듈 다운로드

```sh
npm i woowacourse-util
```

2. 모듈 사용하기

```js
import WoowaUtil from "woowacourse-util";

console.log(WoowaUtil.Random.pickOneInArray([1, 2, 3]));
```

## 2. 유틸 목록

### Random class

1. `Random.pickOneInRange(start, end)`

   - `start <= n <= end`를 만족하는 `1개`의 `n`을 반환
   - 예시
     ```js
     Random.pickOneInRange(1, 10); // 1
     Random.pickOneInRange(1, 10); // 10
     Random.pickOneInRange(1, 10); // 4
     Random.pickOneInRange(1, 10); // 5
     ```

2. `Random.pickOneInArray(array)`

   - 입력된 배열의 요소 중 무작위로 `1개`의 `요소`를 반환
   - 예시
     ```js
     Random.pickOneInArray([1, 3, 10]); // 1
     Random.pickOneInArray([1, 3, 10]); // 10
     Random.pickOneInArray([1, 3, 10]); // 3
     ```

3. `Random.pickSeveralInRange(start, end, count)`

   - `start <= n <= end`를 만족하는 `count`개의 `n`을 배열 형태로 반환
   - 예시
     ```js
     Random.pickSeveralInRange(1, 10, 2); // [1, 2]
     Random.pickSeveralInRange(1, 10, 5); // [1, 10, 7, 8, 5]
     ```

4. `Random.shuffle(array)`
   - 입력된 배열 요소의 순서를 무작위로 섞은 후 반환
   - 예시
     ```js
     Random.shuffle([1, 2, 3, 4, 5]); // [2, 4, 1, 3, 5]
     ```
