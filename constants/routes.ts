
export const ROUTES = {
  LOGIN: '/login',
  ACCOUNT: '/account',
  CART: '/cart',
  CHECKOUT: '/checkout',
  CHECKOUT_CONFIRM: '/checkout/confirm',
  CHECKOUT_SUCCESS: '/checkout/success',
  
  PRODUCT: '/product',
  PRODUCT_DETAIL: (id: string) => `/product/${id}`,
  
  SLIDE_TEMPLATES: '/slide-templates',
  FREE_SLIDES: '/free-slides',
  ANIMATIONS: '/animations',
  POSTER_DESIGN: '/poster-design',
  POSTER_DESIGN_MORE: '/poster-design/more',
  POSTER_DESIGN_HORIZONTAL: '/poster-design/more/horizontal',
  POSTER_DESIGN_VERTICAL: '/poster-design/more/vertical',
  AI_ACCOUNTS: '/ai-accounts',
  INTRO_OUTRO: '/intro-outro',
  
  SLIDES: '/slides',
  SLIDE_CATEGORY: (category: string) => `/slides/${category}`,
  VIDEOS: '/videos',
  VIDEO_CATEGORY: (category: string) => `/videos/${category}`,
} as const;

