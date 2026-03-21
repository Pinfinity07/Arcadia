import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHeroElements = () => {
  // Animate nav
  const nav = document.querySelector('nav');
  if (nav) {
    gsap.from(nav, {
      duration: 0.6,
      opacity: 0,
      y: -20,
      ease: 'power2.out',
    });
  }

  // Animate hero title spans with stagger
  const heroTitle = document.querySelector('h1');
  if (heroTitle) {
    const spans = heroTitle.querySelectorAll('span');
    gsap.from(spans, {
      duration: 0.8,
      opacity: 0,
      y: 30,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2,
    });
  }

  // Animate hero description
  const heroParagraphs = document.querySelectorAll('section')[0]?.querySelectorAll('p');
  if (heroParagraphs && heroParagraphs.length > 0) {
    gsap.from(heroParagraphs[0], {
      duration: 0.8,
      opacity: 0,
      y: 20,
      delay: 0.6,
      ease: 'power2.out',
    });
  }

  // Animate hero buttons with stagger
  const heroSection = document.querySelector('section');
  if (heroSection) {
    const buttons = heroSection.querySelectorAll('button');
    if (buttons.length >= 2) {
      gsap.from([buttons[0], buttons[1]], {
        duration: 0.7,
        opacity: 0,
        y: 20,
        delay: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }
  }

  // Animate stats
  const stats = document.querySelector('section')?.querySelector('div[class*="flex-items-center"][class*="gap-4"]');
  if (stats) {
    gsap.from(stats, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      delay: 1.0,
      ease: 'power2.out',
    });
  }

  // Animate clip of the day container with parallax on scroll
  const clipContainer = document.querySelector('section')?.querySelector('div[class*="flex-1"]');
  if (clipContainer) {
    gsap.from(clipContainer.querySelector('img'), {
      duration: 1,
      opacity: 0,
      scale: 0.9,
      delay: 0.4,
      ease: 'power2.out',
    });

    // Add subtle parallax on scroll
    gsap.to(clipContainer, {
      scrollTrigger: {
        trigger: clipContainer,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      y: -30,
      ease: 'none',
    });
  }
};

export const animateFeatureCards = () => {
  // Get feature section
  const sections = document.querySelectorAll('section');
  const featureSection = sections[1]; // Second section is features
  
  if (featureSection) {
    const cards = featureSection.querySelectorAll('div[class*="bg-\\[#210F36\\]"]');
    
    // Set initial state
    gsap.set(cards, {
      opacity: 0,
      y: 40,
    });

    // Animate on scroll
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        duration: 0.7,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
        delay: index * 0.15,
      });

      // Add hover lift effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -8,
          boxShadow: '0 20px 25px rgba(168, 85, 247, 0.1)',
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
          ease: 'power2.out',
        });
      });
    });
  }
};

export const animateGameCards = () => {
  const sections = document.querySelectorAll('section');
  const gamesSection = sections[2]; // Third section is games
  
  if (gamesSection) {
    const cards = gamesSection.querySelectorAll('div[class*="overflow-hidden"]');
    
    // Set initial state
    gsap.set(cards, {
      opacity: 0,
      scale: 0.85,
    });

    // Animate on scroll
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        duration: 0.8,
        opacity: 1,
        scale: 1,
        ease: 'back.out',
        delay: index * 0.15,
      });

      // Add hover scale effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          scale: 1.05,
          ease: 'power2.out',
        });

        // Scale the image inside
        const image = card.querySelector('img');
        if (image) {
          gsap.to(image, {
            duration: 0.3,
            scale: 1.1,
            ease: 'power2.out',
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out',
        });

        const image = card.querySelector('img');
        if (image) {
          gsap.to(image, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out',
          });
        }
      });
    });
  }
};

export const animateCTASection = () => {
  const sections = document.querySelectorAll('section');
  let ctaSection: HTMLElement | null = null;
  
  // Find CTA section by looking for "Ready to enter the Arcadia hub?" text
  sections.forEach((section) => {
    const el = section as HTMLElement;
    if (el.textContent?.includes('Ready to enter')) {
      ctaSection = el;
    }
  });

  if (ctaSection) {
    const ctaBox = (ctaSection as HTMLElement).querySelector('div[class*="from-purple"]') as HTMLElement | null;
    
    if (ctaBox) {
      gsap.set(ctaBox, {
        opacity: 0,
        y: 40,
        scale: 0.95,
      });

      gsap.to(ctaBox, {
        scrollTrigger: {
          trigger: ctaBox,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'power2.out',
      });

      // Add subtle scale on hover for CTA buttons
      const ctaButtons = ctaBox.querySelectorAll('button');
      ctaButtons.forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            duration: 0.3,
            scale: 1.08,
            ease: 'power2.out',
          });
        });

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out',
          });
        });
      });
    }
  }
};

export const animateFooter = () => {
  const footer = document.querySelector('footer');
  
  if (footer) {
    const footerContent = footer.querySelector('div');
    
    gsap.set(footerContent, {
      opacity: 0,
    });

    gsap.to(footerContent, {
      scrollTrigger: {
        trigger: footer,
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
      duration: 0.8,
      opacity: 1,
      ease: 'power2.out',
    });

    // Add hover effects for footer links
    const footerLinks = footer.querySelectorAll('a');
    footerLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          duration: 0.3,
          color: '#a855f7',
          ease: 'power2.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          duration: 0.3,
          color: '#9ca3af',
          ease: 'power2.out',
        });
      });
    });
  }
};

export const animateSectionHeadings = () => {
  // Get all h2 headings in sections
  const headings = document.querySelectorAll('h2');
  
  headings.forEach((heading) => {
    gsap.set(heading, {
      opacity: 0,
      y: 30,
    });

    gsap.to(heading, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: 'power3.out',
    });
  });
};

export const addParagraphAnimations = () => {
  // Animate description paragraphs on scroll
  const paragraphs = document.querySelectorAll('p[class*="text-gray-400"]');
  
  paragraphs.forEach((para) => {
    gsap.set(para, {
      opacity: 0,
      y: 20,
    });

    gsap.to(para, {
      scrollTrigger: {
        trigger: para,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      duration: 0.7,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      delay: 0.1,
    });
  });
};

export const addNavInteractions = () => {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        duration: 0.3,
        color: '#a855f7',
        ease: 'power2.out',
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        duration: 0.3,
        color: '#CAD4E0',
        ease: 'power2.out',
      });
    });
  });
};

export const addButtonHoverEffects = () => {
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out',
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out',
      });
    });
  });
};

export const initializeAllAnimations = () => {
  // Small delay to ensure DOM is fully ready
  setTimeout(() => {
    animateHeroElements();
    animateFeatureCards();
    animateGameCards();
    animateCTASection();
    animateFooter();
    animateSectionHeadings();
    addParagraphAnimations();
    addNavInteractions();
    addButtonHoverEffects();
  }, 100);
};
