import { useEffect } from "react";

import ScrollReveal from "scrollreveal";

export function AnimationScroll() {
  return useEffect(() => {
    ScrollReveal({
      distance: "60px",
      duration: 1200
    });
    ScrollReveal().reveal(".top", { delay: 300, origin: "top" });
    ScrollReveal().reveal(".left", { delay: 600, origin: "left" });
    ScrollReveal().reveal(".left-2", { delay: 700, origin: "left" });
    ScrollReveal().reveal(".right", { delay: 500, origin: "right" });
    ScrollReveal().reveal(".right-2", { delay: 700, origin: "right" });
    ScrollReveal().reveal(".bottom", { delay: 500, origin: "bottom" });

    ScrollReveal().reveal(".img", { delay: 400, origin: "right" });

    ScrollReveal().reveal(".bottom-1", { delay: 300, origin: "bottom" });
    ScrollReveal().reveal(".bottom-2", { delay: 400, origin: "bottom" });
    ScrollReveal().reveal(".bottom-3", { delay: 500, origin: "bottom" });
    ScrollReveal().reveal(".bottom-4", { delay: 600, origin: "bottom" });
    ScrollReveal().reveal(".bottom-5", { delay: 700, origin: "bottom" });
    ScrollReveal().reveal(".bottom-6", { delay: 800, origin: "bottom" });
    ScrollReveal().reveal(".bottom-7", { delay: 900, origin: "bottom" });
    ScrollReveal().reveal(".bottom-8", { delay: 1000, origin: "bottom" });
    ScrollReveal().reveal(".bottom-9", { delay: 1100, origin: "bottom" });
    ScrollReveal().reveal(".bottom-10", { delay: 1200, origin: "bottom" });
    ScrollReveal().reveal(".bottom-11", { delay: 1300, origin: "bottom" });
    ScrollReveal().reveal(".bottom-12", { delay: 1400, origin: "bottom" });
  }, []);
}
