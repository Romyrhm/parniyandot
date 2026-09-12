gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

    /* =========================================================
       GLOBAL ELEMENTS
    ========================================================= */

    const hero =
        document.querySelector(".hero");

    const carpet =
        document.querySelector(".carpet-stage");

    const navbar =
        document.querySelector(".navbar");

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");

    const preloader =
        document.querySelector(".preloader");

    const preloaderPercent =
        document.querySelector(".preloader-percent");

    const preloaderFill =
        document.querySelector(".preloader-line-fill");

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    document.body.classList.add("loading");


    /* =========================================================
       HELPER
    ========================================================= */

    function makeElement(
        className,
        styles = {}
    ) {

        const element =
            document.createElement("div");

        element.className =
            className;

        Object.assign(
            element.style,
            styles
        );

        return element;
    }


    function appendToHero(
        element
    ) {

        if (hero) {
            hero.appendChild(element);
        }
    }


    /* =========================================================
       HERO LIGHT ELEMENTS
    ========================================================= */

    const orbitRing =
        makeElement(
            "hero-orbit-ring",
            {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "min(76vw, 1120px)",
                height: "min(76vh, 690px)",
                transform: "translate(-50%, -50%)",
                border: "1px solid rgba(205,170,105,0.18)",
                borderRadius: "50%",
                boxShadow: "0 0 90px rgba(205,170,105,0.08)",
                pointerEvents: "none",
                zIndex: "2",
                opacity: "0"
            }
        );


    const centerPulse =
        makeElement(
            "hero-center-pulse",
            {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "120px",
                height: "120px",
                transform: "translate(-50%, -50%)",
                border: "1px solid rgba(255,220,145,0.75)",
                borderRadius: "50%",
                boxShadow: "0 0 50px rgba(255,210,120,0.35)",
                pointerEvents: "none",
                zIndex: "3",
                opacity: "0"
            }
        );


    const heroFlash =
        makeElement(
            "hero-flash",
            {
                position: "absolute",
                inset: "0",
                background:
                    "radial-gradient(circle at center, rgba(255,245,215,0.36), rgba(95,215,245,0.10) 30%, rgba(255,245,215,0) 60%)",
                pointerEvents: "none",
                zIndex: "3",
                opacity: "0"
            }
        );


    const movingLight =
        makeElement(
            "hero-moving-light",
            {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "720px",
                height: "720px",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background:
                    "radial-gradient(circle, rgba(92,214,238,0.24) 0%, rgba(103,213,234,0.14) 20%, rgba(245,204,117,0.17) 38%, rgba(185,154,103,0.05) 57%, rgba(185,154,103,0) 76%)",
                filter: "blur(27px)",
                pointerEvents: "none",
                zIndex: "1",
                opacity: "0"
            }
        );


    const movingGlowCore =
        makeElement(
            "hero-glow-core",
            {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "250px",
                height: "250px",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background:
                    "radial-gradient(circle, rgba(255,234,165,0.34) 0%, rgba(79,206,231,0.18) 42%, rgba(255,220,145,0) 78%)",
                filter: "blur(15px)",
                pointerEvents: "none",
                zIndex: "2",
                opacity: "0"
            }
        );


    const rearGlow =
        makeElement(
            "hero-rear-glow",
            {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "360px",
                height: "180px",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background:
                    "radial-gradient(ellipse, rgba(255,231,150,0.90) 0%, rgba(81,215,243,0.55) 31%, rgba(61,185,230,0.18) 58%, rgba(61,185,230,0) 83%)",
                filter: "blur(20px)",
                pointerEvents: "none",
                zIndex: "5",
                opacity: "0"
            }
        );


    appendToHero(movingLight);
    appendToHero(movingGlowCore);
    appendToHero(orbitRing);
    appendToHero(centerPulse);
    appendToHero(heroFlash);
    appendToHero(rearGlow);


    /* =========================================================
       STAR CONTAINER
    ========================================================= */

    const starContainer =
        makeElement(
            "hero-star-container",
            {
                position: "absolute",
                inset: "0",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: "8"
            }
        );


    appendToHero(starContainer);


    const goldStars = [
        "#fff4ce",
        "#ffe19a",
        "#ffd26d",
        "#eec17b",
        "#fff0b5"
    ];


    const blueStars = [
        "#d8f9ff",
        "#a9edff",
        "#72dfff",
        "#57c9f5",
        "#82e8ff"
    ];


    function randomStarColor() {

        const palette =
            Math.random() > 0.48
                ? goldStars
                : blueStars;

        return palette[
            Math.floor(
                Math.random() *
                palette.length
            )
        ];
    }


    /* =========================================================
       SHOOTING STAR
    ========================================================= */

    function createShootingStar(
        x,
        y,
        options = {}
    ) {

        if (
            prefersReducedMotion ||
            !starContainer
        ) {
            return;
        }


        const {
            intense = false,
            angle = null
        } = options;


        const wrapper =
            document.createElement("div");

        const star =
            document.createElement("span");

        const tail =
            document.createElement("span");


        const size =
            intense
                ? gsap.utils.random(12, 25)
                : gsap.utils.random(6, 15);


        const color =
            randomStarColor();


        const tailLength =
            intense
                ? gsap.utils.random(90, 190)
                : gsap.utils.random(35, 100);


        const rotation =
            angle !== null
                ? angle
                : gsap.utils.random(0, 360);


        Object.assign(
            wrapper.style,
            {
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                width: "1px",
                height: "1px",
                transform: `rotate(${rotation}deg)`,
                pointerEvents: "none"
            }
        );


        star.textContent =
            "✦";


        Object.assign(
            star.style,
            {
                position: "absolute",
                left: "0",
                top: "0",
                display: "block",
                width: `${size}px`,
                height: `${size}px`,
                transform: "translate(-50%, -50%)",
                fontFamily: "Georgia, serif",
                fontSize: `${size}px`,
                lineHeight: `${size}px`,
                textAlign: "center",
                color: color,
                opacity: "0.88",
                textShadow:
                    `
                    0 0 ${size * 0.5}px ${color},
                    0 0 ${size * 1.4}px ${color},
                    0 0 ${size * 2.8}px ${color}
                    `
            }
        );


        Object.assign(
            tail.style,
            {
                position: "absolute",
                right: "4px",
                top: "-1px",
                width: `${tailLength}px`,
                height: intense ? "3px" : "2px",
                borderRadius: "999px",
                transformOrigin: "right center",
                background:
                    `linear-gradient(
                        90deg,
                        transparent,
                        rgba(255,255,255,0.08),
                        ${color}
                    )`,
                opacity: intense ? "0.72" : "0.5",
                filter: intense ? "blur(1.8px)" : "blur(1px)",
                boxShadow: `0 0 12px ${color}`
            }
        );


        wrapper.appendChild(tail);
        wrapper.appendChild(star);

        starContainer.appendChild(
            wrapper
        );


        const distance =
            intense
                ? gsap.utils.random(150, 320)
                : gsap.utils.random(70, 190);


        const duration =
            intense
                ? gsap.utils.random(0.8, 1.5)
                : gsap.utils.random(0.55, 1.1);


        gsap.fromTo(
            wrapper,
            {
                opacity: 0,
                scale: 0.7
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.08
            }
        );


        gsap.to(
            wrapper,
            {
                x: distance,
                y: gsap.utils.random(-45, 45),
                opacity: 0,
                scale: 0.45,
                duration: duration,
                ease: "power2.out",

                onComplete: () => {
                    wrapper.remove();
                }
            }
        );


        gsap.to(
            star,
            {
                opacity: 0.25,
                scale: 1.4,
                duration: 0.1,
                repeat: 4,
                yoyo: true
            }
        );
    }


    /* =========================================================
       FLOATING STAR
    ========================================================= */

    function createFloatingStar(
        x,
        y,
        intense = false
    ) {

        if (
            prefersReducedMotion ||
            !starContainer
        ) {
            return;
        }


        const star =
            document.createElement("span");


        const size =
            intense
                ? gsap.utils.random(13, 27)
                : gsap.utils.random(6, 16);


        const color =
            randomStarColor();


        star.textContent =
            "✦";


        Object.assign(
            star.style,
            {
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
                fontFamily: "Georgia, serif",
                fontSize: `${size}px`,
                lineHeight: `${size}px`,
                color: color,
                opacity: "0",
                pointerEvents: "none",
                textShadow:
                    `
                    0 0 ${size * 0.5}px ${color},
                    0 0 ${size * 1.5}px ${color},
                    0 0 ${size * 3}px ${color}
                    `
            }
        );


        starContainer.appendChild(
            star
        );


        const angle =
            gsap.utils.random(
                0,
                Math.PI * 2
            );


        const distance =
            intense
                ? gsap.utils.random(90, 250)
                : gsap.utils.random(40, 130);


        gsap.fromTo(
            star,
            {
                opacity: 0.85,
                scale: 0.6
            },
            {
                x:
                    Math.cos(angle) *
                    distance,

                y:
                    Math.sin(angle) *
                    distance,

                opacity: 0,
                scale: 0.2,

                rotation:
                    gsap.utils.random(
                        -180,
                        180
                    ),

                duration:
                    intense
                        ? gsap.utils.random(1, 1.8)
                        : gsap.utils.random(0.7, 1.3),

                ease: "power2.out",

                onComplete: () => {
                    star.remove();
                }
            }
        );


        gsap.to(
            star,
            {
                opacity: 0.22,
                duration: 0.11,
                repeat: 4,
                yoyo: true
            }
        );
    }


    /* =========================================================
       STAR BURST
    ========================================================= */

    function starBurst(
        x,
        y,
        amount = 80
    ) {

        if (
            prefersReducedMotion
        ) {
            return;
        }


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            setTimeout(
                () => {

                    if (
                        Math.random() > 0.4
                    ) {

                        createFloatingStar(
                            x + gsap.utils.random(-45, 45),
                            y + gsap.utils.random(-45, 45),
                            true
                        );

                    } else {

                        createShootingStar(
                            x + gsap.utils.random(-35, 35),
                            y + gsap.utils.random(-35, 35),
                            {
                                intense: true,

                                angle:
                                    gsap.utils.random(
                                        0,
                                        360
                                    )
                            }
                        );
                    }

                },
                i * 4
            );
        }
    }


    /* =========================================================
       LONG STAR TRAIL
    ========================================================= */

    const trailStars = [];


    for (
        let i = 0;
        i < 22;
        i++
    ) {

        const star =
            document.createElement("span");


        const size =
            Math.max(
                5,
                15 - i * 0.42
            );


        star.textContent =
            "✦";


        const color =
            i % 2 === 0
                ? "#ffd78a"
                : "#8ee8ff";


        Object.assign(
            star.style,
            {
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "Georgia, serif",
                fontSize: `${size}px`,
                lineHeight: `${size}px`,
                color: color,

                textShadow:
                    `
                    0 0 8px ${color},
                    0 0 20px ${color}
                    `,

                opacity: "0",
                pointerEvents: "none",
                zIndex: "7"
            }
        );


        appendToHero(
            star
        );


        trailStars.push(
            star
        );
    }


    /* =========================================================
       CARPET MOVEMENT TRACKING
    ========================================================= */

    let carpetX = 0;
    let carpetY = 0;

    let previousCarpetX = 0;
    let previousCarpetY = 0;

    let carpetSpeed = 0;
    let particleCounter = 0;


    function getCarpetCenter() {

        if (
            !hero ||
            !carpet
        ) {
            return null;
        }


        const heroRect =
            hero.getBoundingClientRect();


        const carpetRect =
            carpet.getBoundingClientRect();


        return {

            x:
                carpetRect.left +
                carpetRect.width / 2 -
                heroRect.left,

            y:
                carpetRect.top +
                carpetRect.height / 2 -
                heroRect.top,

            width:
                carpetRect.width,

            height:
                carpetRect.height
        };
    }


    function emitStarsBehindCarpet() {

        const position =
            getCarpetCenter();


        if (!position) {
            return;
        }


        const dx =
            carpetX -
            previousCarpetX;


        const dy =
            carpetY -
            previousCarpetY;


        const length =
            Math.sqrt(
                dx * dx +
                dy * dy
            ) || 1;


        const directionX =
            dx / length;


        const directionY =
            dy / length;


        const rearX =
            position.x -
            directionX *
            position.width *
            0.32;


        const rearY =
            position.y -
            directionY *
            position.height *
            0.24;


        const movementAngle =
            Math.atan2(
                dy,
                dx
            ) *
            180 /
            Math.PI;


        const backwardAngle =
            movementAngle +
            180;


        let amount = 2;


        if (
            carpetSpeed > 18
        ) {

            amount = 7;

        } else if (
            carpetSpeed > 10
        ) {

            amount = 5;

        } else if (
            carpetSpeed > 4
        ) {

            amount = 3;
        }


        particleCounter++;


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            if (
                Math.random() > 0.38
            ) {

                createShootingStar(

                    rearX +
                    gsap.utils.random(
                        -30,
                        30
                    ),

                    rearY +
                    gsap.utils.random(
                        -25,
                        25
                    ),

                    {
                        intense:
                            carpetSpeed > 15,

                        angle:
                            backwardAngle +
                            gsap.utils.random(
                                -16,
                                16
                            )
                    }
                );

            } else {

                createFloatingStar(

                    rearX +
                    gsap.utils.random(
                        -30,
                        30
                    ),

                    rearY +
                    gsap.utils.random(
                        -25,
                        25
                    ),

                    carpetSpeed > 16
                );
            }
        }
    }


    function updateHeroEffects() {

        if (
            !hero ||
            !carpet ||
            prefersReducedMotion
        ) {
            return;
        }


        const position =
            getCarpetCenter();


        if (!position) {
            return;
        }


        previousCarpetX =
            carpetX;

        previousCarpetY =
            carpetY;


        carpetX =
            position.x;

        carpetY =
            position.y;


        const dx =
            carpetX -
            previousCarpetX;


        const dy =
            carpetY -
            previousCarpetY;


        carpetSpeed =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        gsap.to(
            movingLight,
            {
                left:
                    carpetX,

                top:
                    carpetY,

                duration:
                    0.48,

                ease:
                    "power3.out",

                overwrite:
                    true
            }
        );


        gsap.to(
            movingGlowCore,
            {
                left:
                    carpetX,

                top:
                    carpetY,

                duration:
                    0.20,

                ease:
                    "power2.out",

                overwrite:
                    true
            }
        );


        const length =
            Math.sqrt(
                dx * dx +
                dy * dy
            ) || 1;


        const normX =
            dx / length;


        const normY =
            dy / length;


        const angle =
            Math.atan2(
                dy,
                dx
            ) *
            180 /
            Math.PI;


        gsap.to(
            rearGlow,
            {
                left:
                    carpetX -
                    normX * 125,

                top:
                    carpetY -
                    normY * 70,

                rotation:
                    angle,

                scaleX:
                    1 +
                    Math.min(
                        carpetSpeed / 11,
                        2.8
                    ),

                opacity:
                    carpetSpeed > 1
                        ? 0.92
                        : 0.25,

                duration:
                    0.15,

                ease:
                    "power2.out",

                overwrite:
                    true
            }
        );


        trailStars.forEach(
            (
                star,
                index
            ) => {

                gsap.to(
                    star,
                    {
                        left:
                            carpetX,

                        top:
                            carpetY,

                        duration:
                            0.04 +
                            index * 0.038,

                        ease:
                            "power2.out",

                        overwrite:
                            true
                    }
                );
            }
        );


        if (
            carpetSpeed > 0.6
        ) {

            emitStarsBehindCarpet();
        }
    }


    gsap.ticker.add(
        updateHeroEffects
    );
        /* =========================================================
       SCROLL PROGRESS
    ========================================================= */

    const progressBar =
        makeElement(
            "scroll-progress",
            {
                position: "fixed",
                top: "0",
                left: "0",
                width: "0%",
                height: "2px",
                background: "#b99a67",
                pointerEvents: "none",
                zIndex: "9999"
            }
        );


    document.body.appendChild(
        progressBar
    );


    function updateProgress() {

        const max =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const value =
            max > 0
                ? (
                    window.scrollY /
                    max
                ) * 100
                : 0;


        progressBar.style.width =
            `${value}%`;
    }


    window.addEventListener(
        "scroll",
        updateProgress,
        {
            passive: true
        }
    );


    /* =========================================================
       INITIAL HERO STATES
    ========================================================= */

    gsap.set(
        ".navbar",
        {
            opacity: 0,
            y: -35
        }
    );


    gsap.set(
        carpet,
        {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
            rotation: -12,
            scale: 0.18,
            opacity: 0
        }
    );


    gsap.set(
        ".hero-content",
        {
            opacity: 0
        }
    );


    gsap.set(
        ".title-line",
        {
            opacity: 0,
            y: 100
        }
    );


    gsap.set(
        ".hero-text",
        {
            opacity: 0,
            y: 30
        }
    );


    gsap.set(
        ".hero-button",
        {
            opacity: 0,
            y: 20
        }
    );


    gsap.set(
        ".magic-dust",
        {
            opacity: 0,
            scale: 0
        }
    );


    /* =========================================================
       HERO TIMELINE
    ========================================================= */

    const heroTimeline =
        gsap.timeline({
            paused: true
        });


    heroTimeline

        .to(
            ".navbar",
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power4.out"
            }
        )

        .to(
            [
                movingLight,
                movingGlowCore,
                rearGlow
            ],
            {
                opacity: 1,
                duration: 0.5
            },
            "-=0.35"
        )

        .to(
            orbitRing,
            {
                opacity: 1,
                duration: 0.6
            },
            "-=0.4"
        )

        .to(
            carpet,
            {
                opacity: 1,
                scale: 0.33,
                rotation: 0,
                duration: 0.72,
                ease: "back.out(1.9)"
            },
            "-=0.3"
        )

        .call(
            () => {

                const pos =
                    getCarpetCenter();

                if (pos) {
                    starBurst(
                        pos.x,
                        pos.y,
                        85
                    );
                }
            }
        )

        .to(
            trailStars,
            {
                opacity: 0.75,
                duration: 0.4,
                stagger: 0.012
            },
            "-=0.35"
        )

        .to(
            ".magic-dust",
            {
                opacity: 0.30,
                scale: 1,
                duration: 0.5,
                stagger: 0.04
            },
            "-=0.4"
        )

        .to(
            carpet,
            {
                x:
                    window.innerWidth *
                    0.35,

                y:
                    -(
                        window.innerHeight *
                        0.27
                    ),

                rotation: 55,
                scale: 0.38,
                duration: 0.85,
                ease: "power2.inOut"
            }
        )

        .to(
            carpet,
            {
                x:
                    window.innerWidth *
                    0.40,

                y:
                    window.innerHeight *
                    0.25,

                rotation: 125,
                scale: 0.42,
                duration: 0.86,
                ease: "power2.inOut"
            }
        )

        .to(
            carpet,
            {
                x: 0,

                y:
                    window.innerHeight *
                    0.34,

                rotation: 180,
                scale: 0.36,
                duration: 0.72,
                ease: "power2.inOut"
            }
        )

        .to(
            carpet,
            {
                x:
                    -(
                        window.innerWidth *
                        0.38
                    ),

                y:
                    window.innerHeight *
                    0.24,

                rotation: 230,
                scale: 0.40,
                duration: 0.82,
                ease: "power2.inOut"
            }
        )

        .to(
            carpet,
            {
                x:
                    -(
                        window.innerWidth *
                        0.38
                    ),

                y:
                    -(
                        window.innerHeight *
                        0.25
                    ),

                rotation: 305,
                scale: 0.41,
                duration: 0.88,
                ease: "power2.inOut"
            }
        )

        .to(
            carpet,
            {
                x: 0,

                y:
                    -(
                        window.innerHeight *
                        0.34
                    ),

                rotation: 345,
                scale: 0.35,
                duration: 0.70,
                ease: "power2.inOut"
            }
        )

        .to(
            carpet,
            {
                x: 0,
                y: -10,
                rotation: 360,
                scale: 0.61,
                duration: 1,
                ease: "power3.out"
            }
        )

        .call(
            () => {

                const pos =
                    getCarpetCenter();

                if (pos) {
                    starBurst(
                        pos.x,
                        pos.y,
                        165
                    );
                }
            }
        )

        .fromTo(
            centerPulse,
            {
                opacity: 1,
                scale: 0.2
            },
            {
                opacity: 0,
                scale: 7.5,
                duration: 0.95,
                ease: "power3.out"
            },
            "-=0.15"
        )

        .to(
            movingLight,
            {
                scale: 1.8,
                opacity: 1,
                duration: 0.6
            },
            "-=0.8"
        )

        .to(
            ".hero-content",
            {
                opacity: 1,
                duration: 0.25
            },
            "-=0.5"
        )

        .to(
            ".title-line",
            {
                opacity: 1,
                y: 0,
                duration: 0.85,
                stagger: 0.1,
                ease: "power4.out"
            }
        )

        .to(
            heroFlash,
            {
                opacity: 1,
                duration: 0.10
            },
            "-=0.30"
        )

        .to(
            heroFlash,
            {
                opacity: 0,
                duration: 0.42
            }
        )

        .to(
            carpet,
            {
                scale: 0.70,
                y: -60,
                rotation: 390,
                duration: 0.33,
                ease: "power2.out"
            },
            "-=0.40"
        )

        .call(
            () => {

                const pos =
                    getCarpetCenter();

                if (pos) {
                    starBurst(
                        pos.x,
                        pos.y,
                        110
                    );
                }
            }
        )

        .to(
            carpet,
            {
                x:
                    -(
                        window.innerWidth *
                        0.94
                    ),

                y:
                    -(
                        window.innerHeight *
                        0.77
                    ),

                rotation: 520,
                scale: 0.11,
                duration: 1,
                ease: "power4.in"
            }
        )

        .to(
            trailStars,
            {
                opacity: 0,
                duration: 0.4,
                stagger: 0.01
            },
            "-=0.45"
        )

        .to(
            [
                rearGlow,
                movingLight,
                movingGlowCore
            ],
            {
                opacity: 0,
                duration: 0.4
            },
            "-=0.35"
        )

        .to(
            carpet,
            {
                opacity: 0,
                duration: 0.1
            },
            "-=0.1"
        )

        .to(
            orbitRing,
            {
                opacity: 0,
                duration: 0.35
            }
        )

        .to(
            ".hero-text",
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out"
            }
        )

        .to(
            ".hero-button",
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out"
            },
            "-=0.30"
        );


    /* =========================================================
       PRELOADER
    ========================================================= */

    const counter = {
        value: 0
    };


    gsap.timeline({

        onComplete: () => {

            document.body
                .classList
                .remove(
                    "loading"
                );


            heroTimeline.play();


            setTimeout(
                () => {

                    ScrollTrigger.refresh();

                },
                150
            );
        }

    })

        .to(
            counter,
            {
                value: 100,

                duration:
                    prefersReducedMotion
                        ? 0.25
                        : 2.2,

                ease:
                    "power2.inOut",

                onUpdate: () => {

                    const current =
                        Math.round(
                            counter.value
                        );


                    if (
                        preloaderPercent
                    ) {

                        preloaderPercent.textContent =
                            current;
                    }


                    if (
                        preloaderFill
                    ) {

                        preloaderFill.style.width =
                            `${current}%`;
                    }
                }
            }
        )

        .to(
            ".preloader-brand",
            {
                opacity: 0,
                y: -20,
                duration: 0.4
            }
        )

        .to(
            ".preloader-percent",
            {
                opacity: 0,
                y: 20,
                duration: 0.3
            },
            "<"
        )

        .to(
            ".preloader-bottom",
            {
                opacity: 0,
                duration: 0.3
            },
            "<"
        )

        .to(
            ".preloader-line",
            {
                opacity: 0,
                duration: 0.3
            },
            "<"
        )

        .to(
            preloader,
            {
                yPercent: -100,

                duration:
                    prefersReducedMotion
                        ? 0.2
                        : 1.1,

                ease:
                    "power4.inOut"
            }
        )

        .set(
            preloader,
            {
                display: "none"
            }
        );


    /* =========================================================
       CARPET MICRO MOVEMENT
    ========================================================= */

    if (
        !prefersReducedMotion
    ) {

        gsap.to(
            ".carpet-wrapper",
            {
                skewX: 1.6,
                rotation: -2,
                duration: 0.58,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".carpet-glow",
            {
                scale: 1.28,
                opacity: 1,
                duration: 1.15,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );


        gsap.to(
            ".carpet-shadow",
            {
                scaleX: 0.72,
                opacity: 0.08,
                duration: 0.70,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );
    }


    /* =========================================================
       NAVBAR
    ========================================================= */

    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (
            window.scrollY > 40
        ) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );
        }
    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );


    updateNavbar();


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    let menuOpen = false;


    function openMenu() {

        if (
            !menuButton ||
            !mobileMenu
        ) {
            return;
        }


        menuOpen = true;


        document.body.classList.add(
            "menu-open"
        );


        menuButton.classList.add(
            "active"
        );


        gsap.set(
            mobileMenu,
            {
                visibility: "visible",
                pointerEvents: "auto"
            }
        );


        gsap.to(
            mobileMenu,
            {
                opacity: 1,
                duration: 0.4,
                ease: "power3.out"
            }
        );


        gsap.fromTo(
            mobileLinks,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.55,
                stagger: 0.08,
                ease: "power4.out"
            }
        );
    }


    function closeMenu() {

        if (
            !menuButton ||
            !mobileMenu
        ) {
            return;
        }


        menuOpen = false;


        document.body.classList.remove(
            "menu-open"
        );


        menuButton.classList.remove(
            "active"
        );


        gsap.to(
            mobileLinks,
            {
                opacity: 0,
                y: 20,
                duration: 0.2,
                stagger: 0.03
            }
        );


        gsap.to(
            mobileMenu,
            {
                opacity: 0,
                duration: 0.35,

                onComplete: () => {

                    gsap.set(
                        mobileMenu,
                        {
                            visibility:
                                "hidden",

                            pointerEvents:
                                "none"
                        }
                    );
                }
            }
        );
    }


    if (
        menuButton
    ) {

        menuButton.addEventListener(
            "click",
            () => {

                if (
                    menuOpen
                ) {

                    closeMenu();

                } else {

                    openMenu();
                }
            }
        );
    }


    mobileLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                closeMenu
            );
        }
    );


    /* =========================================================
       SMOOTH LINKS
    ========================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !href ||
                            href === "#"
                        ) {
                            return;
                        }


                        const target =
                            document.querySelector(
                                href
                            );


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        const navHeight =
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
                            navHeight
                            -
                            25;


                        window.scrollTo(
                            {
                                top: top,

                                behavior:
                                    prefersReducedMotion
                                        ? "auto"
                                        : "smooth"
                            }
                        );
                    }
                );
            }
        );


    /* =========================================================
       REVEAL FUNCTION
    ========================================================= */

    function reveal(
        target,
        trigger,
        options = {}
    ) {

        gsap.fromTo(
            target,

            {
                opacity: 0,

                y:
                    options.y ??
                    80,

                scale:
                    options.scale ??
                    1
            },

            {
                opacity: 1,
                y: 0,
                scale: 1,

                duration:
                    options.duration ??
                    1,

                stagger:
                    options.stagger ??
                    0,

                ease:
                    options.ease ??
                    "power4.out",

                scrollTrigger:
                    {
                        trigger:
                            trigger,

                        start:
                            options.start ??
                            "top 80%",

                        once: true
                    }
            }
        );
    }


    /* =========================================================
       SECTION MOTIONS
    ========================================================= */

    reveal(
        ".dark-section h2",
        ".dark-section",
        {
            y: 90,
            duration: 1.1
        }
    );


    reveal(
        ".farshineh-content",
        ".farshineh-section",
        {
            y: 90,
            duration: 1.1
        }
    );


    reveal(
        ".grip-content",
        ".grip-section",
        {
            y: 90,
            duration: 1.1
        }
    );


    reveal(
        ".gallery-header",
        ".gallery-section",
        {
            y: 90,
            duration: 1.1
        }
    );


    reveal(
        ".about-content",
        ".about-section",
        {
            y: 90,
            duration: 1.1
        }
    );


    if (
        !prefersReducedMotion
    ) {

        gsap.fromTo(
            ".dark-section h2",
            {
                xPercent: 5
            },
            {
                xPercent: -5,
                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".dark-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1.2
                    }
            }
        );
    }


    /* =========================================================
       FARSHINEH
    ========================================================= */

    reveal(
        ".farshineh-image-wrap",
        ".farshineh-section",
        {
            y: 80,
            scale: 0.94,
            duration: 1.2
        }
    );


    gsap.fromTo(
        ".farshineh-photo",
        {
            scale: 1.18,
            yPercent: -6
        },
        {
            scale: 1.04,
            yPercent: 6,
            ease: "none",

            scrollTrigger:
                {
                    trigger:
                        ".farshineh-section",

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        prefersReducedMotion
                            ? false
                            : 1.2
                }
        }
    );


    if (
        !prefersReducedMotion
    ) {

        gsap.to(
            ".image-circle",
            {
                rotation: 75,
                scale: 1.1,
                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".farshineh-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1
                    }
            }
        );


        gsap.to(
            ".image-overlay-text",
            {
                x: -60,
                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".farshineh-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1
                    }
            }
        );
    }


    /* =========================================================
       GRIP
    ========================================================= */

    reveal(
        ".grip-visual",
        ".grip-section",
        {
            y: 80,
            scale: 0.94,
            duration: 1.2
        }
    );


    gsap.fromTo(
        ".grip-photo",
        {
            scale: 1.18,
            yPercent: -6
        },
        {
            scale: 1.04,
            yPercent: 6,
            ease: "none",

            scrollTrigger:
                {
                    trigger:
                        ".grip-section",

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        prefersReducedMotion
                            ? false
                            : 1.1
                }
        }
    );
        if (
        !prefersReducedMotion
    ) {

        gsap.to(
            ".grip-grid",
            {
                backgroundPosition:
                    "120px 120px",

                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".grip-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1
                    }
            }
        );


        gsap.to(
            ".grip-circle-one",
            {
                rotation: 140,
                scale: 1.12,
                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".grip-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1
                    }
            }
        );


        gsap.to(
            ".grip-circle-two",
            {
                rotation: -170,
                scale: 0.88,
                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".grip-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1
                    }
            }
        );


        gsap.to(
            ".grip-word",
            {
                x: 50,
                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".grip-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1
                    }
            }
        );


        gsap.to(
            ".grip-card",
            {
                y: -12,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );
    }


    /* =========================================================
       GALLERY
    ========================================================= */

    const galleryCards =
        document.querySelectorAll(
            ".gallery-card"
        );


    reveal(
        galleryCards,
        ".gallery-track",
        {
            y: 100,
            scale: 0.94,
            duration: 1,
            stagger: 0.16,
            start: "top 85%"
        }
    );


    const galleryPhotos =
        document.querySelectorAll(
            ".gallery-photo"
        );


    galleryPhotos.forEach(
        (
            photo,
            index
        ) => {

            const direction =
                index % 2 === 0
                    ? 1
                    : -1;


            gsap.fromTo(
                photo,
                {
                    scale: 1.17,

                    yPercent:
                        -7 *
                        direction
                },
                {
                    scale: 1.05,

                    yPercent:
                        7 *
                        direction,

                    ease: "none",

                    scrollTrigger:
                        {
                            trigger:
                                photo.closest(
                                    ".gallery-card"
                                ),

                            start:
                                "top bottom",

                            end:
                                "bottom top",

                            scrub:
                                prefersReducedMotion
                                    ? false
                                    : 1.1
                        }
                }
            );
        }
    );


    galleryCards.forEach(
        card => {

            card.style.transformStyle =
                "preserve-3d";


            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth <=
                        900 ||
                        prefersReducedMotion
                    ) {
                        return;
                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    gsap.to(
                        card,
                        {
                            rotationX:
                                -(
                                    y -
                                    centerY
                                ) /
                                30,

                            rotationY:
                                (
                                    x -
                                    centerX
                                ) /
                                30,

                            scale: 1.02,

                            transformPerspective:
                                900,

                            duration: 0.35,
                            ease: "power2.out"
                        }
                    );
                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(
                        card,
                        {
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                            duration: 0.55,
                            ease: "power3.out"
                        }
                    );
                }
            );
        }
    );


    /* =========================================================
       MARQUEE
    ========================================================= */

    const marqueeContent =
        document.querySelector(
            ".marquee-content"
        );


    if (
        marqueeContent &&
        !prefersReducedMotion
    ) {

        const marqueeWidth =
            marqueeContent.scrollWidth /
            2;


        gsap.to(
            marqueeContent,
            {
                x:
                    -marqueeWidth,

                duration: 18,
                ease: "none",
                repeat: -1
            }
        );
    }


    /* =========================================================
       WHY
    ========================================================= */

    reveal(
        ".why-label",
        ".why-section",
        {
            y: 25,
            duration: 0.7
        }
    );


    reveal(
        ".why-header h2",
        ".why-section",
        {
            y: 90,
            duration: 1,
            start: "top 75%"
        }
    );


    reveal(
        ".why-card",
        ".why-grid",
        {
            y: 70,
            scale: 0.96,
            duration: 0.9,
            stagger: 0.14,
            start: "top 85%"
        }
    );


    /* =========================================================
       ABOUT
    ========================================================= */

    if (
        !prefersReducedMotion
    ) {

        gsap.fromTo(
            ".about-small",
            {
                y: 70
            },
            {
                y: -70,
                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".about-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1.1
                    }
            }
        );


        gsap.fromTo(
            ".about-content h2",
            {
                x: 60
            },
            {
                x: -35,
                ease: "none",

                scrollTrigger:
                    {
                        trigger:
                            ".about-section",

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub: 1
                    }
            }
        );
    }


    /* =========================================================
       CONTACT + FOOTER
    ========================================================= */

    reveal(
        ".contact-top",
        ".contact-section",
        {
            y: 30,
            duration: 0.8
        }
    );


    reveal(
        ".contact-section h2",
        ".contact-section",
        {
            y: 100,
            duration: 1.1,
            start: "top 74%"
        }
    );


    reveal(
        ".contact-description",
        ".contact-description",
        {
            y: 35,
            duration: 0.8,
            start: "top 90%"
        }
    );


    reveal(
        ".contact-links a",
        ".contact-links",
        {
            y: 60,
            duration: 0.8,
            stagger: 0.12,
            start: "top 88%"
        }
    );


    reveal(
        ".contact-address",
        ".contact-address",
        {
            y: 40,
            duration: 0.9,
            start: "top 92%"
        }
    );


    reveal(
        ".footer > *",
        ".footer",
        {
            y: 30,
            duration: 0.7,
            stagger: 0.12,
            start: "top 94%"
        }
    );


    /* =========================================================
       QUIZ ENGINE
    ========================================================= */

    const quizIntro =
        document.querySelector(
            ".quiz-intro"
        );

    const quizApp =
        document.querySelector(
            ".quiz-app"
        );

    const quizStartButton =
        document.querySelector(
            ".quiz-start-button"
        );

    const quizBackButton =
        document.querySelector(
            ".quiz-back-button"
        );

    const quizRestartButton =
        document.querySelector(
            ".quiz-restart-button"
        );

    const quizQuestions =
        document.querySelectorAll(
            ".quiz-question"
        );

    const quizOptions =
        document.querySelectorAll(
            ".quiz-option"
        );

    const progressCurrent =
        document.querySelector(
            ".quiz-progress-current"
        );

    const progressFill =
        document.querySelector(
            ".quiz-progress-fill"
        );

    const quizAnalysis =
        document.querySelector(
            ".quiz-analysis"
        );

    const quizResult =
        document.querySelector(
            ".quiz-result"
        );

    const personalityName =
        document.querySelector(
            ".quiz-personality-name"
        );

    const resultSummary =
        document.querySelector(
            ".quiz-result-summary"
        );

    const closeMatchBox =
        document.querySelector(
            ".quiz-close-match"
        );


    let currentQuestion =
        1;


    const totalQuestions =
        7;


    const answers = {};


    /* =========================================================
       REAL RUG DATABASE
    ========================================================= */

    const rugDatabase = [

        {
            id: "rug-01",
            name: "طوسی کهنه‌نما",
            image: "/static/images/rug-01.jpg",
            brightness: 7,

            colors: {
                cream: 7,
                turquoise: 1,
                red: 1,
                blue: 2,
                earth: 7
            },

            style: {
                minimal: 7,
                modern: 8,
                classic: 6,
                royal: 3,
                artistic: 6
            },

            statement: 4,
            patternDensity: 5,

            rooms: {
                living: 9,
                lounge: 9,
                bedroom: 8,
                entry: 6
            },

            mood: {
                calm: 9,
                warm: 5,
                luxury: 6,
                energy: 2,
                unique: 6
            }
        },


        {
            id: "rug-02",
            name: "سرمه‌ای ترنج‌دار",
            image: "/static/images/rug-02.jpg",
            brightness: 4,

            colors: {
                cream: 5,
                turquoise: 4,
                red: 6,
                blue: 10,
                earth: 3
            },

            style: {
                minimal: 1,
                modern: 3,
                classic: 10,
                royal: 9,
                artistic: 7
            },

            statement: 9,
            patternDensity: 9,

            rooms: {
                living: 8,
                lounge: 6,
                bedroom: 3,
                entry: 5
            },

            mood: {
                calm: 4,
                warm: 6,
                luxury: 10,
                energy: 7,
                unique: 8
            }
        },


        {
            id: "rug-03",
            name: "فیروزه‌ای ترنج‌دار",
            image: "/static/images/rug-03.jpg",
            brightness: 7,

            colors: {
                cream: 5,
                turquoise: 10,
                red: 5,
                blue: 7,
                earth: 3
            },

            style: {
                minimal: 1,
                modern: 5,
                classic: 9,
                royal: 7,
                artistic: 9
            },

            statement: 10,
            patternDensity: 9,

            rooms: {
                living: 9,
                lounge: 8,
                bedroom: 4,
                entry: 7
            },

            mood: {
                calm: 6,
                warm: 5,
                luxury: 8,
                energy: 9,
                unique: 10
            }
        },


        {
            id: "rug-04",
            name: "آبی زیتونی ترنج‌دار",
            image: "/static/images/rug-04.jpg",
            brightness: 4,

            colors: {
                cream: 3,
                turquoise: 2,
                red: 1,
                blue: 10,
                earth: 7
            },

            style: {
                minimal: 1,
                modern: 2,
                classic: 10,
                royal: 9,
                artistic: 7
            },

            statement: 8,
            patternDensity: 9,

            rooms: {
                living: 8,
                lounge: 6,
                bedroom: 3,
                entry: 5
            },

            mood: {
                calm: 5,
                warm: 4,
                luxury: 9,
                energy: 5,
                unique: 7
            }
        },


        {
            id: "rug-05",
            name: "آبی گلدار کلاسیک",
            image: "/static/images/rug-05.jpg",
            brightness: 6,

            colors: {
                cream: 4,
                turquoise: 5,
                red: 3,
                blue: 8,
                earth: 7
            },

            style: {
                minimal: 2,
                modern: 4,
                classic: 9,
                royal: 6,
                artistic: 9
            },

            statement: 7,
            patternDensity: 8,

            rooms: {
                living: 10,
                lounge: 9,
                bedroom: 6,
                entry: 5
            },

            mood: {
                calm: 8,
                warm: 7,
                luxury: 7,
                energy: 5,
                unique: 7
            }
        },


        {
            id: "rug-06",
            name: "شکارگاه کرم",
            image: "/static/images/rug-06.jpg",
            brightness: 9,

            colors: {
                cream: 10,
                turquoise: 1,
                red: 5,
                blue: 2,
                earth: 9
            },

            style: {
                minimal: 1,
                modern: 1,
                classic: 10,
                royal: 9,
                artistic: 10
            },

            statement: 9,
            patternDensity: 10,

            rooms: {
                living: 8,
                lounge: 6,
                bedroom: 3,
                entry: 5
            },

            mood: {
                calm: 4,
                warm: 9,
                luxury: 9,
                energy: 7,
                unique: 10
            }
        },


        {
            id: "rug-07",
            name: "قرمز ترنج‌دار",
            image: "/static/images/rug-07.jpg",
            brightness: 4,

            colors: {
                cream: 4,
                turquoise: 2,
                red: 10,
                blue: 7,
                earth: 3
            },

            style: {
                minimal: 1,
                modern: 2,
                classic: 10,
                royal: 10,
                artistic: 7
            },

            statement: 10,
            patternDensity: 9,

            rooms: {
                living: 9,
                lounge: 7,
                bedroom: 2,
                entry: 7
            },

            mood: {
                calm: 2,
                warm: 10,
                luxury: 10,
                energy: 10,
                unique: 8
            }
        },


        {
            id: "rug-08",
            name: "قهوه‌ای گلدار",
            image: "/static/images/rug-08.jpg",
            brightness: 3,

            colors: {
                cream: 3,
                turquoise: 2,
                red: 4,
                blue: 2,
                earth: 10
            },

            style: {
                minimal: 2,
                modern: 3,
                classic: 9,
                royal: 7,
                artistic: 8
            },

            statement: 8,
            patternDensity: 8,

            rooms: {
                living: 10,
                lounge: 9,
                bedroom: 6,
                entry: 5
            },

            mood: {
                calm: 6,
                warm: 10,
                luxury: 8,
                energy: 5,
                unique: 7
            }
        },


        {
            id: "rug-09",
            name: "طوسی کلاسیک",
            image: "/static/images/rug-09.jpg",
            brightness: 5,

            colors: {
                cream: 7,
                turquoise: 1,
                red: 1,
                blue: 3,
                earth: 8
            },

            style: {
                minimal: 4,
                modern: 7,
                classic: 8,
                royal: 7,
                artistic: 6
            },

            statement: 6,
            patternDensity: 7,

            rooms: {
                living: 9,
                lounge: 8,
                bedroom: 7,
                entry: 5
            },

            mood: {
                calm: 8,
                warm: 5,
                luxury: 8,
                energy: 3,
                unique: 6
            }
        },


        {
            id: "rug-10",
            name: "طوسی طلایی",
            image: "/static/images/rug-10.jpg",
            brightness: 6,

            colors: {
                cream: 7,
                turquoise: 1,
                red: 1,
                blue: 2,
                earth: 10
            },

            style: {
                minimal: 3,
                modern: 6,
                classic: 9,
                royal: 10,
                artistic: 7
            },

            statement: 9,
            patternDensity: 8,

            rooms: {
                living: 9,
                lounge: 7,
                bedroom: 5,
                entry: 6
            },

            mood: {
                calm: 6,
                warm: 8,
                luxury: 10,
                energy: 5,
                unique: 8
            }
        },
                {
            id: "rug-11",
            name: "زرشکی هندسی",
            image: "/static/images/rug-11.jpg",
            brightness: 3,

            colors: {
                cream: 3,
                turquoise: 1,
                red: 10,
                blue: 2,
                earth: 6
            },

            style: {
                minimal: 2,
                modern: 4,
                classic: 8,
                royal: 5,
                artistic: 9
            },

            statement: 9,
            patternDensity: 8,

            rooms: {
                living: 8,
                lounge: 8,
                bedroom: 4,
                entry: 7
            },

            mood: {
                calm: 3,
                warm: 9,
                luxury: 6,
                energy: 9,
                unique: 10
            }
        },


        {
            id: "rug-12",
            name: "کرم روشن کلاسیک",
            image: "/static/images/rug-12.jpg",
            brightness: 10,

            colors: {
                cream: 10,
                turquoise: 1,
                red: 2,
                blue: 1,
                earth: 6
            },

            style: {
                minimal: 7,
                modern: 7,
                classic: 7,
                royal: 4,
                artistic: 5
            },

            statement: 3,
            patternDensity: 4,

            rooms: {
                living: 8,
                lounge: 9,
                bedroom: 10,
                entry: 5
            },

            mood: {
                calm: 10,
                warm: 7,
                luxury: 6,
                energy: 2,
                unique: 4
            }
        },


        {
            id: "rug-13",
            name: "نقره‌ای بیضی",
            image: "/static/images/rug-13.jpg",
            brightness: 8,

            colors: {
                cream: 8,
                turquoise: 2,
                red: 1,
                blue: 4,
                earth: 6
            },

            style: {
                minimal: 8,
                modern: 9,
                classic: 5,
                royal: 5,
                artistic: 8
            },

            statement: 5,
            patternDensity: 4,

            rooms: {
                living: 8,
                lounge: 9,
                bedroom: 8,
                entry: 6
            },

            mood: {
                calm: 9,
                warm: 5,
                luxury: 8,
                energy: 3,
                unique: 8
            }
        },


        {
            id: "rug-14",
            name: "ذغالی کرم کهنه‌نما",
            image: "/static/images/rug-14.jpg",
            brightness: 4,

            colors: {
                cream: 7,
                turquoise: 1,
                red: 1,
                blue: 3,
                earth: 8
            },

            style: {
                minimal: 7,
                modern: 9,
                classic: 6,
                royal: 4,
                artistic: 7
            },

            statement: 6,
            patternDensity: 5,

            rooms: {
                living: 9,
                lounge: 9,
                bedroom: 7,
                entry: 7
            },

            mood: {
                calm: 7,
                warm: 5,
                luxury: 8,
                energy: 4,
                unique: 8
            }
        }

    ];


    /* =========================================================
       QUIZ HELPERS
    ========================================================= */

    function updateQuizProgress() {

        if (
            progressCurrent
        ) {

            progressCurrent.textContent =
                String(
                    currentQuestion
                ).padStart(
                    2,
                    "0"
                );
        }


        if (
            progressFill
        ) {

            const percentage =
                (
                    currentQuestion /
                    totalQuestions
                ) *
                100;


            progressFill.style.width =
                `${percentage}%`;
        }


        if (
            quizBackButton
        ) {

            quizBackButton.style.opacity =
                currentQuestion === 1
                    ? "0.35"
                    : "1";


            quizBackButton.style.pointerEvents =
                currentQuestion === 1
                    ? "none"
                    : "auto";
        }
    }


    function showQuestion(
        number,
        direction = 1
    ) {

        quizQuestions.forEach(
            question => {

                question.classList.remove(
                    "active"
                );

                question.style.display =
                    "none";
            }
        );


        const target =
            document.querySelector(
                `.quiz-question[data-question="${number}"]`
            );


        if (!target) {
            return;
        }


        target.style.display =
            "grid";


        target.classList.add(
            "active"
        );


        gsap.fromTo(
            target,
            {
                opacity: 0,

                x:
                    direction > 0
                        ? -60
                        : 60
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.55,
                ease: "power4.out"
            }
        );


        gsap.fromTo(
            target.querySelectorAll(
                ".quiz-option"
            ),
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.05,
                ease: "power3.out"
            }
        );


        updateQuizProgress();
    }


    function saveAnswer(
        option
    ) {

        const question =
            option.closest(
                ".quiz-question"
            );


        if (!question) {
            return;
        }


        const key =
            question.dataset.key;


        const storedAnswer =
            {
                value:
                    option.dataset.value
            };


        Object.entries(
            option.dataset
        ).forEach(
            ([
                dataKey,
                dataValue
            ]) => {

                if (
                    dataKey ===
                    "value"
                ) {
                    return;
                }


                const numeric =
                    Number(
                        dataValue
                    );


                storedAnswer[
                    dataKey
                ] =
                    Number.isNaN(
                        numeric
                    )
                        ? dataValue
                        : numeric;
            }
        );


        answers[
            key
        ] =
            storedAnswer;
    }


    /* =========================================================
       START QUIZ
    ========================================================= */

    if (
        quizStartButton &&
        quizIntro &&
        quizApp
    ) {

        quizStartButton.addEventListener(
            "click",
            () => {

                gsap.to(
                    quizIntro,
                    {
                        opacity: 0,
                        y: -35,
                        duration: 0.45,
                        ease: "power3.in",

                        onComplete: () => {

                            quizIntro.style.display =
                                "none";


                            quizApp.style.display =
                                "block";


                            currentQuestion =
                                1;


                            showQuestion(
                                1
                            );


                            gsap.fromTo(
                                quizApp,
                                {
                                    opacity: 0,
                                    y: 45
                                },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.7,
                                    ease: "power4.out"
                                }
                            );


                            setTimeout(
                                () => {
                                    ScrollTrigger.refresh();
                                },
                                100
                            );
                        }
                    }
                );
            }
        );
    }


    /* =========================================================
       OPTION CLICK
    ========================================================= */

    quizOptions.forEach(
        option => {

            option.addEventListener(
                "click",
                () => {

                    const question =
                        option.closest(
                            ".quiz-question"
                        );


                    if (!question) {
                        return;
                    }


                    question
                        .querySelectorAll(
                            ".quiz-option"
                        )
                        .forEach(
                            item => {

                                item.classList.remove(
                                    "selected"
                                );
                            }
                        );


                    option.classList.add(
                        "selected"
                    );


                    saveAnswer(
                        option
                    );


                    gsap.to(
                        option,
                        {
                            scale: 0.97,
                            duration: 0.12,
                            yoyo: true,
                            repeat: 1,
                            ease: "power2.inOut"
                        }
                    );


                    setTimeout(
                        () => {

                            if (
                                currentQuestion <
                                totalQuestions
                            ) {

                                currentQuestion++;

                                showQuestion(
                                    currentQuestion,
                                    1
                                );

                            } else {

                                runQuizAnalysis();
                            }

                        },
                        320
                    );
                }
            );
        }
    );


    /* =========================================================
       BACK BUTTON
    ========================================================= */

    if (
        quizBackButton
    ) {

        quizBackButton.addEventListener(
            "click",
            () => {

                if (
                    currentQuestion <= 1
                ) {
                    return;
                }


                currentQuestion--;


                showQuestion(
                    currentQuestion,
                    -1
                );
            }
        );
    }


    /* =========================================================
       VECTOR SIMILARITY
    ========================================================= */

    function vectorSimilarity(
        userVector,
        rugVector,
        keys
    ) {

        let totalDifference =
            0;


        keys.forEach(
            key => {

                const userValue =
                    Number(
                        userVector[
                            key
                        ] || 0
                    );


                const rugValue =
                    Number(
                        rugVector[
                            key
                        ] || 0
                    );


                totalDifference +=
                    Math.abs(
                        userValue -
                        rugValue
                    );
            }
        );


        const maxDifference =
            keys.length *
            10;


        return (
            1 -
            totalDifference /
            maxDifference
        );
    }


    function scalarSimilarity(
        userValue,
        rugValue
    ) {

        return (
            1 -
            Math.min(
                Math.abs(
                    userValue -
                    rugValue
                ) /
                10,
                1
            )
        );
    }


    /* =========================================================
       BUILD USER PROFILE
    ========================================================= */

    function buildUserProfile() {

        const color =
            answers.color || {};


        const style =
            answers.style || {};


        const room =
            answers.room || {};


        const mood =
            answers.mood || {};


        return {

            colors:
                {
                    cream:
                        color.colorCream || 0,

                    turquoise:
                        color.colorTurquoise || 0,

                    red:
                        color.colorRed || 0,

                    blue:
                        color.colorBlue || 0,

                    earth:
                        color.colorEarth || 0
                },


            style:
                {
                    minimal:
                        style.styleMinimal || 0,

                    modern:
                        style.styleModern || 0,

                    classic:
                        style.styleClassic || 0,

                    royal:
                        style.styleRoyal || 0,

                    artistic:
                        style.styleArtistic || 0
                },


            statement:
                answers.statement
                    ? answers.statement.statement
                    : 5,


            patternDensity:
                answers.pattern
                    ? answers.pattern.patternDensity
                    : 5,


            rooms:
                {
                    living:
                        room.roomLiving || 0,

                    lounge:
                        room.roomLounge || 0,

                    bedroom:
                        room.roomBedroom || 0,

                    entry:
                        room.roomEntry || 0
                },


            mood:
                {
                    calm:
                        mood.moodCalm || 0,

                    warm:
                        mood.moodWarm || 0,

                    luxury:
                        mood.moodLuxury || 0,

                    energy:
                        mood.moodEnergy || 0,

                    unique:
                        mood.moodUnique || 0
                },


            dislike:
                answers.dislike
                    ? answers.dislike.dislike
                    : "none"
        };
    }


    /* =========================================================
       SCORE RUG
    ========================================================= */

    function scoreRug(
        profile,
        rug
    ) {

        const colorScore =
            vectorSimilarity(
                profile.colors,
                rug.colors,
                [
                    "cream",
                    "turquoise",
                    "red",
                    "blue",
                    "earth"
                ]
            );


        const styleScore =
            vectorSimilarity(
                profile.style,
                rug.style,
                [
                    "minimal",
                    "modern",
                    "classic",
                    "royal",
                    "artistic"
                ]
            );


        const patternScore =
            scalarSimilarity(
                profile.patternDensity,
                rug.patternDensity
            );


        const statementScore =
            scalarSimilarity(
                profile.statement,
                rug.statement
            );


        const roomScore =
            vectorSimilarity(
                profile.rooms,
                rug.rooms,
                [
                    "living",
                    "lounge",
                    "bedroom",
                    "entry"
                ]
            );


        const moodScore =
            vectorSimilarity(
                profile.mood,
                rug.mood,
                [
                    "calm",
                    "warm",
                    "luxury",
                    "energy",
                    "unique"
                ]
            );


        let weightedScore =
            (
                colorScore *
                0.25
            )
            +
            (
                styleScore *
                0.22
            )
            +
            (
                patternScore *
                0.15
            )
            +
            (
                roomScore *
                0.15
            )
            +
            (
                moodScore *
                0.13
            )
            +
            (
                statementScore *
                0.10
            );


        let score =
            weightedScore *
            100;


        /* =====================================================
           NEGATIVE PREFERENCE PENALTIES
        ===================================================== */

        if (
            profile.dislike ===
            "busy" &&
            rug.patternDensity >=
            8
        ) {

            score -=
                16;
        }


        if (
            profile.dislike ===
            "red" &&
            rug.colors.red >=
            7
        ) {

            score -=
                20;
        }


        if (
            profile.dislike ===
            "light" &&
            rug.brightness >=
            8
        ) {

            score -=
                17;
        }


        if (
            profile.dislike ===
            "classic" &&
            rug.style.classic >=
            7
        ) {

            score -=
                20;
        }


        score =
            Math.max(
                35,
                Math.min(
                    98,
                    score
                )
            );


        return {

            score:
                Math.round(
                    score
                ),

            breakdown:
                {
                    color:
                        colorScore,

                    style:
                        styleScore,

                    pattern:
                        patternScore,

                    room:
                        roomScore,

                    mood:
                        moodScore,

                    statement:
                        statementScore
                }
        };
    }
        /* =========================================================
       PERSONALITY
    ========================================================= */

    function highestKey(
        object
    ) {

        return Object
            .entries(
                object
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    b[1] -
                    a[1]
            )[0][0];
    }


    function getPersonality(
        profile
    ) {

        const styleKey =
            highestKey(
                profile.style
            );


        const moodKey =
            highestKey(
                profile.mood
            );


        const personalityMap =
            {
                minimal:
                    "مینیمالِ آرام",

                modern:
                    "مدرنِ شیک",

                classic:
                    "اصیل و ماندگار",

                royal:
                    "سلطنتی و باشکوه",

                artistic:
                    "هنری و متفاوت"
            };


        const moodMap =
            {
                calm:
                    "آرام",

                warm:
                    "گرم",

                luxury:
                    "لوکس",

                energy:
                    "پرانرژی",

                unique:
                    "خاص"
            };


        return {
            title:
                personalityMap[
                    styleKey
                ],

            mood:
                moodMap[
                    moodKey
                ]
        };
    }


    /* =========================================================
       RESULT REASON
    ========================================================= */

    function createReason(
        result
    ) {

        const breakdown =
            result.breakdown;


        const sorted =
            Object.entries(
                breakdown
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    b[1] -
                    a[1]
            );


        const labels =
            {
                color:
                    "رنگ",

                style:
                    "سبک",

                pattern:
                    "میزان شلوغی طرح",

                room:
                    "فضای استفاده",

                mood:
                    "حس موردنظر",

                statement:
                    "میزان چشمگیر بودن"
            };


        const first =
            labels[
                sorted[0][0]
            ];


        const second =
            labels[
                sorted[1][0]
            ];


        return (
            `این انتخاب از نظر ${first} و ${second} بیشترین هماهنگی را با جواب‌های تو دارد.`
        );
    }


    /* =========================================================
       RESULT SUMMARY
    ========================================================= */

    function createSummary(
        profile,
        personality
    ) {

        const color =
            highestKey(
                profile.colors
            );


        const colorNames =
            {
                cream:
                    "رنگ‌های روشن و کرم",

                turquoise:
                    "فیروزه‌ای و آبی",

                red:
                    "زرشکی و قرمز",

                blue:
                    "طیف‌های آبی",

                earth:
                    "رنگ‌های خاکی و طبیعی"
            };


        let patternText =
            "طرح‌های متعادل";


        if (
            profile.patternDensity <=
            3
        ) {

            patternText =
                "طرح‌های خلوت";

        } else if (
            profile.patternDensity >=
            8
        ) {

            patternText =
                "طرح‌های پرجزئیات";
        }


        return (
            `انتخاب‌هات نشون میده سلیقه‌ات بیشتر ${personality.mood} و ${personality.title}ه. ` +
            `به ${colorNames[color]} و ${patternText} نزدیک‌تری؛ ` +
            `برای همین پیشنهادها بر اساس همین ترکیب مرتب شدن.`
        );
    }


    /* =========================================================
       RENDER RESULTS
    ========================================================= */

    function renderResults(
        sortedResults,
        profile
    ) {

        const resultCards =
            document.querySelectorAll(
                ".quiz-result-card"
            );


        const personality =
            getPersonality(
                profile
            );


        if (
            personalityName
        ) {

            personalityName.textContent =
                `${personality.title} / ${personality.mood}`;
        }


        if (
            resultSummary
        ) {

            resultSummary.textContent =
                createSummary(
                    profile,
                    personality
                );
        }


        sortedResults
            .slice(
                0,
                3
            )
            .forEach(
                (
                    result,
                    index
                ) => {

                    const card =
                        resultCards[
                            index
                        ];


                    if (!card) {
                        return;
                    }


                    const image =
                        card.querySelector(
                            ".quiz-result-photo"
                        );


                    const percent =
                        card.querySelector(
                            ".quiz-match-percent"
                        );


                    const name =
                        card.querySelector(
                            ".quiz-result-name"
                        );


                    const reason =
                        card.querySelector(
                            ".quiz-result-reason"
                        );


                    if (image) {

                        image.src =
                            result.rug.image;
                    }


                    if (percent) {

                        percent.textContent =
                            `${result.score}%`;
                    }


                    if (name) {

                        name.textContent =
                            result.rug.name;
                    }


                    if (reason) {

                        reason.textContent =
                            createReason(
                                result
                            );
                    }
                }
            );


        if (
            closeMatchBox
        ) {

            const difference =
                Math.abs(
                    sortedResults[0]
                        .score
                    -
                    sortedResults[1]
                        .score
                );


            if (
                difference <= 4
            ) {

                closeMatchBox.style.display =
                    "flex";


                const text =
                    closeMatchBox
                        .querySelector(
                            "p"
                        );


                if (text) {

                    text.textContent =
                        `بین «${sortedResults[0].rug.name}» و «${sortedResults[1].rug.name}» فقط ${difference}٪ اختلاف افتاد؛ سلیقه‌ات دقیقاً بین این دو حال‌وهوا قرار گرفته.`;
                }

            } else {

                closeMatchBox.style.display =
                    "none";
            }
        }
    }


    /* =========================================================
       ANALYZE
    ========================================================= */

    function runQuizAnalysis() {

        quizQuestions.forEach(
            question => {

                question.style.display =
                    "none";

                question.classList.remove(
                    "active"
                );
            }
        );


        if (
            quizBackButton
        ) {

            quizBackButton.style.display =
                "none";
        }


        if (
            quizAnalysis
        ) {

            quizAnalysis.style.display =
                "flex";


            gsap.fromTo(
                quizAnalysis,
                {
                    opacity: 0,
                    scale: 0.96
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power4.out"
                }
            );
        }


        if (
            !prefersReducedMotion
        ) {

            gsap.to(
                ".quiz-analysis-orbit",
                {
                    rotation: 360,
                    duration: 3,
                    repeat: -1,
                    ease: "none"
                }
            );


            gsap.to(
                ".quiz-analysis-orbit span",
                {
                    scale: 1.7,
                    opacity: 0.4,
                    duration: 0.7,
                    repeat: -1,
                    yoyo: true,
                    stagger: 0.15
                }
            );
        }


        setTimeout(
            () => {

                const profile =
                    buildUserProfile();


                const scored =
                    rugDatabase
                        .map(
                            rug => {

                                const result =
                                    scoreRug(
                                        profile,
                                        rug
                                    );


                                return {
                                    rug:
                                        rug,

                                    score:
                                        result.score,

                                    breakdown:
                                        result.breakdown
                                };
                            }
                        )
                        .sort(
                            (
                                a,
                                b
                            ) =>
                                b.score -
                                a.score
                        );


                renderResults(
                    scored,
                    profile
                );


                gsap.to(
                    quizAnalysis,
                    {
                        opacity: 0,
                        y: -25,
                        duration: 0.4,

                        onComplete: () => {

                            quizAnalysis.style.display =
                                "none";


                            quizResult.style.display =
                                "block";


                            gsap.fromTo(
                                quizResult,
                                {
                                    opacity: 0,
                                    y: 50
                                },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.75,
                                    ease: "power4.out"
                                }
                            );


                            gsap.fromTo(
                                ".quiz-result-card",
                                {
                                    opacity: 0,
                                    y: 55,
                                    scale: 0.96
                                },
                                {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    duration: 0.7,
                                    stagger: 0.12,
                                    ease: "power4.out"
                                }
                            );


                            setTimeout(
                                () => {

                                    ScrollTrigger.refresh();

                                },
                                100
                            );
                        }
                    }
                );

            },
            2300
        );
    }


    /* =========================================================
       RESTART QUIZ
    ========================================================= */

    if (
        quizRestartButton
    ) {

        quizRestartButton.addEventListener(
            "click",
            () => {

                Object
                    .keys(
                        answers
                    )
                    .forEach(
                        key => {

                            delete answers[
                                key
                            ];
                        }
                    );


                document
                    .querySelectorAll(
                        ".quiz-option"
                    )
                    .forEach(
                        option => {

                            option.classList.remove(
                                "selected"
                            );
                        }
                    );


                if (
                    quizResult
                ) {

                    quizResult.style.display =
                        "none";
                }


                if (
                    quizAnalysis
                ) {

                    quizAnalysis.style.display =
                        "none";
                }


                if (
                    quizBackButton
                ) {

                    quizBackButton.style.display =
                        "block";
                }


                currentQuestion =
                    1;


                showQuestion(
                    1
                );


                window.scrollTo(
                    {
                        top:
                            document
                                .querySelector(
                                    "#rug-finder"
                                )
                                .getBoundingClientRect()
                                .top
                            +
                            window.scrollY
                            -
                            80,

                        behavior:
                            "smooth"
                    }
                );
            }
        );
    }
        /* =========================================================
       MAGNETIC BUTTONS
    ========================================================= */

    const magneticButtons =
        document.querySelectorAll(
            ".hero-button, .nav-contact"
        );


    magneticButtons.forEach(
        button => {

            button.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth <=
                        900 ||
                        prefersReducedMotion
                    ) {
                        return;
                    }


                    const rect =
                        button.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    gsap.to(
                        button,
                        {
                            x:
                                x * 0.10,

                            y:
                                y * 0.10,

                            duration: 0.35,
                            ease: "power3.out"
                        }
                    );
                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(
                        button,
                        {
                            x: 0,
                            y: 0,
                            duration: 0.5,
                            ease:
                                "elastic.out(1,0.4)"
                        }
                    );
                }
            );
        }
    );


    /* =========================================================
       ACTIVE NAV
    ========================================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    function activateLink(
        id
    ) {

        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    )
                    ===
                    `#${id}`
                ) {

                    link.classList.add(
                        "active"
                    );
                }
            }
        );
    }


    sections.forEach(
        section => {

            ScrollTrigger.create(
                {
                    trigger:
                        section,

                    start:
                        "top 40%",

                    end:
                        "bottom 40%",

                    onEnter:
                        () => {

                            activateLink(
                                section.id
                            );
                        },

                    onEnterBack:
                        () => {

                            activateLink(
                                section.id
                            );
                        }
                }
            );
        }
    );


    /* =========================================================
       RESIZE
    ========================================================= */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        ScrollTrigger.refresh();

                    },
                    250
                );
        }
    );


    /* =========================================================
       FINAL
    ========================================================= */

    updateProgress();


    setTimeout(
        () => {

            ScrollTrigger.refresh();

        },
        400
    );

});