export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-ignore
  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  } catch (error) {
    console.log(error);
    
  }
  
  
}

export interface GTagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = <T, >(gtagEvent: GTagEvent, others: T) => {
  // @ts-ignore
  try {
    window.gtag('event', gtagEvent.action, {
      event_category: gtagEvent.category,
      event_label: gtagEvent.label,
      value: gtagEvent.value,
      ...others
    })
  } catch (error) {
    console.log(error);
    
  }
  
}
