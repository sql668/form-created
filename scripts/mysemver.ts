

function* walk (version) {
  let part = '';
  let terminals = ['.', '-'];
  for (let i = 0; i < version.length; i++) {
    if (terminals.includes(version[i])) {
      yield part;
      part = '';
    } else {
      part += version[i];
    }
  }
  if (part) {
    yield part;
  }
}

function isNumeric (str) {
  return /^\d+$/.test(str);
}

function compareVersion (a, b) {
  if (isNumeric(a) && isNumeric(b)) {
    return Number(a) - Number(b);
  } else {
    // 特殊版本号 alpha、beta、stable
    const mp = {
      alpha: 1,
      beta: 2,
      stable: 3,
    };
    return mp[a] - mp[b];
  }
}

// versionA > versionB 返回 1，versionA < versionB 返回 -1,相等返回 0
export function compare (versionA, versionB) {
  const iteratorA = walk(versionA);
  const iteratorB = walk(versionB);
  let valueA = iteratorA.next();
  let valueB = iteratorB.next();
  while (!valueA.done && !valueB.done) {
    const result = compareVersion(valueA.value, valueB.value);
    if (result != 0) {
      return result;
    } else {
      valueA = iteratorA.next();
      valueB = iteratorB.next();
    }
  }
  return 0;
}

console.log(compare("0.0.1", "0.0.1-beta.6"))