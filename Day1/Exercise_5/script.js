const paragraph = document.querySelector(".paragraph");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const randomText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti asperiores distinctio iusto esse molestiae aspernatur nostrum earum quidem illo quam suscipit exercitationem mollitia, nemo, deserunt maxime pariatur qui quod.";
  paragraph.innerText += randomText;
});
