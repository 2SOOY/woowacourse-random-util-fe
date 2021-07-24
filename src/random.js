class Random {
  static randomInt(startInclusive, endExclusive) {
    Random.#validateRange(startInclusive, endExclusive);

    startInclusive = Math.ceil(startInclusive);

    return (
      Math.floor(Math.random() * (endExclusive - startInclusive)) +
      startInclusive
    );
  }

  static #validateRange(startInclusive, endExclusive) {
    if (startInclusive >= endExclusive) {
      throw new Error(
        `startInclusive: ${startInclusive}가 endExclusive: ${endExclusive}보다 같거나 클 수 없습니다.`,
      );
    }
  }

  static randomPositive(startInclusive, endExclusive) {
    Random.#validateRange(startInclusive, endExclusive);
    Random.#validatePositiveRange(startInclusive, endExclusive);

    startInclusive = Math.ceil(startInclusive);

    return (
      Math.floor(Math.random() * (endExclusive - startInclusive)) +
      startInclusive
    );
  }

  static #validatePositiveRange(startInclusive, endExclusive) {
    if (startInclusive < 0 || endExclusive < 0) {
      throw new IllegalArgumentException(
        `startInclusive: ${startInclusive}, endExclusive: ${endExclusive}는 음수일 수 없습니다.`,
      );
    }
  }

  static notDuplicatedRandomInts(startInclusive, endExclusive, count) {
    Random.#validateIntsRange(startInclusive, endExclusive, count);

    const randomInts = [];

    for (let i = startInclusive; i < endExclusive; i++) {
      randomInts.push(i);
    }

    return Random.shuffle(randomInts).slice(0, count);
  }

  static #validateIntsRange(startInclusive, endExclusive, count) {
    if (count < 0) {
      throw new Error(`count: ${count}는 보다 작을 수 없습니다.`);
    }

    if (endExclusive - startInclusive < count) {
      throw new Error(
        `count: ${count}가 (endExclusive - startInclusive): ${
          endExclusive - startInclusive
        } 보다 같거나 작아야합니다.`,
      );
    }
  }

  static shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}

export default Random;
