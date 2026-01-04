import React from 'react';

export default function Portfolio() {
  const achievements = [
    { title: "Design Patent", detail: "Wearable language translating device", icon: "💎" },
    { title: "Cloud Computing AWS", detail: "IIT Kanpur | E & ICT Academy", icon: "☁️" },
    { title: "NLP Certification", detail: "Infosys Springboard", icon: "🤖" },
    { title: "Robotics & Automation", detail: "Infosys Springboard", icon: "⚙️" }
  ];

  const projects = [
    { name: "Mudra AI", desc: "Recognition of Kathakali mudra patterns and contextual prediction.", tech: "Computer Vision" },
    { name: "Storytelling AI", desc: "Generative AI for realizing imagined concepts.", tech: "GenAI" },
    { name: "Virtual Interface", desc: "OpenCV based touchless mouse & keyboard via hand gestures.", tech: "OpenCV" },
    { name: "Legal Assistance AI", desc: "Chatbot for navigating complex legal inquiries.", tech: "NLP" }
  ];

  return (
    <div className="bg-[#0a0a0a] text-neutral-300 min-h-screen font-sans selection:bg-cyan-500/30">
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
              NANDAKISHOR 
            </h1>
            <p className="text-cyan-500 font-mono text-lg mb-6 tracking-widest uppercase">
              AI & Machine Learning Enthusiast
            </p>
            <p className="max-w-xl text-neutral-400 leading-relaxed text-lg">
              A motivated fresher specializing in AI/ML models, Deep Learning, and Computer Vision. 
              I focus on building tools that bridge the gap between complex data and human interaction.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 text-sm space-y-3 w-full md:w-auto">
            <p className="flex justify-between gap-4"><span>📧</span> <span className="text-white">nandakishornk888@gmail.com</span></p>
            <p className="flex justify-between gap-4"><span>📍</span> <span className="text-white">Malappuram, Kerala</span></p>
            <p className="flex justify-between gap-4"><span>📞</span> <span className="text-white">8129177656</span></p>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 border-y border-neutral-900">
        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-10">Ideology & Approach</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl text-white mb-4 italic">"Fostering growth through high-impact projects." </h3>
            <p className="text-neutral-400 leading-relaxed">
              My philosophy centers on applying Deep Learning (CNN, RNN, GANs) to solve real-world accessibility 
              and communication challenges. Whether it's mental health support or cultural preservation, 
              tech must serve a human purpose.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Python', 'React', 'Tensorflow', 'Pytorch', 'Next.js', 'NLP','JavaScript'].map((skill) => (
              <div key={skill} className="p-3 bg-neutral-900/50 border border-neutral-800 rounded text-center text-sm hover:bg-cyan-500/10 transition-all">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-10">Selected Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group p-8 bg-neutral-900/30 border border-neutral-800 rounded-3xl hover:border-cyan-500/50 transition-all">
              <span className="text-xs font-mono text-cyan-500 mb-2 block">{p.tech}</span>
              <h3 className="text-2xl font-bold text-white mb-3">{p.name}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-20 bg-cyan-500/5 rounded-[3rem] mb-20">
        <h2 className="text-xs uppercase tracking-[0.3em] text-cyan-500 mb-10 text-center">Achievements & Milestones</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((a, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-4">{a.icon}</div>
              <h4 className="text-white font-bold mb-1">{a.title}</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-tighter">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="max-w-5xl mx-auto px-6 pb-20 text-center">
        <div className="h-[1px] w-full bg-neutral-900 mb-12"></div>
        <p className="text-sm text-neutral-600">© 2024 Nandakishor S — Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}