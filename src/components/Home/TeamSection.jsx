// src/components/TeamSection.jsx
import React from "react";

const teamMembers = [
  { name: "Ziad Amr", role: "Top #1 Player", img: "/images/team (4).jpg", category: "Top Player" },
  { name: "Jessica Youhanna", role: "Top #2 Player", img: "/images/team (5).jpg", category: "Top Player" },
  { name: "Doha Hamdi", role: "Top #1 Communtiy", img: "/images/team (7).jpg", category: "Community" },
  { name: "Abdo Mostafa", role: "Top #2 Communtiy", img: "/images/team (3).jpg", category: "Community" },
];

export default function TeamSection() {
  return (
    <section className="bg-[var(--primary-dark)] text-[var(--text-primary)] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-Orbitron mb-6 relative inline-block">
          <span className="text-[var(--accent-gold)]">Top</span> Players & Community
          <span className="block w-20 h-1 bg-[var(--accent-gold)] mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[var(--secondary-dark)] to-[var(--primary-dark)] rounded-lg border border-[var(--primary-blue)] overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              {/* Label */}
              <span className="absolute top-3 left-3 bg-[var(--accent-gold)] text-[var(--primary-dark)] text-xs font-bold px-2 py-1 rounded">
                {member.category}
              </span>

              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h5 className="text-[var(--accent-gold)] font-bold text-lg">{member.name}</h5>
                <p className="text-[var(--text-secondary)] mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
