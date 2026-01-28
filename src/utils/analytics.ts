/**
 * Analytics Utility
 * Tracks CTA clicks and user interactions for conversion optimization
 */

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

class Analytics {
  private enabled: boolean = false;
  private events: AnalyticsEvent[] = [];

  constructor() {
    // Enable analytics in production or when explicitly enabled
    this.enabled = import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
    
    if (this.enabled) {
      this.init();
    }
  }

  private init(): void {
    // Initialize Google Analytics or other analytics service
    // For now, we'll use a simple event tracking system
    console.log('Analytics initialized');
  }

  /**
   * Track a CTA click
   */
  trackCTA(ctaName: string, destination: string): void {
    this.track({
      event: 'cta_click',
      category: 'CTA',
      action: 'click',
      label: `${ctaName} -> ${destination}`,
    });
  }

  /**
   * Track section view
   */
  trackSectionView(sectionName: string): void {
    this.track({
      event: 'section_view',
      category: 'Engagement',
      action: 'view',
      label: sectionName,
    });
  }

  /**
   * Track feature interaction
   */
  trackFeatureInteraction(featureName: string, interactionType: string): void {
    this.track({
      event: 'feature_interaction',
      category: 'Features',
      action: interactionType,
      label: featureName,
    });
  }

  /**
   * Track code example view
   */
  trackCodeView(): void {
    this.track({
      event: 'code_view',
      category: 'Engagement',
      action: 'view',
      label: 'code_example',
    });
  }

  /**
   * Generic track method
   */
  private track(event: AnalyticsEvent): void {
    if (!this.enabled) {
      return;
    }

    this.events.push(event);

    // Send to analytics service (Google Analytics, Plausible, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Log in development
    if (import.meta.env.DEV) {
      console.log('📊 Analytics Event:', event);
    }
  }

  /**
   * Get all tracked events (for debugging)
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Auto-track CTA clicks
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link) {
      const href = link.getAttribute('href');
      const text = link.textContent?.trim() || '';
      
      // Track primary CTAs
      if (
        text.includes('START') ||
        text.includes('GET STARTED') ||
        text.includes('EXPLORE') ||
        text.includes('VIEW SOURCE') ||
        text.includes('GitHub')
      ) {
        analytics.trackCTA(text, href || 'unknown');
      }
    }
  });

  // Track section views using Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || entry.target.className;
          if (sectionId) {
            analytics.trackSectionView(sectionId);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe sections when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
    });
  } else {
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  }
}
