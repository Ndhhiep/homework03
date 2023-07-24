const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wait = async function (second) {
  let wait = new Promise(async (resolover, reject) => {
    setTimeout(() => {
      resolover();
    }, second * 1000);
  });
  return wait;
};

let name;
let age;
let size;
let monney;

async function inputName() {
  return new Promise((res, rej) => {
    rl.question("Nhập tên: ", (answer) => {
      name = answer;
      res();
      console.log(`Bạn tên: ${name}`);
    });
  });
}

async function inputAge() {
  return new Promise((res, rej) => {
    rl.question("Nhập tuổi: ", (answer) => {
      age = answer;
      res();
      console.log(`Bạn: ${age} tuổi`);
    });
  });
}

let expect = 0;
async function inputSize() {
  return new Promise((res, rej) => {
    rl.question("Nhập size: ", (answer) => {
      size = answer;
      if (size == "S") {
        expect = 121000;
      } else if (size == "M") {
        expect == 237000;
      } else if (size == "L") {
        expect == 237000;
      }
      res();
      console.log(`Bánh size: ${size}`);
    });
  });
}

async function askMomForMoney() {
  return new Promise((res, rej) => {
    rl.question("Xin tiền má: ", (answer) => {
      monney = answer;
      console.log(`Tiền má cho là: ${monney}`);
      if (monney < expect) {
        rej();
      } else {
        res();
      }
    });
  });
}

async function goToMarket() {
  console.log("Mua nguyên liệu");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Đi về");
    resolover();
  });
}

async function prepare() {
  await wait(2);
  console.log("Sơ chế");
  console.log("1. Tách trứng");
  console.log("2. Ray bột");
  console.log("3. Chuẩn bị gia vị");
  console.log("4. Rửa rau");
  await wait(5);
  let temp = new Promise((resolover, reject) => {
    console.log("Sơ chế đã xong");
    resolover();
  });
}

async function cook() {
  await wait(2);
  async function makePowder() {
    console.log("Làm bột");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Bột đã xong");
      resolover();
    });
    return temp;
  }
  async function boilShrimp() {
    console.log("Luộc tôm");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Tôm đã xong");
      resolover();
    });
    return temp;
  }
  async function fryMeat() {
    console.log("Xào thịt");
    await wait(5);
    let temp = new Promise((resolover, reject) => {
      console.log("Thịt xong ");
      resolover();
    });
    return temp;
  }
  await Promise.all([makePowder(), boilShrimp(), fryMeat()]);
}

async function cookCake() {
  await wait(2);
  console.log("Đổ bánh vào chảo");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Đổ bánh xong ");
    resolover();
  });
}
async function fryCake() {
  await wait(2);
  console.log("Chiên bánh");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Chiên bánh xong ");
    resolover();
  });
}
async function mixSauce() {
  await wait(2);
  console.log("Pha nước mắm");
  await wait(2);
  let temp = new Promise((resolover, reject) => {
    console.log("Pha nước mắm xong ");
    resolover();
  });
}

async function serveCake() {
  await wait(2);
  async function takeOnDish() {
    console.log("Dọn bánh ra dĩa");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Dọn bánh xong ");
      resolover();
    });
  }
  async function takeVegOnDish() {
    console.log("Dọn rau ra dĩa");
    await wait(2);
    let temp = new Promise((resolover, reject) => {
      console.log("Dọn rau xong ");
      resolover();
    });
  }
  await Promise.all([takeOnDish(), takeVegOnDish()]);
}

async function main() {
  await inputName();
  await inputAge();
  await inputSize();
  await askMomForMoney()
    .then(async () => {
      await goToMarket();
      await prepare();
      await cook();
      await cookCake();
      await fryCake();
      await mixSauce();
      await serveCake();
      console.log("Ăn thôi !!!");
    })
    .catch(async () => {
      console.log("Sủiiiiii!");
    });
}

main();
