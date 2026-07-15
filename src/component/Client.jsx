import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Cameron",
    text: "Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Phasellus vestibulum lor",
  },
  {
    name: "Cameron",
    text: "Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Phasellus vestibulum lor",
  },
  {
    name: "Cameron",
    text: "Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Phasellus vestibulum lor",
  },
  {
    name: "Cameron",
    text: "Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Phasellus vestibulum lor",
  },
  {
    name: "Cameron",
    text: "Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Phasellus vestibulum lor",
  },
];

const Card = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 w-full max-w-sm"
  >
   <div className="flex items-center gap-3 mb-3">
  {/* Avatar */}
  <div className="w-9 h-9 rounded-full bg-neutral-200 shrink-0" />

  {/* Name + Stars */}
  <div className="flex flex-col">
    <p className="font-semibold text-neutral-900 text-sm">
      {item.name}
    </p>

    <div className="flex gap-0.5 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-blue-600 text-blue-600"
        />
      ))}
    </div>
  </div>
</div>

    <p className="text-xs text-neutral-500 leading-relaxed">{item.text}</p>
  </motion.div>
);

const Client = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-32">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
          What Our <span className="font-extrabold">Client's</span> Say
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2">
          Real reviews from verified
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
          {testimonials.slice(0, 3).map((item, i) => (
            <Card key={i} item={item} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl place-items-center">
          {testimonials.slice(3, 5).map((item, i) => (
            <Card key={i} item={item} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
