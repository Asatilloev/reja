
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