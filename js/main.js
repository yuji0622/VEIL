const galleryModal = document.getElementById("galleryModal");
const galleryMore = document.querySelector(".gallery__more");
const galleryClose = document.querySelector(".gallery-modal__close");
const galleryOverlay = document.querySelector(".gallery-modal__overlay");

if (galleryMore && galleryModal) {

    galleryMore.addEventListener("click", () => {

        galleryModal.classList.add("is-open");

        document.body.style.overflow = "hidden";

    });

}

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

const hamburger = document.querySelector(".hamburger");
const spMenu = document.querySelector(".sp-menu");


if (hamburger && spMenu) {

    hamburger.addEventListener("click", (event) => {

        event.stopPropagation();

        spMenu.classList.toggle("is-open");

    });

    document.addEventListener("click", (event) => {

        if (
            spMenu.classList.contains("is-open") &&
            !spMenu.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {

            spMenu.classList.remove("is-open");

        }

    });

    const spMenuLinks =
        document.querySelectorAll(".sp-menu__nav a");


    spMenuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            spMenu.classList.remove("is-open");

        });

    });

}

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
    fadeElements.forEach((element) => {

        fadeObserver.observe(element);

    });


} else {


    fadeElements.forEach((element) => {

        element.classList.add("is-visible");

    });

}

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        spMenu &&
        spMenu.classList.contains("is-open")
    ) {

        spMenu.classList.remove("is-open");

    }

});