/* =========================================================
   VEIL
   SHISHA CAFE & BAR
   main.js
========================================================= */


/* =========================================================
   GALLERY MODAL
========================================================= */

const galleryModal = document.getElementById("galleryModal");
const galleryMore = document.querySelector(".gallery__more");
const galleryClose = document.querySelector(".gallery-modal__close");
const galleryOverlay = document.querySelector(".gallery-modal__overlay");


/* =========================================================
   VIEW MORE
========================================================= */

if (galleryMore && galleryModal) {

    galleryMore.addEventListener("click", () => {

        galleryModal.classList.add("is-open");

        document.body.style.overflow = "hidden";

    });

}


/* =========================================================
   GALLERY MODAL CLOSE
========================================================= */

function closeGalleryModal() {

    if (!galleryModal) {
        return;
    }

    galleryModal.classList.remove("is-open");

    document.body.style.overflow = "";

}


/* 閉じるボタン */

if (galleryClose) {

    galleryClose.addEventListener("click", () => {

        closeGalleryModal();

    });

}


/* 背景クリック */

if (galleryOverlay) {

    galleryOverlay.addEventListener("click", () => {

        closeGalleryModal();

    });

}


/* ESCキー */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        galleryModal &&
        galleryModal.classList.contains("is-open")
    ) {

        closeGalleryModal();

    }

});


/* =========================================================
   SP MENU
========================================================= */

const hamburger = document.querySelector(".hamburger");
const spMenu = document.querySelector(".sp-menu");


/* =========================================================
   HAMBURGER OPEN / CLOSE
========================================================= */

if (hamburger && spMenu) {

    hamburger.addEventListener("click", (event) => {

        event.stopPropagation();

        spMenu.classList.toggle("is-open");

    });


    /* =====================================================
       メニュー外側をクリック
    ===================================================== */

    document.addEventListener("click", (event) => {

        if (
            spMenu.classList.contains("is-open") &&
            !spMenu.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {

            spMenu.classList.remove("is-open");

        }

    });


    /* =====================================================
       メニュー項目をクリック
    ===================================================== */

    const spMenuLinks =
        document.querySelectorAll(".sp-menu__nav a");


    spMenuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            spMenu.classList.remove("is-open");

        });

    });

}


/* =========================================================
   GALLERY SLIDER
========================================================= */

const galleryList =
    document.querySelector(".gallery__list");

const galleryPrev =
    document.querySelector(".gallery__arrow--prev");

const galleryNext =
    document.querySelector(".gallery__arrow--next");


if (
    galleryList &&
    galleryPrev &&
    galleryNext
) {


    /* =====================================================
       NEXT
    ===================================================== */

    galleryNext.addEventListener("click", () => {

        galleryList.scrollBy({

            left: 300,

            behavior: "smooth"

        });

    });


    /* =====================================================
       PREV
    ===================================================== */

    galleryPrev.addEventListener("click", () => {

        galleryList.scrollBy({

            left: -300,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const fadeElements =
    document.querySelectorAll(
        ".js-fade, .js-fade-left, .js-fade-right"
    );

if ("IntersectionObserver" in window) {

    const fadeObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );


                        /* 一度表示したら監視を解除 */

                        fadeObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    /* アニメーション対象を監視 */

    fadeElements.forEach((element) => {

        fadeObserver.observe(element);

    });


} else {

    /* =====================================================
       IntersectionObserver非対応ブラウザ用
    ===================================================== */

    fadeElements.forEach((element) => {

        element.classList.add("is-visible");

    });

}


/* =========================================================
   SP MENU
   ESCキーでも閉じる
========================================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        spMenu &&
        spMenu.classList.contains("is-open")
    ) {

        spMenu.classList.remove("is-open");

    }

});