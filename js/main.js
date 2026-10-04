const galleryModal = document.getElementById("galleryModal");
const galleryMore = document.querySelector(".gallery__more");
const galleryClose = document.querySelector(".gallery-modal__close");
const galleryOverlay = document.querySelector(".gallery-modal__overlay");

/* VIEW MORE */
if (galleryMore && galleryModal) {
    galleryMore.addEventListener("click", () => {
        galleryModal.classList.add("is-open");
        document.body.style.overflow = "hidden";
    });
}
/* 閉じるボタン */
if (galleryClose && galleryModal) {
    galleryClose.addEventListener("click", () => {
        galleryModal.classList.remove("is-open");
        document.body.style.overflow = "";
    });
}
/* 背景をクリックして閉じる */
if (galleryOverlay && galleryModal) {
    galleryOverlay.addEventListener("click", () => {
        galleryModal.classList.remove("is-open");
        document.body.style.overflow = "";
    });
}
/* ESCキーで閉じる */
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && galleryModal) {
        galleryModal.classList.remove("is-open");
        document.body.style.overflow = "";
    }
});

/*SP MENU*/
const hamburger = document.querySelector(".hamburger");
const spMenu = document.querySelector(".sp-menu");

/* ハンバーガーをクリック */
if (hamburger && spMenu) {
    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        spMenu.classList.toggle("is-open");
    });

    /* メニューの外側をクリックしたら閉じる */
    document.addEventListener("click", (event) => {
        if (
            spMenu.classList.contains("is-open") &&
            !spMenu.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {
            spMenu.classList.remove("is-open");
        }
    });

    /* メニュー項目をクリックしたら閉じる */
    const spMenuLinks = document.querySelectorAll(".sp-menu__nav a");
    spMenuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            spMenu.classList.remove("is-open");
        });
    });
}
// Gallery Slider
const galleryList = document.querySelector(".gallery__list");
const galleryPrev = document.querySelector(".gallery__arrow--prev");
const galleryNext = document.querySelector(".gallery__arrow--next");

if (galleryList && galleryPrev && galleryNext) {

    galleryNext.addEventListener("click", () => {
        galleryList.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    });

    galleryPrev.addEventListener("click", () => {
        galleryList.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });

}
