
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
    gsap.registerPlugin(SplitText);
    const tl = gsap.timeline();

    const splitItem = SplitText.create(".item", {
      type: "chars",
      charsClass: "char++",
    });
    
    gsap.set(".item", {
        yPercent: 100,
      opacity: 1,
    });

    tl
    .to(".menu-overlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power2.inOut"
     })
     .to(".menu-underoverlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power2.inOut",
        delay: -0.75,
        onComplete: () => splitItem.revert()
      });   
      
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    gsap.registerPlugin(SplitText);
    const tl = gsap.timeline();

    gsap.set(".item", {
        yPercent: -200,
      opacity: 1,
    });

    tl
    .to(".menu-underoverlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut"
      })
    .to(".menu-overlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
        delay: -0.75,
        onComplete: () => {
            router.push(href);  
        }
    })
}
