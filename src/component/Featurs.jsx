import React from "react";


const features = [
  {
    icon: "💬",
    eyebrow: "Get Instant Assistance",
    title: "Chat Support",
    desc: "Connect with our support team anytime for order updates, product inquiries,",
  },
  {
    icon: "💰",
    eyebrow: "Easy Refund Process",
    title: "Material Refund",
    desc: "Receive quick and hassle-free refunds for eligible orders in case of delivery issues",
  },
  {
    icon: "🚚",
    eyebrow: "Delivered to Your Site",
    title: "Doorstep Delivery",
    desc: "Get construction materials delivered directly to your location with reliable logistics",
  },
  {
    icon: "📅",
    eyebrow: "Deliver on Your Schedule",
    title: "Scheduled Delivery",
    desc: "Choose your preferred delivery date and time to ensure materials arrive exactly",
  },
];

function FeatureItem({ icon, eyebrow, title, desc }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 text-2xl">
        {icon}
      </div>
      <div>
        <div className="text-sm text-neutral-400 mb-2">{eyebrow}</div>
        <div className="text-2xl font-bold text-neutral-900">{title}</div>
        <p className="mt-5 -ml-20 max-w-xs text-sm text-neutral-500">{desc}</p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-5xl font-extrabold text-neutral-900">
          Feature's
        </h2>

        <div className="relative mt-16 grid grid-cols-1 gap-x-56  gap-y-10 md:grid-cols-2">
          {/* vertical divider (desktop only) */}
          <div className="pointer-events-none absolute inset-y-1 left-1/2 hidden w-px -translate-x-1/2 bg-neutral-200 md:block" />
          {/* horizontal divider (desktop only) */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-neutral-200 md:block" />

          {features.map((f, i) => (
            <FeatureItem key={i} {...f} />
          ))}
        </div>
      </div>

      {/* marquee strip */}
      <div className="overflow-hidden bg-neutral-100 py-5 mt-7">
        <div className="animate-marquee flex w-max whitespace-nowrap text-2xl text-neutral-400">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8 font-medium">
              <span className="font-semibold text-neutral-900">3000+</span>{" "}
              verified truck drivers Ready to bid on your orders
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}