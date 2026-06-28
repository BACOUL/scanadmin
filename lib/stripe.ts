import Stripe from 'stripe';

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://scanadmin.fr').replace(/\/$/, '');
}

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }

  return new Stripe(secretKey, {
    apiVersion: '2024-06-20',
    typescript: true,
  });
}

export function getAnalysisPriceId() {
  const priceId = process.env.STRIPE_ANALYSIS_PRICE_ID;

  if (!priceId) {
    throw new Error('STRIPE_ANALYSIS_PRICE_ID is not configured');
  }

  return priceId;
}
