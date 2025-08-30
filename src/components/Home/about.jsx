import React from "react";
import Banner from "/banner.jpeg";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-[#1A2B3C] via-[#051A2D] to-[#1A2B3C] text-text-primary py-16 px-45">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                
                {/* الصورة */}
                <div className="w-full md:w-1/2">
                    <img 
                        src={Banner}
                        alt="About Us" 
                        className="rounded-lg w-full h-full object-cover shadow-soft border"
                    />
                </div>

                {/* النص */}
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl font-Orbitron mb-4 text-accent-gold">
                        Why <span className="text-[var(--accent-gold)]">Level Up?</span>
                    </h2>
                    <p className="mb-6 text-text-secondary text-lg">
                        We're not just a store—we're a community-driven platform 
                        for gamers, by gamers. Join 500,000+ players worldwide.
                    </p>
                    <ul className="mb-6 space-y-3">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-check text-accent-gold"></i>
                            <span>10,000+ Games</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-check text-accent-gold"></i>
                            <span>24/7 Support</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-check text-accent-gold"></i>
                            <span>Exclusive Events</span>
                        </li>
                    </ul>
                    <button className="bg-yellow-400 text-[#051A2D] py-2 px-6 rounded-lg hover:bg-[#051A2D] hover:shadow-yellow-200 hover:border-yellow-400 hover:text-yellow-400 hover:border-1 box-border transition-all">
                        Learn More
                    </button>
                </div>

            </div>
        </div>
    </section>

  );
}
