'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Back to Top visibility
    const backToTop = document.querySelector('.back-to-top') as HTMLAnchorElement | null;
    const handleScroll = () => {
      if (!backToTop) return;
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    const faqHandlers: Array<{ el: Element; handler: EventListener }> = [];
    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question');
      if (!question) return;
      const handler: EventListener = () => {
        faqItems.forEach((other) => {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active');
      };
      question.addEventListener('click', handler);
      faqHandlers.push({ el: question, handler });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const anchorHandlers: Array<{ el: HTMLAnchorElement; handler: EventListener }> = [];
    anchorLinks.forEach((link) => {
      const handler: EventListener = (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#' || href === '#!') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      link.addEventListener('click', handler);
      anchorHandlers.push({ el: link, handler });
    });

    // Intersection Observer animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animateEls = document.querySelectorAll<HTMLElement>(
      '.about-item, .article-card, .service-card, .location-card, .gallery-item'
    );
    animateEls.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // Prevent right-click on gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');
    const rcHandlers: Array<{ el: Element; handler: EventListener }> = [];
    galleryImages.forEach((img) => {
      const handler: EventListener = (e) => e.preventDefault();
      img.addEventListener('contextmenu', handler);
      rcHandlers.push({ el: img, handler });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      faqHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
      anchorHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
      rcHandlers.forEach(({ el, handler }) => el.removeEventListener('contextmenu', handler));
      observer.disconnect();
    };
  }, []);

  return null;
}
