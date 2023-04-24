const countSheep = (num) => {
    let sleepCount = '';
    for (let i=1; i < num +1; i++) {
      sleepCount += `${i} sheep...`
    }
    return sleepCount;
};

module.exports = {countSheep}