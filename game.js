let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let temp = document.querySelector("h1");
let pattern = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let st = true;
let c = 0;
box.forEach((i) => {
  i.addEventListener("click", () => {
    if (st) {
      i.innerText = "X";
      st = false;
      i.style.color = "red";
    } else {
      i.innerText = "O";
      st = true;
      i.style.color = "green";
    }
    c++;
    console.log(c);
    checkwinner();
    if (c >= 9) {
      temp.innerText = "game is a draw";
      temp.classList.remove("hide");
    }

    i.disabled = true;
  });
});
const disable = () => {
  for (const i of box) {
    i.disabled = true;
  }
};
const checkwinner = () => {
  for (const i of pattern) {
    let p1 = box[i[0] - 1].innerText;
    let p2 = box[i[1] - 1].innerText;
    let p3 = box[i[2] - 1].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3 && p3 === p1) {
        temp.innerText = `congratulation winner is ${p1}`;
        temp.classList.remove("hide");
        disable();
        if (c == 9) {
          c--;
        }
      }
    }
  }
};

reset.addEventListener("click", () => {
  box.forEach((i) => {
    i.innerText = "";
    temp.classList.add("hide");
    i.disabled = false;
    c = 0;
  });
});
