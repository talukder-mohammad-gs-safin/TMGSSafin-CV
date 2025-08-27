import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap, Wrench, Languages, Briefcase, Users } from "lucide-react";

const cv = {
  name: "Golam Saroyar Safin",
  title: "Student · Textile Engineering",
  summary:
    "I am a dedicated student with strong communication and sales skills. I have practical experience in customer service and product selling, and I am eager to learn and contribute effectively in any work environment.",
  location: "Salna, Gazipur, Bangladesh",
  email: "talukdermohammadsafin@gmail.com",
  phone: "+8801329578417",
  education: [
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Bhawal Ideal Public School",
      period: "2022 – 2024"
    },
    {
      degree: "Studying Textile Engineering",
      school: "BGIFT Institute of Science and Technology",
      period: "2024 – 2025"
    }
  ],
  skills: [
    "Sales Strategies",
    "Negotiation Skill",
    "Problem-Solving",
    "Time Management",
    "Presentation Skills",
    "Team Collaboration",
    "Basic Computer",
    "English and Bangla Communication Skill"
  ],
  languages: ["English", "Bangla", "Hindi"],
  experience: [
    {
      role: "Consumer Goods Seller",
      company: "Apex Footwear Limited",
      period: "March 15 – 30, 2025",
      points: [
        "I have served customers well.",
        "I have increased sales at this outlet by giving my best.",
        "I have behaved nicely and politely with all customers."
      ]
    },
    {
      role: "Volunteer",
      company: "Shikkhar Alo (Educational Organization)",
      period: "—",
      points: [
        "I am a volunteer at the Shikkhar Alo educational organization, and I have experience in teamwork there."
      ]
    }
  ]
};

export default function AnimatedCV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <header className="text-center py-10">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-3xl font-bold">
          {cv.name}
        </motion.h1>
        <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg text-slate-300">
          {cv.title}
        </motion.h2>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className="mt-4 max-w-2xl mx-auto text-slate-400">
          {cv.summary}
        </motion.p>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-8 pb-10">
        {/* Contact */}
        <Section title="Contact" icon={<Mail className="w-5 h-5" />}> 
          <ul className="space-y-2">
            <li className="flex gap-2 items-center"><Mail className="w-4 h-4"/> {cv.email}</li>
            <li className="flex gap-2 items-center"><Phone className="w-4 h-4"/> {cv.phone}</li>
            <li className="flex gap-2 items-center"><MapPin className="w-4 h-4"/> {cv.location}</li>
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education" icon={<GraduationCap className="w-5 h-5" />}>
          <ul className="space-y-3">
            {cv.education.map((e,i)=>(
              <li key={i} className="flex flex-col">
                <span className="font-medium">{e.degree}</span>
                <span className="text-slate-300">{e.school}</span>
                <span className="text-slate-400 text-sm">{e.period}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section title="Skills" icon={<Wrench className="w-5 h-5" />}>
          <ul className="grid grid-cols-2 gap-2 text-slate-300">
            {cv.skills.map((s,i)=>(<li key={i}>• {s}</li>))}
          </ul>
        </Section>

        {/* Languages */}
        <Section title="Languages" icon={<Languages className="w-5 h-5" />}>
          <ul className="flex gap-4 text-slate-300">
            {cv.languages.map((l,i)=>(<li key={i}>{l}</li>))}
          </ul>
        </Section>

        {/* Experience */}
        <Section title="Work Experience" icon={<Briefcase className="w-5 h-5" />}>
          {cv.experience.map((exp,i)=>(
            <div key={i} className="mb-6">
              <div className="flex justify-between flex-wrap">
                <span className="font-medium">{exp.role} · <span className="text-slate-300">{exp.company}</span></span>
                <span className="text-slate-400 text-sm">{exp.period}</span>
              </div>
              <ul className="mt-2 list-disc list-inside text-slate-300">
                {exp.points.map((p,j)=>(<li key={j}>{p}</li>))}
              </ul>
            </div>
          ))}
        </Section>
      </main>
    </div>
  );
}

function Section({title,icon,children}:{title:string,icon:React.ReactNode,children:React.ReactNode}){
  return (
    <section className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 shadow">
      <div className="flex items-center gap-2 mb-4 text-slate-200 font-semibold">
        {icon}<h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}
