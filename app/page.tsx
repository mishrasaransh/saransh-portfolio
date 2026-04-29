"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};
export default function Portfolio() {

 const clients = [
  { name: "Coinbase", logo: "/clients/coinbase.jpg" },
  { name: "Google", logo: "/clients/google.jpg" },
  { name: "Meta", logo: "/clients/meta.jpg" },
  { name: "Waymo", logo: "/clients/waymo.jpg" },
  { name: "AMD", logo: "/clients/amd.jpg" },
  { name: "Nike", logo: "/clients/nike.jpeg" },
  { name: "Coca-Cola", logo: "/clients/coke.jpg" },
  { name: "Vault Talent", logo: "/clients/vault.jpg" },
  { name: "CDK Global", logo: "/clients/cdk.jpg" },
  { name: "Cox", logo: "/clients/cox.jpg" },
  { name: "CVS Health", logo: "/clients/cvs.jpg" },
  { name: "Freddie Mac", logo: "/clients/fm.jpg" },
  { name: "Gyde", logo: "/clients/gyde.jpg" },
  { name: "Highmark", logo: "/clients/highmark.jpg" },
  { name: "Intel", logo: "/clients/intel.jpg" },
  { name: "LA County", logo: "/clients/la.jpg" },
  { name: "Maricopa County", logo: "/clients/mc.jpg" },
  { name: "NASDAQ", logo: "/clients/nasdaq.jpg" },
  { name: "Rain", logo: "/clients/rain.jpg" },
   { name: "State of GA", logo: "/clients/soga.jpg" },
  { name: "Tennessee Valley Authority", logo: "/clients/tva.jpg" },
  { name: "Vertiv", logo: "/clients/vertiv.jpg" },
  { name: "State of NC", logo: "/clients/sonc.jpeg" },
  { name: "State of AL", logo: "/clients/soal.jpeg" },
];

  const experience = [
    {
      company: "The Ally Venture",
      role: "Recruitment Research Analyst",
      duration: "Jan 2026 – Present",
      location: "Mumbai, India (Remote)",
      points: [
        "Partner with startup clients and hiring stakeholders across U.S. startup ecosystems.",
        "Lead intake calls, search strategy, market mapping, and talent intelligence delivery.",
        "Specialize in Blockchain, Healthtech, Agentic AI, Fintech, and SaaS hiring."
      ]
    },
    {
      company: "TPI Global Solutions",
      role: "Senior Executive Resourcing (Senior Recruiter)",
      duration: "Jan 2025 – Jan 2026",
      location: "Noida, India (Onsite)",
      points: [
        "Led end-to-end recruitment for software, cloud, data, and project management roles.",
        "Worked with ATS/VMS tools like Beeline, Fieldglass, Magnit, and VectorVMS.",
        "Delivered critical hiring under tight SLAs for fintech and enterprise clients."
      ]
    },
    {
      company: "US Tech Solutions",
      role: "Technical Recruiter",
      duration: "Mar 2023 – Jan 2025",
      location: "Noida, India (Hybrid)",
      points: [
        "Managed enterprise technical hiring across software, cloud, QA, PM, and data roles.",
        "Supported clients including Google, Meta, Waymo, Intel, AMD, BNP Paribas, and Quest Technology Management.",
        "Worked extensively with JobDiva, LinkedIn Recruiter, Dice, Monster, and multiple VMS platforms."
      ]
    },
    {
      company: "TPI Global Solutions",
      role: "Executive Resourcing (Recruiter)",
      duration: "Apr 2022 – Mar 2023",
      location: "Noida, India (Onsite)",
      points: [
        "Built strong recruitment fundamentals across permanent and contract IT hiring.",
        "Supported clients such as CDK Global, Highmark Health, Coca-Cola, and Bread Financial.",
        "Used LinkedIn, Dice, Monster, JobDiva, and research-driven sourcing workflows."
      ]
    }
  ];

  const skills = [
    "Global Talent Intelligence","Recruitment Research","Technical Hiring","Client Management","Startup Hiring","Enterprise Hiring","Boolean Search","Market Mapping","Company Mapping","Vacancy Mapping","Candidate Calibration","Stakeholder Management","Talent Pipeline Strategy","Interview Coordination"
  ];

const tools = [
  { name: "LinkedIn Recruiter", logo: "/tools/linkedin.jpg" },
  { name: "JobDiva", logo: "/tools/jobdiva.jpg" },
  { name: "Dice", logo: "/tools/dice.jpeg" },
   { name: "Naukri", logo: "/tools/naukri.jpg" },
  { name: "Monster", logo: "/tools/monster.jpeg" },
  { name: "Fieldglass", logo: "/tools/fieldglass.jpg" },
  { name: "Beeline", logo: "/tools/beeline.jpg" },
    { name: "IQ Navigator", logo: "/tools/iq.jpg" },
  { name: "Magnit", logo: "/tools/magnit.jpg" },
  { name: "Apollo", logo: "/tools/apollo.jpeg" },
  { name: "ChatGPT", logo: "/tools/chatgpt.jpg" },
  { name: "Claude", logo: "/tools/claude.jpg" },
  { name: "Gemini", logo: "/tools/gemini.jpeg" },
  { name: "Google Meet", logo: "/tools/gmeet.jpg" },
  { name: "MS Teams", logo: "/tools/teams.jpg" },
    { name: "Zoom", logo: "/tools/zoom.jpg" },
];

  const recommendations = [
    {
      name: "Trisha Johnson",
      role: "National Account Manager",
      img: "/recs/trisha.jpeg",
      text: "Saransh is an exceptional recruiter who brings both talent and temperament to the table. He is proactive, deeply empathetic toward candidates, and a joy to collaborate with.  If you are looking for a recruiter who gets the job done and makes the process enjoyable for everyone involved, he's your guy!!"
    },
        {
      name: "Raushan Kumar",
      role: "Strategic Leader | Transforming Operations & Leadership in Staffing",
       img: "/recs/raushan.jpeg",
      text: "Saransh is a very sincere and dedicated person - be it on a professional or personal front. I have known him for the last 4 years and he has never disappointed. Always eager to learn new things. I am glad to have worked with him and have no hesitation in recommending him to potential employers."
    },

 {
      name: "KaTesha Sagers Anderson, MPA, CSM",
      role: "LinkedIn Top Leadership Voice | IT Project Manager | Advisor",
       img: "/recs/katesha.jpeg",
      text: "Saransh was great to work with when I took on a new project management contract. He ensured the onboarding process was seamless. He introduced me to the various stakeholders involved and ensured I was prepared every step of the way. "
    },
  {
      name: "Nitin Bhandari",
      role: "Associate Resource Manager",
       img: "/recs/nitin.jpeg",
      text: "Saransh Mishra demonstrates exceptional work ethic, dedication, and a fast-paced, results-driven approach to recruitment strategies."
    },
    {
      name: "Faiza Meraj",
      role: "Team Lead | Talent Acquisition Leader",
       img: "/recs/faiza.jpeg",
      text: "Working with Saransh was a great experience. He’s knowledgeable, eager to learn, and consistently brings energy and dedication to his work."
    },
    {
      name: "Ashish Kumar",
      role: "Team Lead - Recruitment and Client Services",
       img: "/recs/ashish.jpeg",
      text: "His enthusiasm, curiosity, and dedication truly stood out. He brings an energy that is both motivating and inspiring."
    },
    {
      name: "Vandana Soni",
      role: "Associate Resource Manager",
       img: "/recs/vandana.jpeg",
      text: "Saransh possesses outstanding communication skills and a strong dedication to finding the right talent for both the company and candidate. Not only he is a skilled recruiter, but he is also an invaluable team player, always ready to mentor colleagues and collaborate to achieve hiring goals."
    },


     {
      name: "Den Mek",
      role: "Certified MuleSoft Developer",
       img: "/recs/den.jpeg",
      text: "Saransh is a perfect example of a skilled recruiter, and he brings all the abilities to the table. He is focused, reliable, and goal-oriented, and always do his best. He knows the recruiting skills very well and screen the candidate as per the requirement."
    },

     {
      name: "Lavi Dixit",
      role: "Recruitment Specialist | Turn Hiring Challenges into Success Stories",
       img: "/recs/lavi.jpeg",
      text: "Saransh is amazing at his job! He knows his way around people, he is good with the clients and candidates, does whatever it takes to help colleagues he get done and make sure that everyone is on the same page and focused on the main goal."
     }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-wide">Saransh Mishra</div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#recommendations" className="hover:text-white">Recommendations</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-cyan-300 uppercase">
              Global Talent Intelligence • Recruitment Research • Technical Hiring
            </p>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-6 tracking-tight bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
  Saransh Mishra
</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Talent Research & Recruitment Professional with 4+ years of experience across startups, Fortune 500 companies, global enterprises, and U.S. state government hiring environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="public/resume.pdf" target="_blank" className="rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:scale-[1.04] hover:shadow-cyan-400/50">View Resume</a>
              <a href="https://calendly.com/saranshmishra9759/30min" target="_blank" className="rounded-2xl border border-cyan-300/20 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.04] hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10">Book a Call</a>
              <a href="mailto:saranshmisshra9759@gmail.com" className="rounded-2xl border border-cyan-300/20 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.04] hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10">Email Me</a>
              <a href="https://wa.me/919759696226?text=Hi%20Saransh%2C%20I%20would%20like%20to%20connect%20regarding%20a%20recruitment%20or%20talent%20intelligence%20opportunity." target="_blank" className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:scale-[1.04] hover:bg-emerald-400/15">WhatsApp</a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 p-4 shadow-2xl backdrop-blur">
              <Image
  src="/displaypicture.jpg"
  alt="Saransh Mishra"
  width={380}
  height={440}
  className="rounded-[2rem] object-cover shadow-2xl border border-white/10 hover:scale-[1.02] transition duration-300"
/>
            </div>
          </div>
        </div>
      </section>

<section className="overflow-hidden border-b border-white/10 py-12">
  <div className="relative w-full overflow-hidden">
    
    {/* Fade edges */}
<div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
<div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

    <div className="flex w-max animate-marquee gap-16 items-center">
      {[...clients, ...clients].map((client, i) => (
  <div
    key={i}
    className="group flex flex-col items-center justify-center min-w-[140px] gap-2 opacity-70 hover:opacity-100 transition"
  >
    <Image
      src={client.logo}
      alt={client.name}
      width={100}
      height={40}
      className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
    />

    <span className="text-xs text-slate-500 group-hover:text-cyan-400 text-center whitespace-nowrap transition">
      {client.name}
    </span>
  </div>
))}
    </div>

  </div>
</section>

     <motion.section  id="about"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto max-w-7xl px-6 py-20"
>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">About</p>
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">A recruiter built for modern technical hiring.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 p-6 leading-8 text-slate-300">
            I specialize in technical and business hiring across Software Engineering, Blockchain, AI/ML, Crypto, Cloud, DevOps, Data, Project & Program Management, and strategic startup functions.
          </div>
<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 p-6 leading-8 text-slate-300">            My work includes intake calls, requirement analysis, sourcing, outreach, screening coordination, market mapping, company mapping, vacancy mapping, and talent intelligence reporting.
          </div>
        </div>
   </motion.section>

      <motion.section  id="experience"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto max-w-7xl px-6 py-20"
>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Experience</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Career timeline</h2>
        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <div key={job.company + job.role}       className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 p-6 leading-8 text-slate-300">

              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{job.role}</h3>
                  <p className="text-cyan-300">{job.company}</p>
                </div>
                <div className="text-sm text-slate-300">
                  <div>{job.duration}</div>
                  <div>{job.location}</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section  id="skills"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto max-w-7xl px-6 py-20"
>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Skills</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Core capabilities</h2>
        <div className="mt-10 flex flex-wrap gap-4">
          {skills.map((skill) => <span key={skill} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-5 py-3 text-sm font-medium text-slate-200">{skill}</span>)}
        </div>
      </motion.section>

      <motion.section
  id="tools"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto max-w-7xl px-6 py-20"
>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Tools</p>
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Platforms and tools I’ve worked with</h2>
        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
<motion.div
  key={tool.name}
  variants={itemVariants}
  className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 p-5 flex items-center gap-4"
>
  <Image
    src={tool.logo}
    width={40}
    height={40}
    alt={tool.name}
    className="object-contain"
  />

  <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition">
    {tool.name}
  </span>
</motion.div>
))}
        </motion.div>
      </motion.section>

<motion.section
  id="recommendations"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto max-w-7xl px-6 py-20"
>        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Recommendations</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">What people say</h2>
        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
>
          {recommendations.map((rec) => (
            <motion.div
  key={rec.name}
  variants={itemVariants}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 p-6 leading-8 text-slate-300">
                <div className="mb-4 flex items-center gap-4">
<Image
  src={rec.img}
  width={56}
  height={56}
  className="rounded-full object-cover"
  alt={rec.name}
/>                <div>
                  <h3 className="font-semibold">{rec.name}</h3>
                  <p className="text-sm text-slate-300">{rec.role}</p>
                </div>
              </div>
              <p className="leading-8 text-slate-300">“{rec.text}”</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

     <motion.section
  id="contact"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto max-w-7xl px-6 py-20"
>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-fuchsia-500/10 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Contact</p>
         <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Let’s connect</h2>
          <p className="mt-4 max-w-2xl text-slate-300 leading-8">If you’re hiring for technical or startup roles, want talent intelligence support, or would like to connect, feel free to reach out.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:saranshmisshra9759@gmail.com" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">Email Me</a>
            <a href="https://www.linkedin.com/in/saransh-mishra108" target="_blank" rel="noreferrer" className="rounded-2xl border border-cyan-300/20 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.04] hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10">View LinkedIn</a>
            <a href="https://calendly.com/saranshmishra9759/30min" target="_blank" className="rounded-2xl border border-cyan-300/20 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.04] hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10">Book a Call</a>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-300">
        © 2026 Saransh Mishra — Premium portfolio for talent intelligence, recruiting, and client-facing search work.
      </footer>
    </main>
  );
}
