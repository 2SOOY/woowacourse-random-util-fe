class Random {
  constructor() {}

  static pickNumberInRange(startInclusive, endInclusive) {
    Random.#validateRange(startInclusive, endInclusive);

    startInclusive = Math.ceil(startInclusive);

    return (
      Math.floor(Math.random() * (endInclusive + 1 - startInclusive)) +
      startInclusive
    );
  }

  static #isNumber(value) {
    return typeof value === "number";
  }

  static #validateRange(startInclusive, endInclusive) {
    if (!Random.#isNumber(startInclusive) || !Random.#isNumber(endInclusive)) {
      throw new Error(`인자는 숫자만 가능합니다.`);
    }

    if (startInclusive < Number.MIN_SAFE_INTEGER) {
      throw new Error(
        `최소값 정수 범위를 미달하였습니다. 더 높은 최소 정수값을 입력해주세요`,
      );
    }

    if (endInclusive > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        `최대값 정수 범위를 초과하였습니다. 더 낮은 최대 정수값 입력해주세요`,
      );
    }

    if (startInclusive > endInclusive) {
      throw new Error(
        `최소값 ${startInclusive}가 최대값 ${endInclusive}보다 클 수 없습니다.`,
      );
    }
  }

  static pickNumberInList(array) {
    Random.#validateEmptyArray(array);

    return array[Random.pickNumberInRange(0, array.length - 1)];
  }

  static #validateEmptyArray(array) {
    if (!Array.isArray(array)) {
      throw new Error(`인자는 배열만 가능합니다.`);
    }

    if (!array.every((v) => Random.#isNumber(v))) {
      throw new Error(`배열의 원소는 숫자만 가능합니다.`);
    }

    if (array.length === 0) {
      throw new Error(`입력한 배열은 최소 1개 이상의 원소를 가져야 합니다.`);
    }
  }

  static pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    Random.#validateIntsRange(startInclusive, endInclusive, count);

    const result = [];

    for (let i = startInclusive; i <= endInclusive; i++) {
      result.push(i);
    }

    return Random.shuffle(result).slice(0, count);
  }

  static #validateIntsRange(startInclusive, endInclusive, count) {
    if (
      !Random.#isNumber(startInclusive) ||
      !Random.#isNumber(endInclusive) ||
      !Random.#isNumber(count)
    ) {
      throw new Error(`인자 값은 숫자만 가능합니다.`);
    }

    if (count < 0) {
      throw new Error(`count: ${count}는 0보다 작을 수 없습니다.`);
    }

    if (endInclusive - startInclusive + 1 < count) {
      throw new Error(
        `count: ${count}가 (endInclusive - startInclusive): ${
          endInclusive - startInclusive
        } 보다 같거나 작아야합니다.`,
      );
    }
  }

  static shuffle(array) {
    Random.#validateEmptyArray(array);

    return array.sort(() => Math.random() - 0.5);
  }
}

export default Random;
