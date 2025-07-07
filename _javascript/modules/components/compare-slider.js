export function initCompareSliders() {
  const $compare = document.querySelector(".compare");
  const $input = document.querySelector(".compare input");

  $input.addEventListener("input", () => {
    $compare.style.setProperty("--mask-width", `${$input.value}%`);
  });

  $compare.style.setProperty("--mask-width", `${$input.value}%`);
}
