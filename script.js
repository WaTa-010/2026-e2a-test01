const filterButtons = document.querySelectorAll(".filter-button");
const spotCards = document.querySelectorAll(".spot-card");
const emptyMessage = document.querySelector(".filter-empty");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    spotCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category.split(" ").includes(filter);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    emptyMessage.hidden = visibleCount > 0;
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  mainNav.classList.toggle("is-open", isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
    mainNav.classList.remove("is-open");
  });
});
