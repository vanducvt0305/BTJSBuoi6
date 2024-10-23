let daySoChan = [];
let daySoLe = [];
let showSoChan = document.querySelector("#showSoChan");
let showSoLe = document.querySelector("#showSoLe");
for (i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    daySoChan.push(`<div class="inline-block mx-1">${i}</div>`);
    showSoChan.innerHTML = daySoChan;
  } else {
    daySoLe.push(`<div class="inline-block mx-1">${i}</div>`);
    showSoLe.innerHTML = daySoLe;
  }
}
// Tính tổng các số chẵn từ 1 đến n

let soTuNhienInput = document.querySelector("#soTuNhienInput");
let tinhTong = document.querySelector("#tinhTong");
let tongSoChan = document.querySelector("#tongSoChan");

tinhTong.onclick = () => {
  let tongCacSoChan = 0;
  for (i = 2; i <= parseFloat(soTuNhienInput.value); i++) {
    if (i % 2 == 0) {
      tongCacSoChan += i;
      tongSoChan.classList.remove("hidden");
      tongSoChan.innerHTML = tongCacSoChan;
    }
  }
};
// Số chia hết cho 3 từ 0-1000
let cacSoChiaHetCho3 = 0;
let soChiaHetCho3 = document.querySelector("#soChiaHetCho3");
for (let i = 3; i <= 1000; i++) {
  if (i % 3 == 0) {
    cacSoChiaHetCho3 += 1;
    soChiaHetCho3.innerHTML = cacSoChiaHetCho3;
  }
}
// In 10 thẻ div
let inTheDiv = document.querySelector("#inTheDiv");
inTheDiv.onclick = () => {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = "Đây là 1 thẻ Div màu đỏ";
      newDiv.className = "bg-red-500 py-4 px-8 my-4";
      inTheDiv.appendChild(newDiv);
    } else {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = "Đây là 1 thẻ Div màu xanh";
      newDiv.className = "bg-blue-500 py-4 px-8 my-4";
      inTheDiv.appendChild(newDiv);
    }
  }
};
// Tìm số nguyên dương nhỏ nhất

let showN = document.querySelector("#showN");

let n = 1;
let sum = 0;

while (sum <= 10000) {
  sum += n;
  n++;
}
showN.innerHTML = n - 1;

// Viết chương trình nhập vào 2 số x, n, tính tổng: S(n)=x+x^2+x^3+…+x^n (Sử dụng vòng lặp và hàm)
let soTuNhienX = document.querySelector("#soTuNhienX");
let soTuNhienY = document.querySelector("#soTuNhienY");
let tinhTongLuyThua = document.querySelector("#tinhTongLuyThua");
let tongLuyThua = document.querySelector("#tongLuyThua");
function calculateSum(x, n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  return sum;
}
tinhTongLuyThua.onclick = () => {
  const result = calculateSum(
    parseFloat(soTuNhienX.value),
    parseFloat(soTuNhienY.value)
  );
  tongLuyThua.innerHTML = result;
};

// Tính giai thừa
let soTuNhienBatKi = document.querySelector("#soTuNhienBatKi");
let tinhGiaiThua = document.querySelector("#tinhGiaiThua");
let showGiaiThua = document.querySelector("#showGiaiThua");
let giaiThua = 1;
tinhGiaiThua.onclick = () => {
  for (let i = 2; i <= parseFloat(soTuNhienBatKi.value); i++) {
    giaiThua *= i;
    showGiaiThua.innerHTML = giaiThua;
    setTimeout(() => {
      giaiThua = 1;
    }, 10);
  }
};
// Viết chương trình có một input, một button. Khi click vào button thì in ra các số nguyên từ 1 tới giá trị của input

let nhap1SoTuNhienBatKi = document.querySelector("#nhap1SoTuNhienBatKi");
let inToiSoDo = document.querySelector("#inToiSoDo");
let showSo = document.querySelector("#showSo");
let chuoiSoNguyen = "";
inToiSoDo.onclick = () => {
  for (let i = 1; i <= parseFloat(nhap1SoTuNhienBatKi.value); i++) {
    chuoiSoNguyen += `${i} `;
    showSo.innerHTML = chuoiSoNguyen;
    setTimeout(() => {
      chuoiSoNguyen = "";
    }, 10);
  }
};
