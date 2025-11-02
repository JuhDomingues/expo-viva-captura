// Facebook Pixel tracking utilities

export enum FacebookPixelEvents {
  INITIATE_CHECKOUT = 'InitiateCheckout',
  PAGE_VIEW = 'PageView',
  VIEW_CONTENT = 'ViewContent',
  ADD_TO_CART = 'AddToCart',
  PURCHASE = 'Purchase',
}

interface PixelEventData {
  content_name?: string;
  value?: number;
  currency?: string;
  source?: string;
  [key: string]: any;
}

export const trackPixelEvent = (eventName: FacebookPixelEvents, data?: PixelEventData) => {
  // Check if fbq is available (Facebook Pixel)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
  } else {
    console.log('Facebook Pixel event:', eventName, data);
  }
};
