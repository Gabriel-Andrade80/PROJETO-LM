const controls = document.querySelectorAll(".control");

const imgs = document.querySelectorAll(".img");

const maxImgs = imgs.length;

let currentImg = 0;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("seta-esq");

    if (isLeft) {
      currentImg -= 1;
    } else {
      currentImg += 1;
    }
    if (currentImg >= maxImgs) {
      currentImg = 0;
    }
    if (currentImg < 0) {
      currentImg = maxImgs - 1;
    }
    imgs.forEach((img) => img.classList.remove("current-img"));

    imgs[currentImg].scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest"
    });
    imgs[currentImg].classList.add("current-img");
  });
});