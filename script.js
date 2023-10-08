// Contoh program javascript menggunakan if
var usia = 25;

if (usia >= 18) {
  console.log("Anda sudah cukup umur untuk menikah.");
} else {
  console.log("Anda belum cukup umur untuk menikah.");
}

// Contoh program javascript menggunakan else
var angka = 6;
if (angka % 2 == 0) {
  console.log(angka + "merupakan bilangan genap");
} else {
  console.log(angka + "merupakan bilangan ganjil");
}

// LATIHAN
// if,else //
var jmlBecak = 10;
var becakBeroperasi = 5;

for (var noBecak = 1; noBecak <= jmlBecak; noBecak++) {
  if (noBecak <= 5) {
    console.log("Becak No." + noBecak + "bisa beroperasi.");
  } else {
    console.log("Becak No." + noBecak + "tidak bisa beroperasi.");
  }
}
// LATIHAN
// else if

var angka = prompt("Masukkan angka");
if (angka % 2 === 0) {
  alert(angka + "adalah bolangan genap");
} else if (angka % 2 === 1) {
  alert(angka + "adalah bilangan ganjil");
} else {
  alert("yang anda masukkan bukan angka");
}

// Contoh program javascript menggunakan nested if
var usia = 20;
var izin = true;
var punyaKendaraan = true;

if (usia >= 17) {
  console.log("Anda cukup umur.");

  if (izin) {
    console.log("Anda memiliki izin mengemudi.");

    if (punyaKendaraan) {
      console.log("Anda memiliki kendaraan.");
      console.log("Anda dapat mengemudi.");
    } else {
      console.log("Anda tidak memiliki kendaraan.");
    }
  } else {
    console.log("Anda tidak memiliki izin mengemudi.");
  }
} else {
  console.log("Anda belum cukup umur untuk mengemudi.");
}

// Contoh program javascript menggunakan switch case
var item = prompt(
  "masukkan nama makanan yang kamu pesan (cth:nasi bebek, nasi pecal, bakso kuah,kebab, pecal lele,)"
);

switch (item) {
  case "nasi bebek":
    alert("makanan ini sehat");
    break;
  case "nasi pecal":
    alert("makanan ini sehat");
    break;
  case "bakso kuah":
    alert("makanan ini kurang sehat");
    break;
  case "kebab":
    alert("makanan ini kurang sehat");
    break;
  case "pecal lele":
    alert("makanan ini sehat");
    break;
  default:
    alert("anda memasukkan nama  makanan di luar list");
    break;
}

// Contoh program javascript menggunakan for statement
for (var i = 1; i <= 10; i++) {
  console.log("hello gess" + i + "x");
}
// latihan penggabungan while dan for
var jmlBecak = 15;
var becakBeroperasi = 10;
var noBecak1;

while (noBecak <= bacakBeroperasi) {
  console.log("Becak No. " + noBecak + "bisa beroperasi.");

  noBecak++;
}

for (noBecak = becakBeroperasi + 1; noBecak <= jmlBecak; noBecak++) {
  console.log("Becak No." + noBecak + "tidak bisa beroperasi.");
}

// Contoh program javascript menggunakan while
var nilaiAwal = 1;

while (nilaiAwal <= 50) {
  console.log("fatimah baik hati & penyayang" + nilaiAwal + "x");
  nilaiAwal++;
}

//  while dari user
var buat = true;
while (buat) {
  console.log("hello gess");
  buat = confirm("lagi");
}
// while dari program
var nilaiAwal = 1;
while (nilaiAwal <= 7) {
  console.log("hello gess");
  nilaiAwal++;
}

// latihan
var jmlBecak = 15;
var noBecak = 1;

while (noBecak <= jmlBecak) {
  console.log("Becak No.  " + noBecak + "bisa beroperasi.");
  noBecak++;
}

// Contoh program javascript menggunakan do while
var angka = 3;
do {
  console.log("anak ke" + angka);
  angka++;
} while (angka <= 10);
// Contoh program javascript menggunakan function
function jumlahVolumeDuaKubus(x, y) {
  var volumeX;
  var volumeY;
  var jumlah;

  volumeX = x * x * x;
  volumeY = y * y * y;

  jumlah = volumeX + volumeY;

  return jumlah;
}

console.log(jumlahVolumeDuaKubus(16, 12));
