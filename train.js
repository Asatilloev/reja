// Task - A =========================================
function countLetter(harf, soz) {     // harf va so'zni parametr qilib qabul qiladigan funksiya tuzamiz
  return soz;
}

const a = countLetter("e", "engineer").split(""); // 7-mavzu Arraylarning methodlaridan split() methodidan foydalanamiz bu - so'zni harflarini alohida indexlarga ajratib beradi

// for loopidan foydalanib harf nechta borligini topamiz
let count = 0;
for (let i = 0; i < a.length; i++) {   // harfni 0 dan boshlab sanaydi so'z uzunligidan oshmasdan harsafar 1 ga oshiradi, bu qator so'zimizning uzunligi va sanoq uchun kerak
  if (a[i] === "e") {   // e harfi array ga ajratilgan so'zning valuelaridan biriga qatiyan teng bo'lganda (count++;) 1 qo'shiladi
    count++;
    }
}

console.log("natija:", a);
console.log('kiritilgan harfi soni:', count);

// NodeJS event loop va Callback functionlarni o'rganamiz  ===========================================================================================

/*
console.log("Jack Ma maslahatlari");
const list = [
  "Yaxshi talaba bo'ling", //0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
  "O'zingiz uchun ishlashni boshlang", // 30-40
  "Siz kushli bulgan narsalarni qiling", // 40-50
  "Yoshlarga investitsiya qiling", // 50-60
  "Endi dam oling, foydasi yuq", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if(err) console.log("ERROR:", err);
  console.log('Javob:', data);
});
console.log("passed here 1");
*/

/*
console.log("Jack Ma maslahatlari");
const list = [
  "Yaxshi talaba bo'ling", //0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
  "O'zingiz uchun ishlashni boshlang", // 30-40
  "Siz kushli bulgan narsalarni qiling", // 40-50
  "Yoshlarga investitsiya qiling", // 50-60
  "Endi dam oling, foydasi yuq", // 60
];

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });

  //  setTimeout(function () {
  //  return list[5];
  //  }, 5000);
  }
}

// then/catch
//console.log("passed here 0");
//maslahatBering(25).then(data => {
//  console.log("javob:", data);
//})
//.catch((err) => {
//  console.log("ERROR:", err);
//});
//console.log("passed here 1");


//async/await
async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(43);
  console.log(javob);
  javob = await maslahatBering(53);
  console.log(javob);
}
run();

*/




// 21. NodeJS event loop va Callback functionlarni o'rganamiz  =========================================================================================

/*
console.log("Jack Ma maslahatlari");
const list = [
  "Yaxshi talaba bo'ling", //0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
  "O'zingiz uchun ishlashni boshlang", // 30-40
  "Siz kushli bulgan narsalarni qiling", // 40-50
  "Yoshlarga investitsiya qiling", // 50-60
  "Endi dam oling, foydasi yuq", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if(err) console.log("ERROR:", err);
  console.log('Javob:', data);
});
console.log("passed here 1");
*/