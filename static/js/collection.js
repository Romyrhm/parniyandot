window.addEventListener(
    "load",
    () => {

        /* =====================================================
           SETTINGS
        ===================================================== */

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;


        /* =====================================================
           IMPORTANT
           REMOVE OLD VIDEO INTRO IF IT EXISTS
        ===================================================== */

        document
            .querySelectorAll(
                ".parnian-video-intro, .parnian-cinematic-intro"
            )
            .forEach(
                element => {

                    element.remove();
                }
            );


        /* =====================================================
           REMOVE IMAGE LOGOS
        ===================================================== */

        document
            .querySelectorAll(
                ".preloader-logo-card, .hero-brand-logo"
            )
            .forEach(
                element => {

                    element.remove();
                }
            );


        /* =====================================================
           RESTORE HERO CARPET
           MAIN.JS CONTROLS THE ORIGINAL STAR MOTION
        ===================================================== */

        const carpetStage =
            document.querySelector(
                ".carpet-stage"
            );


        if (
            carpetStage
        ) {

            carpetStage.style.display =
                "";
        }


        /* =====================================================
           REAL RUG DATA
        ===================================================== */

        const rugs = [

            {
                code:
                    "PD-RUG-001",

                name:
                    "طوسی کلاسیک",

                image:
                    "/static/images/rug-01.jpg"
            },

            {
                code:
                    "PD-RUG-002",

                name:
                    "طوسی ",

                image:
                    "/static/images/rug-02.jpg"
            },

            {
                code:
                    "PD-RUG-003",

                name:
                    "کرم روشن کلاسیک",

                image:
                    "/static/images/rug-03.jpg"
            },

            {
                code:
                    "PD-RUG-004",

                name:
                    "قرمز ترنج‌دار",

                image:
                    "/static/images/rug-04.jpg"
            },

            {
                code:
                    "PD-RUG-005",

                name:
                    "طوسی طلایی",

                image:
                    "/static/images/rug-05.jpg"
            },

            {
                code:
                    "PD-RUG-006",

                name:
                    "ذغالی کرم کهنه‌نما",

                image:
                    "/static/images/rug-06.jpg"
            },

            {
                code:
                    "PD-RUG-007",

                name:
                    "قهوه‌ای گلدار",

                image:
                    "/static/images/rug-07.jpg"
            },

            {
                code:
                    "PD-RUG-008",

                name:
                    "قهوه‌ای گلدار",

                image:
                    "/static/images/rug-08.jpg"
            },

            {
                code:
                    "PD-RUG-009",

                name:
                    "کرم روشن کلاسیک",

                image:
                    "/static/images/rug-09.jpg"
            },

            {
                code:
                    "PD-RUG-010",

                name:
                    "فیروزه‌ای ترنج‌دار",

                image:
                    "/static/images/rug-10.jpg"
            },

            {
                code:
                    "PD-RUG-011",

                name:
                    "سرمه‌ای ترنج‌دار",

                image:
                    "/static/images/rug-11.jpg"
            },

            {
                code:
                    "PD-RUG-012",

                name:
                    "فیروزه‌ای گلدار کلاسیک",

                image:
                    "/static/images/rug-12.jpg"
            },

            {
                code:
                    "PD-RUG-013",

                name:
                    "سرمه‌ای زرشکی هندسی",

                image:
                    "/static/images/rug-13.jpg"
            },

            {
                code:
                    "PD-RUG-014",

                name:
                    "طوسی کهنه‌نما",

                image:
                    "/static/images/rug-14.jpg"
            }

        ];


        /* =====================================================
           CARPET GRIP REAL IMAGES
        ===================================================== */

        const gripVisual =
            document.querySelector(
                ".grip-visual"
            );


        if (
            gripVisual
        ) {

            gripVisual.classList.add(
                "grip-dot-showcase"
            );


            gripVisual.innerHTML =
                `
                    <div
                        class="grip-dot-panel"
                    >

                        <img
                            src="/static/images/carpet-grip-dot-01.jpg"
                            alt="چاپ نقطه‌ای PVC ضدلغزش پرنیان دات"
                            class="grip-dot-photo grip-dot-photo-one"
                        >

                        <span
                            class="grip-dot-label"
                        >
                            PVC DOT / 01
                        </span>

                    </div>


                    <div
                        class="grip-dot-panel"
                    >

                        <img
                            src="/static/images/carpet-grip-dot-02.jpg"
                            alt="دات بک و دات کوت پرنیان دات"
                            class="grip-dot-photo grip-dot-photo-two"
                        >

                        <span
                            class="grip-dot-label"
                        >
                            PVC DOT / 02
                        </span>

                    </div>
                `;
        }


        /* =====================================================
           GRIP TEXT
        ===================================================== */

        const gripEnglish =
            document.querySelector(
                ".grip-en"
            );


        const gripTitle =
            document.querySelector(
                ".grip-content h2"
            );


        const gripDescription =
            document.querySelector(
                ".grip-description"
            );


        if (
            gripEnglish
        ) {

            gripEnglish.textContent =
                "ANTI-SLIP / DOT BACK / DOT COAT";
        }


        if (
            gripTitle
        ) {

            gripTitle.textContent =
                "ترمزگیر";
        }


        if (
            gripDescription
        ) {

            gripDescription.innerHTML =
                `
                    خدمات تخصصی ترمزگیر برای
                    نمد، فرش، پارچه و انواع محصولات نساجی؛

                    با اجرای دات‌بک،
                    دات‌کوت و استپر
                    برای افزایش اصطکاک،
                    کاهش لغزش و ایجاد ثبات بیشتر
                    روی سطوح مختلف.
                `;
        }


        /* =====================================================
           ABOUT CONTENT
        ===================================================== */

        const aboutSmall =
            document.querySelector(
                ".about-small"
            );


        const aboutTitle =
            document.querySelector(
                ".about-content h2"
            );


        const aboutText =
            document.querySelector(
                ".about-content p"
            );


        if (
            aboutSmall
        ) {

            aboutSmall.textContent =
                "ANTI-SLIP / DOT BACK / DOT COAT";
        }


        if (
            aboutTitle
        ) {

            aboutTitle.innerHTML =
                `
                    ثباتی که از

                    <span>
                        هر نقطه آغاز می‌شود
                    </span>
                `;
        }


        if (
            aboutText
        ) {

            aboutText.innerHTML =
                `
                    پرنیان دات ارائه‌دهنده خدمات تخصصی
                    ترمزگیر نمد، فرش، پارچه
                    و انواع محصولات نساجی است.

                    اجرای

                    <strong>
                        دات‌بک (DOT BACK)،
                        دات‌کوت (DOT COAT)
                        و استپر
                    </strong>

                    برای پادری،
                    فرشینه و محصولات مشابه،
                    با هدف افزایش اصطکاک،
                    کاهش لغزش و ایجاد ثبات بیشتر
                    روی سطوح مختلف انجام می‌شود.

                    این خدمات در مجموعه پرنیان دات
                    واقع در شهرک صنعتی اشتهارد
                    ارائه می‌شود.
                `;
        }


        /* =====================================================
           RUG COLLECTION
        ===================================================== */

        const rugsList =
            document.querySelector(
                ".real-rugs-list"
            );


        if (
            rugsList
        ) {

            rugsList.innerHTML =
                rugs
                    .map(
                        (
                            rug,
                            index
                        ) => {

                            const number =
                                String(
                                    index + 1
                                )
                                .padStart(
                                    2,
                                    "0"
                                );


                            return `
                                <article
                                    class="real-rug-card"
                                    data-rug-index="${index}"
                                >

                                    <div
                                        class="real-rug-media"
                                    >

                                        <img
                                            src="${rug.image}"
                                            alt="${rug.name}"
                                            class="real-rug-photo"
                                        >


                                        <div
                                            class="real-rug-curtain"
                                            aria-hidden="true"
                                        ></div>


                                        <span
                                            class="real-rug-index"
                                        >
                                            ${number}
                                        </span>

                                    </div>


                                    <div
                                        class="real-rug-copy"
                                    >

                                        <p>
                                            ${rug.code}
                                        </p>


                                        <h3>
                                            ${rug.name}
                                        </h3>


                                        <span>
                                            کد محصول:
                                            ${rug.code}
                                        </span>

                                    </div>

                                </article>
                            `;
                        }
                    )
                    .join("");
        }


        /* =====================================================
           COLLECTION HEADER MOTION
        ===================================================== */

        if (
            window.gsap &&
            window.ScrollTrigger
        ) {

            gsap.fromTo(
                ".real-rugs-kicker",
                {
                    opacity:
                        0,

                    y:
                        25
                },
                {
                    opacity:
                        1,

                    y:
                        0,

                    duration:
                        0.7,

                    ease:
                        "power3.out",

                    scrollTrigger:
                        {
                            trigger:
                                ".real-rugs-head",

                            start:
                                "top 80%",

                            once:
                                true
                        }
                }
            );


            gsap.fromTo(
                ".real-rugs-title-row h2",
                {
                    opacity:
                        0,

                    y:
                        80
                },
                {
                    opacity:
                        1,

                    y:
                        0,

                    duration:
                        1,

                    ease:
                        "power4.out",

                    scrollTrigger:
                        {
                            trigger:
                                ".real-rugs-head",

                            start:
                                "top 76%",

                            once:
                                true
                        }
                }
            );


            gsap.fromTo(
                ".real-rugs-title-row p",
                {
                    opacity:
                        0,

                    y:
                        40
                },
                {
                    opacity:
                        1,

                    y:
                        0,

                    duration:
                        0.85,

                    delay:
                        0.1,

                    ease:
                        "power3.out",

                    scrollTrigger:
                        {
                            trigger:
                                ".real-rugs-head",

                            start:
                                "top 75%",

                            once:
                                true
                        }
                }
            );
        }


        /* =====================================================
           RUG CURTAIN MOTION
        ===================================================== */

        const rugCards =
            document.querySelectorAll(
                ".real-rug-card"
            );


        rugCards.forEach(
            (
                card,
                index
            ) => {

                const media =
                    card.querySelector(
                        ".real-rug-media"
                    );


                const image =
                    card.querySelector(
                        ".real-rug-photo"
                    );


                const curtain =
                    card.querySelector(
                        ".real-rug-curtain"
                    );


                const copy =
                    card.querySelector(
                        ".real-rug-copy"
                    );


                const number =
                    card.querySelector(
                        ".real-rug-index"
                    );


                if (
                    !window.gsap ||
                    !window.ScrollTrigger ||
                    !media ||
                    !image ||
                    !curtain ||
                    !copy ||
                    !number
                ) {

                    return;
                }


                const direction =
                    index % 2 === 0
                        ? 1
                        : -1;


                gsap.set(
                    image,
                    {
                        scale:
                            1.12
                    }
                );


                gsap.set(
                    copy,
                    {
                        opacity:
                            0,

                        y:
                            35
                    }
                );


                gsap.set(
                    number,
                    {
                        opacity:
                            0,

                        scale:
                            0.8
                    }
                );


                const timeline =
                    gsap.timeline(
                        {
                            scrollTrigger:
                                {
                                    trigger:
                                        card,

                                    start:
                                        "top 80%",

                                    once:
                                        true
                                }
                        }
                    );


                timeline.fromTo(
                    media,
                    {
                        opacity:
                            0,

                        y:
                            60
                    },
                    {
                        opacity:
                            1,

                        y:
                            0,

                        duration:
                            0.8,

                        ease:
                            "power4.out"
                    }
                );


                timeline.to(
                    curtain,
                    {
                        xPercent:
                            direction *
                            105,

                        duration:
                            1.1,

                        ease:
                            "power4.inOut"
                    },
                    "-=0.2"
                );


                timeline.to(
                    image,
                    {
                        scale:
                            1,

                        duration:
                            1.3,

                        ease:
                            "power3.out"
                    },
                    "-=1"
                );


                timeline.to(
                    number,
                    {
                        opacity:
                            1,

                        scale:
                            1,

                        duration:
                            0.45,

                        ease:
                            "back.out(1.8)"
                    },
                    "-=0.6"
                );


                timeline.to(
                    copy,
                    {
                        opacity:
                            1,

                        y:
                            0,

                        duration:
                            0.6,

                        ease:
                            "power3.out"
                    },
                    "-=0.3"
                );
            }
        );


        /* =====================================================
           GRIP IMAGE MOTION
        ===================================================== */

        if (
            window.gsap &&
            window.ScrollTrigger &&
            document.querySelector(
                ".grip-dot-panel"
            )
        ) {

            gsap.fromTo(
                ".grip-dot-panel",
                {
                    opacity:
                        0,

                    y:
                        50,

                    scale:
                        0.97
                },
                {
                    opacity:
                        1,

                    y:
                        0,

                    scale:
                        1,

                    duration:
                        0.85,

                    stagger:
                        0.15,

                    ease:
                        "power3.out",

                    scrollTrigger:
                        {
                            trigger:
                                ".grip-visual",

                            start:
                                "top 80%",

                            once:
                                true
                        }
                }
            );
        }


        /* =====================================================
           QUIZ RESULT BUTTON
        ===================================================== */

        const quizProductsButton =
            document.querySelector(
                ".quiz-view-products"
            );


        if (
            quizProductsButton
        ) {

            quizProductsButton.setAttribute(
                "href",
                "#real-rugs"
            );
        }


        /* =====================================================
           SMOOTH SCROLL TO RUGS
        ===================================================== */

        document
            .querySelectorAll(
                'a[href="#real-rugs"]'
            )
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        event => {

                            const target =
                                document.querySelector(
                                    "#real-rugs"
                                );


                            if (
                                !target
                            ) {

                                return;
                            }


                            event.preventDefault();


                            const navbar =
                                document.querySelector(
                                    ".navbar"
                                );


                            const navbarHeight =
                                navbar
                                    ? navbar.offsetHeight
                                    : 0;


                            const top =
                                target
                                    .getBoundingClientRect()
                                    .top
                                +
                                window.scrollY
                                -
                                navbarHeight
                                -
                                25;


                            window.scrollTo(
                                {
                                    top:
                                        top,

                                    behavior:
                                        reducedMotion
                                            ? "auto"
                                            : "smooth"
                                }
                            );
                        }
                    );
                }
            );


        /* =====================================================
           REFRESH
        ===================================================== */

        if (
            window.ScrollTrigger
        ) {

            setTimeout(
                () => {

                    ScrollTrigger.refresh();

                },
                400
            );
        }

    }
);