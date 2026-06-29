export type ChannelId =
  | 'instagram'
  | 'whatsapp'
  | 'facebook'
  | 'telegram'
  | 'youtube'
  | 'googlemaps';

export type Feature = {
  label: string;
  desc: string;
};

export type ChannelProduct = {
  id: ChannelId;
  name: string;
  tagline: string;
  statValue: string;
  statLabel: string;
  color: string;
  bg: string;
  logo: string;
  heroCopy: string;
  features: Feature[];
};

export const genericFeatures: Feature[] = [
  {
    label: 'DM automation with emotional intelligence',
    desc: 'Replies instantly while reading tone, intent, urgency, and buying signals.',
  },
  {
    label: 'Conversation summaries',
    desc: 'Skip the full chat history. Lashvae gives your team the context in a clean summary.',
  },
  {
    label: 'Emotion detection',
    desc: 'Customer mood is tagged with friendly visual labels so your team knows how to respond.',
  },
  {
    label: 'Blue tick handling',
    desc: 'Route high-priority or verified conversations separately when they need special care.',
  },
  {
    label: 'Quick onboarding',
    desc: 'Paste your website link or answer a few setup questions, and Lashvae builds the business context.',
  },
  {
    label: 'Growth intelligence',
    desc: 'Get reel ideas, competitor movement analysis, and industry compliance updates curated by AI.',
  },
  {
    label: 'Auto contact book',
    desc: 'When customers share contact details, Lashvae organizes them into a usable contact profile.',
  },
  {
    label: 'Keyword comment automation',
    desc: 'Automate comment replies and follow-up actions based on keywords, intent, or campaign triggers.',
  },
  {
    label: 'Message segregation',
    desc: 'Automatically groups conversations into feedback, orders, complaints, leads, and follow-ups.',
  },
  {
    label: 'Human follow-up alerts',
    desc: 'Routine messages are handled by AI. Complex or sensitive cases are pushed to the owner fast.',
  },
];

export const channelProducts: ChannelProduct[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    tagline: 'Turn followers into buyers',
    statValue: '2.4k',
    statLabel: 'DMs handled daily',
    color: '#e1306c',
    bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    logo: '/images/brand-logo/instagram.png',
    heroCopy:
      'Automate DMs, comments, story replies, and lead routing while keeping your brand voice sharp.',
    features: [
      {
        label: 'DM Automation',
        desc: 'Instant replies to every DM, day or night',
      },
      {
        label: 'Comment Reply',
        desc: 'AI responds to comments with brand voice',
      },
      { label: 'Story Shopping', desc: 'Capture leads from story swipe-ups' },
      {
        label: 'Lead Scoring',
        desc: 'Hot buyers flagged and routed instantly',
      },
    ],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    tagline: 'Close deals in chat',
    statValue: '98%',
    statLabel: 'open rate vs email',
    color: '#25d366',
    bg: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
    logo: '/images/brand-logo/whatsapp.png',
    heroCopy:
      'Turn WhatsApp into a sales and support channel that can answer, track, recommend, and close.',
    features: [
      { label: 'Broadcast Blasts', desc: 'Send personalized promos at scale' },
      { label: 'Order Tracking', desc: 'Real-time updates sent automatically' },
      { label: 'Catalog Sharing', desc: 'Send product cards inside the chat' },
      {
        label: 'Instant Checkout',
        desc: 'Payment links delivered in conversation',
      },
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    tagline: 'Own every touchpoint',
    statValue: '3.2x',
    statLabel: 'more conversions',
    color: '#1877f2',
    bg: 'linear-gradient(135deg, #1877F2 0%, #4267B2 100%)',
    logo: '/images/brand-logo/facebook.png',
    heroCopy:
      'Automate Messenger, page comments, ad leads, and customer review workflows from one AI layer.',
    features: [
      {
        label: 'Page Messenger',
        desc: 'Zero-lag replies to every inbox message',
      },
      {
        label: 'Ad Lead Capture',
        desc: 'Qualify leads from Facebook Ads instantly',
      },
      {
        label: 'Review Management',
        desc: 'AI crafts thoughtful review responses',
      },
      { label: 'Funnel Analytics', desc: 'Track which messages close deals' },
    ],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    tagline: 'Automate and broadcast',
    statValue: 'Unlimited',
    statLabel: 'group members reached',
    color: '#229ed9',
    bg: 'linear-gradient(135deg, #43e97b 0%, #096fca 100%)',
    logo: '/images/brand-logo/telegram.png',
    heroCopy:
      'Run group, bot, broadcast, and support workflows with AI moderation and fast handoff.',
    features: [
      { label: 'Bot Automation', desc: 'Full bot flows without writing code' },
      {
        label: 'Channel Broadcast',
        desc: 'Send to unlimited subscribers at once',
      },
      { label: 'Group Moderation', desc: 'AI keeps groups spam-free 24/7' },
      {
        label: 'API + Webhooks',
        desc: 'Deep integration with your tech stack',
      },
    ],
  },
  {
    id: 'youtube',
    name: 'YouTube',
    tagline: 'Monetize your audience',
    statValue: '510',
    statLabel: 'comments replied daily',
    color: '#ff0000',
    bg: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
    logo: '/images/brand-logo/youtube.png',
    heroCopy:
      'Respond to comments, surface buying intent, and turn viewers into leads without living in Studio.',
    features: [
      {
        label: 'Comment Moderation',
        desc: 'AI replies to every relevant comment',
      },
      { label: 'Pinned Replies', desc: 'Surface your best answers at the top' },
      { label: 'Video DM Funnels', desc: 'Turn viewers into leads via DM' },
      { label: 'Sentiment Filter', desc: 'Auto-hide toxic, keep the love' },
    ],
  },
  {
    id: 'googlemaps',
    name: 'Google Maps',
    tagline: 'Win the local game',
    statValue: '+31%',
    statLabel: 'rating lift on avg',
    color: '#4285f4',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    logo: '/images/brand-logo/google-map.png',
    heroCopy:
      'Manage reviews, Q&A, reputation, and local trust signals with consistent AI follow-through.',
    features: [
      { label: 'Review Response', desc: 'Every review answered, good or bad' },
      { label: 'Q&A Auto-reply', desc: 'Google Q&A answered within seconds' },
      { label: '24/7 Monitoring', desc: 'Never miss a new review again' },
      {
        label: 'Reputation Score',
        desc: 'Track rating trends across locations',
      },
    ],
  },
];

export function getChannelProduct(id: string) {
  return channelProducts.find((channel) => channel.id === id);
}
