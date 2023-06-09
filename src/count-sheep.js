// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = (num) => {
    let sleepCount = '';
    for (let i=1; i < num +1; i++) {
      sleepCount += `${i} sheep...`
    }
    return sleepCount;
};

module.exports = {countSheep}