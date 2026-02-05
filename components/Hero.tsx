import React from "react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Animated geometric background */}
      <div className="absolute top-0 right-0 w-1/2 h-full -z-10 overflow-hidden hidden lg:block">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 text-sm font-bold mb-8 border border-blue-200">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Turning Vision into Scalable Technology
            </div>

            <h1 className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                Exponential
              </span>{" "}
              <br />
              Growth.
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              We build high-performance web and mobile applications that help
              businesses scale and succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 hover:scale-105 active:scale-95"
              >
                Start Your Project
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                View Showcase
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=team${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Team member"
                  />
                ))}
              </div>
              <div className="text-sm font-bold text-slate-500">
                Joined by <span className="text-slate-900">40+ Founders</span>{" "}
                last month
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[3rem] p-4 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 transform rotate-2 hover:rotate-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                alt="Workspace"
                className="rounded-[2.5rem] w-full object-cover"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 font-bold">
                    99%
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Uptime Ratio
                    </p>
                    <p className="text-slate-900 font-bold">Standard</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-black">12x</div>
                  <div className="text-xs font-bold leading-tight uppercase opacity-80">
                    Speed <br /> Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
