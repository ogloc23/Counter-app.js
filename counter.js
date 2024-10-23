const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const count_block = document.getElementById("count_block");

let count = 0;

decreaseBtn.onclick = function () {
  if (count < 1) {
    return;
  }
  count = count - 1;

  count_block.textContent = count;
};

increaseBtn.onclick = function () {
  if ((count = count + 1)) {
  }
  count_block.textContent = count;
};

resetBtn.onclick = function () {
  if ((count = 0)) {
  }
  count_block.textContent = count;
};
