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

export const animateFormTransition = () => {
  // Smooth fade-out and fade-in for form when switching between login/signup
  const authForm = document.querySelector('.auth-form');
  const authHeader = document.querySelector('.auth-header');
  
  if (authForm && authHeader) {
    gsap.to([authHeader, authForm], {
      duration: 0.25,
      opacity: 0,
      y: -10,
      ease: 'power2.in',
    });
  }
};

export const animateFormIn = () => {
  // Animate form fade-in after state change
  const authForm = document.querySelector('.auth-form');
  const authHeader = document.querySelector('.auth-header');
  const formGroups = document.querySelectorAll('.form-group');
  
  if (authForm && authHeader) {
    // Reset to animate fresh
    gsap.set([authHeader, authForm], { opacity: 0, y: 10 });
    
    // Header
    gsap.to(authHeader, {
      duration: 0.4,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    });
    
    // Form
    gsap.to(authForm, {
      duration: 0.4,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      delay: 0.05,
    });
    
    // Individual form groups with stagger
    formGroups.forEach((group, index) => {
      gsap.to(group, {
        duration: 0.3,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        delay: 0.1 + index * 0.04,
      });
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
          duration: 0.6,
          opacity: 0,
          y: 20,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      // Animate description
      if (description) {
        gsap.from(description, {
          duration: 0.6,
          opacity: 0,
          y: 15,
          delay: 0.2,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }

      // Animate status
      if (status) {
        gsap.from(status, {
          duration: 0.6,
          opacity: 0,
          y: 15,
          delay: 0.35,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }
    }

    // Animate hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      gsap.from(heroImage, {
        duration: 0.8,
        opacity: 0,
        scale: 0.95,
        delay: 0.4,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate auth header
    const authHeader = document.querySelector('.auth-header');
    if (authHeader) {
      gsap.from(authHeader, {
        duration: 0.6,
        opacity: 0,
        x: 20,
        delay: 0.1,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate tabs
    const loginTabs = document.querySelector('.login-tabs');
    if (loginTabs) {
      gsap.from(loginTabs, {
        duration: 0.6,
        opacity: 0,
        y: 15,
        delay: 0.15,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate form groups with a nice cascade
    const formGroups = document.querySelectorAll('.form-group');
    gsap.from(formGroups, {
      duration: 0.5,
      opacity: 0,
      y: 15,
      stagger: 0.08,
      delay: 0.25,
      ease: 'power2.out',
      clearProps: 'all',
    });

    // Animate checkboxes and additional elements
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (checkboxes.length > 0) {
      gsap.from(checkboxes, {
        duration: 0.5,
        opacity: 0,
        x: -10,
        delay: 0.35,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate sign in button
    const signInBtn = document.querySelector('.sign-in-btn');
    if (signInBtn) {
      gsap.from(signInBtn, {
        duration: 0.5,
        opacity: 0,
        y: 15,
        delay: 0.4,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate divider
    const divider = document.querySelector('.divider');
    if (divider) {
      gsap.from(divider, {
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Animate social buttons
    const socialButtons = document.querySelectorAll('[class*="social-buttons"] button');
    gsap.from(socialButtons, {
      duration: 0.5,
      opacity: 0,
      y: 15,
      stagger: 0.08,
      delay: 0.55,
      ease: 'power2.out',
      clearProps: 'all',
    });

    // Animate toggle link
    const toggleLink = document.querySelector('.toggle-link');
    if (toggleLink) {
      gsap.from(toggleLink, {
        duration: 0.5,
        opacity: 0,
        y: 10,
        delay: 0.65,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }

    // Add input focus animations
    addInputFocusAnimations();
    // Add button hover effects
    addLoginButtonHoverEffects();
    // Add tab button animations
    addTabButtonAnimations();
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

const addTabButtonAnimations = () => {
  // Tab buttons with active state animation
  const tabButtons = document.querySelectorAll('.login-tabs button');
  
  tabButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.2,
        scale: 1.02,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.2,
        scale: 1,
        ease: 'power2.out',
      });
    });
  });
};

const addLoginButtonHoverEffects = () => {
  // Sign in button hover with enhanced effects
  const signInBtn = document.querySelector('.sign-in-btn');
  if (signInBtn) {
    signInBtn.addEventListener('mouseenter', () => {
      gsap.to(signInBtn, {
        duration: 0.3,
        scale: 1.03,
        boxShadow: '0 20px 30px rgba(168, 85, 247, 0.4)',
        ease: 'power2.out',
      });

      const arrow = signInBtn.querySelector('span');
      if (arrow) {
        gsap.to(arrow, {
          duration: 0.3,
          x: 6,
          ease: 'power2.out',
        });
      }
    });

    signInBtn.addEventListener('mouseleave', () => {
      gsap.to(signInBtn, {
        duration: 0.3,
        scale: 1,
        boxShadow: '0 0 0 rgba(168, 85, 247, 0)',
        ease: 'power2.out',
      });

      const arrow = signInBtn.querySelector('span');
      if (arrow) {
        gsap.to(arrow, {
          duration: 0.3,
          x: 0,
          ease: 'power2.out',
        });
      }
    });
  }

  // Social buttons hover with enhanced transitions
  const socialButtons = document.querySelectorAll('[class*="social-buttons"] button');
  socialButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.25,
        borderColor: '#a855f7',
        backgroundColor: '#2A1840',
        scale: 1.05,
        ease: 'power2.out',
      });

      const icon = btn.querySelector('svg');
      if (icon) {
        gsap.to(icon, {
          duration: 0.25,
          scale: 1.15,
          ease: 'back.out(1.5)',
        });
      }
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.25,
        borderColor: '#2A2540',
        backgroundColor: '#1A1530',
        scale: 1,
        ease: 'power2.out',
      });

      const icon = btn.querySelector('svg');
      if (icon) {
        gsap.to(icon, {
          duration: 0.25,
          scale: 1,
          ease: 'power2.out',
        });
      }
    });
  });
};
