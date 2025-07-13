"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src="/images/hero_image.jpg"
        alt="AI Robot"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-start lg:items-center justify-start gap-8">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            We Build <span style={{ color: '#bfa055' }}>AI Solutions</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-white/80">
            That Empower Businesses
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-xl">
            AI-tailored solutions that adapt, learn, and evolve alongside you. 
            Harness the power of AI & automation to drive smarter decisions. 
            Future-proof your business with AI that grows with your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
