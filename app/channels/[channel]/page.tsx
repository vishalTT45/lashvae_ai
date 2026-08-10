import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  Bot,
  CheckCircle2,
  MessageCircle,
  Route,
  Sparkles,
  Zap,
} from 'lucide-react'
import Button from '../../components/Button'
import PageHero from '../../components/PageHero'
import { channelProducts, genericFeatures, getChannelProduct } from '../data'

type ChannelPageProps = {
  params: Promise<{
    channel: string
  }>
}

export function generateStaticParams() {
  return channelProducts.map((channel) => ({
    channel: channel.id,
  }))
}

export async function generateMetadata({ params }: ChannelPageProps): Promise<Metadata> {
  const { channel } = await params
  const product = getChannelProduct(channel)

  if (!product) {
    return {
      title: 'Channel not found | Lashvae AI',
    }
  }

  return {
    title: `${product.name} Automation | Lashvae AI`,
    description: `${product.tagline}. ${product.heroCopy}`,
  }
}

export default async function ChannelProductPage({ params }: ChannelPageProps) {
  const { channel } = await params
  const product = getChannelProduct(channel)

  if (!product) {
    notFound()
  }

  const workflow = [
    {
      label: 'Understand',
      desc: `Lashvae reads every ${product.name} conversation for intent, sentiment, urgency, and business context.`,
    },
    {
      label: 'Act',
      desc: 'It replies, categorizes, captures contact details, and routes leads without forcing your team into every thread.',
    },
    {
      label: 'Escalate',
      desc: 'If a conversation needs human judgment, the owner gets the summary and next-best action instantly.',
    },
  ]

  return (
    <div className='flex w-full flex-col bg-white'>
      <PageHero
        bg={product.bg}
        eyebrow={
          <span className='flex items-center gap-2 normal-case tracking-normal'>
            <span className='flex h-6 w-6 items-center justify-center rounded-full bg-white'>
              <Image src={product.logo} alt={product.name} width={20} height={20} className='h-3.5 w-3.5 object-contain' />
            </span>
            <span className='uppercase tracking-wider'>{product.name} Automation</span>
          </span>
        }
        title={product.tagline}
        subtitle={product.heroCopy}
        aside={
          <div className='rounded-2xl border border-white/20 bg-white/15 p-6 shadow-2xl backdrop-blur'>
            <div className='flex items-center justify-between gap-5'>
              <div className='min-w-0'>
                <div className='text-[42px] font-bold leading-none tracking-tight text-white sm:text-[56px]'>
                  {product.statValue}
                </div>
                <div className='mt-2 text-[14px] font-semibold text-white/85'>
                  {product.statLabel}
                </div>
              </div>

              <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white sm:h-20 sm:w-20'>
                <Image
                  src={product.logo}
                  alt=''
                  width={44}
                  height={44}
                  className='h-9 w-9 object-contain sm:h-11 sm:w-11'
                />
              </div>
            </div>
            <div className='mt-8 grid grid-cols-2 gap-3 text-[12px] font-semibold text-white/90'>
              <div className='rounded-xl bg-white/10 p-3'>AI replies</div>
              <div className='rounded-xl bg-white/10 p-3'>Lead routing</div>
              <div className='rounded-xl bg-white/10 p-3'>Emotion tags</div>
              <div className='rounded-xl bg-white/10 p-3'>Human handoff</div>
            </div>
          </div>
        }
      >
        <Button href='/pricing' variant='white'>
          Start Free
        </Button>
        <Button href='#features' variant='whiteOutline'>
          See Features
        </Button>
      </PageHero>

      <section className='px-6 py-16 sm:px-8 sm:py-24'>
        <div className='mx-auto max-w-[1280px]'>
          <div className='mb-10 max-w-3xl'>
            <span className='text-[12px] font-bold uppercase tracking-wider text-[#ff5530]'>
              Shared AI Engine
            </span>
            <h2 className='heading-md-typography mt-2 text-[#0a0a0a]'>
              Every Lashvae channel includes the same intelligence layer.
            </h2>
            <p className='mt-3 text-[15px] leading-relaxed text-[#45515e]'>
              These generic features appear across every product page because
              they are the operating system behind Lashvae AI.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'>
            {genericFeatures.map((feature, index) => (
              <article
                key={feature.label}
                className='surface-card surface-card-hover p-5'
              >
                <div className='mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f3f5] text-[12px] font-bold text-[#0a0a0a]'>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className='text-[14px] font-bold leading-snug text-[#0a0a0a]'>
                  {feature.label}
                </h3>
                <p className='mt-2 text-[12px] leading-relaxed text-[#45515e]'>
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id='features'
        className='bg-[#f7f8fa] px-6 py-16 sm:px-8 sm:py-24'
      >
        <div className='mx-auto max-w-[1280px]'>
          <div className='mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end'>
            <div className='max-w-3xl'>
              <span
                className='text-[12px] font-bold uppercase tracking-wider'
                style={{ color: product.color }}
              >
                {product.name} Playbook
              </span>
              <h2 className='heading-md-typography mt-2 text-[#0a0a0a]'>
                Built around how {product.name} customers actually behave.
              </h2>
            </div>
            <div className='rounded-full bg-white px-5 py-2 text-[13px] font-bold text-[#0a0a0a] shadow-sm'>
              {product.statValue} {product.statLabel}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            {product.features.map((feature) => (
              <article
                key={feature.label}
                className='surface-card surface-card-hover p-7'
              >
                <div
                  className='mb-5 flex h-11 w-11 items-center justify-center rounded-full text-white'
                  style={{ backgroundColor: product.color }}
                >
                  <CheckCircle2 className='h-5 w-5' />
                </div>
                <h3 className='text-[22px] font-bold tracking-tight text-[#0a0a0a]'>
                  {feature.label}
                </h3>
                <p className='mt-3 text-[14px] leading-relaxed text-[#45515e]'>
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 py-16 sm:px-8 sm:py-24'>
        <div className='mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center'>
          <div className='lg:col-span-5'>
            <span className='text-[12px] font-bold uppercase tracking-wider text-[#1456f0]'>
              Workflow
            </span>
            <h2 className='heading-md-typography mt-2 text-[#0a0a0a]'>
              From messy messages to clear next actions.
            </h2>
            <p className='mt-4 text-[15px] leading-relaxed text-[#45515e]'>
              Lashvae does more than reply. It turns incoming conversations into
              categorized, summarized, emotionally aware business tasks.
            </p>
          </div>
          <div className='grid gap-4 lg:col-span-7'>
            {workflow.map((item, index) => {
              const icons = [MessageCircle, Bot, Route];
              const Icon = icons[index];
              return (
                <article
                  key={item.label}
                  className='surface-card surface-card-hover flex gap-5 p-6'
                >
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0a0a0a] text-white'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <div>
                    <h3 className='text-[17px] font-bold text-[#0a0a0a]'>
                      {item.label}
                    </h3>
                    <p className='mt-1 text-[13px] leading-relaxed text-[#45515e]'>
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className='border-t border-[#eaecf0] bg-white px-6 py-16 sm:px-8 sm:py-24'>
        <div className='mx-auto max-w-[1280px] rounded-2xl bg-[#0a0a0a] px-8 py-14 text-center text-white'>
          <div className='mx-auto flex max-w-2xl flex-col items-center'>
            <Sparkles className='h-8 w-8 text-[#FFF100]' />
            <h2 className='display-lg-typography mt-5 text-white'>
              Connect {product.name} to Lashvae AI.
            </h2>
            <p className='mt-4 text-[14px] leading-relaxed text-[#a8aab2]'>
              Start with one channel, then expand into the full omnichannel
              inbox when your team is ready.
            </p>
            <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
              <Button href='/pricing' variant='white'>
                Start Free <Zap className='h-4 w-4' />
              </Button>
              <Button href='/channels' variant='whiteOutline'>
                View All Channels
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
