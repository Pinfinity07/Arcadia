import gsap from 'gsap';

export const animatePageTransition = () => {
  // Keep page visible instantly - no fade transition to prevent grey screen
  const pageTransition = document.querySelector('.page-transition');
  if (pageTransition) {
    gsap.set(pageTransition, {
      opacity: 1,
      clearProps: 'all',
    });
  }
};

export const initializeLoginAnimations = () => {
  // Reset animation flag on each page load for fresh animations
  document.documentElement.removeAttribute('data-login-animated');
  
  setTimeout(() => {
    // Animate hero content on the left
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      const heading = heroContent.querySelector('h1');
      const description = heroContent.querySelector('p');
      const status = heroContent.querySelector('div[class*="flex-items-center"]');

      // Animate heading
      if (heading) {
        const spans = heading.querySelectorAll('span');
        gsap.from(spans, {
          duration: 0.5,
          opacity: 0,
          y: 15,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      // Animate description
      if (description) {
        gsap.from(description, {
          duration: 0.5,
          opacity: 0,
          y: 12,
          delay: 0.2,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }

      // Animate status
      if (status) {
        gsap.from(status, {
          duration: 0.5,
          opacity: 0,
          y: 12,
          delay: 0.3,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }
    }

    // Animate login header
    const loginHeader = document.querySelector('.login-header');
    if (loginHeader) {
      gsap.from(loginHeader, {
        duration: 0.5,
        opacity: 0,
        x: 12,
        delay: 0.05,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate tabs
    const loginTabs = document.querySelector('.login-tabs');
    if (loginTabs) {
      gsap.from(loginTabs, {
        duration: 0.5,
        opacity: 0,
        y: 10,
        delay: 0.1,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate form groups
    const formGroups = document.querySelectorAll('.form-group');
    gsap.from(formGroups, {
      duration: 0.4,
      opacity: 0,
      y: 10,
      stagger: 0.06,
      delay: 0.2,
      ease: 'power2.out',
      clearProps: 'all',
    });

    // Animate sign in button
    const signInBtn = document.querySelector('.sign-in-btn');
    if (signInBtn) {
      gsap.from(signInBtn, {
        duration: 0.4,
        opacity: 0,
        y: 10,
        delay: 0.4,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate social buttons
    const socialButtons = document.querySelectorAll('[class*="social-buttons"] button');
    gsap.from(socialButtons, {
      duration: 0.4,
      opacity: 0,
      y: 10,
      stagger: 0.06,
      delay: 0.48,
      ease: 'power2.out',
      clearProps: 'all',
    });

    // Add input focus animations (no state persistence)
    addInputFocusAnimations();
    // Add button hover effects (no state persistence)
    addLoginButtonHoverEffects();
  }, 10);
};

const addInputFocusAnimations = () => {
  const inputs = document.querySelectorAll('input[type="email"], input[type="password"], input[type="text"]');
  
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        duration: 0.2,
        borderColor: '#a855f7',
        ease: 'power2.out',
      });
    });

    input.addEventListener('blur', () => {
      gsap.to(input, {
        duration: 0.2,
        borderColor: '#2A1840',
        ease: 'power2.out',
      });
    });
  });
};

const addLoginButtonHoverEffects = () => {
  // Sign in button hover
  const signInBtn = document.querySelector('.sign-in-btn');
  if (signInBtn) {
    signInBtn.addEventListener('mouseenter', () => {
      gsap.to(signInBtn, {
        duration: 0.25,
        scale: 1.02,
        ease: 'power2.out',
      });

      const arrow = signInBtn.querySelector('span');
      if (arrow) {
        gsap.to(arrow, {
          duration: 0.25,
          x: 4,
          ease: 'power2.out',
        });
      }
    });

    signInBtn.addEventListener('mouseleave', () => {
      gsap.to(signInBtn, {
        duration: 0.25,
        scale: 1,
        ease: 'power2.out',
      });

      const arrow = signInBtn.querySelector('span');
      if (arrow) {
        gsap.to(arrow, {
          duration: 0.25,
          x: 0,
          ease: 'power2.out',
        });
      }
    });
  }

  // Social buttons hover
  const socialButtons = document.querySelectorAll('[class*="social-buttons"] button');
  socialButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.2,
        borderColor: '#a855f7',
        backgroundColor: '#2A1840',
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.2,
        borderColor: '#2A1840',
        backgroundColor: '#210F36',
        ease: 'power2.out',
      });
    });
  });
};
