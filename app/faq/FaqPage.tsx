"use client";

const faqs = [
  {
    q: "How long does acne treatment take?",
    a: "Visible improvement is seen within 2–4 weeks depending on skin type.",
  },
  {
    q: "Is laser hair removal painful?",
    a: "It is virtually painless with advanced US-FDA approved laser machines.",
  },
  {
    q: "Do chemical peels have side effects?",
    a: "They are safe when performed by a certified dermatologist.",
  },
  {
    q: "Which treatment is best for pigmentation?",
    a: "Chemical peels, laser toning, or medical creams depending on severity.",
  },
];

export default function FaqPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-heading text-center">FAQs</h1>

      <div className="mt-12 space-y-6">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow"
          >
            <h3 className="text-xl font-semibold text-heading">{f.q}</h3>
            <p className="mt-2 text-textLight">{f.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
