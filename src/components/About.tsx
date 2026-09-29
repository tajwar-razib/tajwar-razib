import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <div className="max-w-5xl flex flex-col md:flex-row items-start gap-10 animate-slide-up">
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-primary/40 shadow-xl hover-glow">
              <img
                src={profileImage}
                alt="Tajwar Razib - Mechanical Engineering Researcher"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <h3 className="text-3xl font-bold">Engineering Researcher</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate researcher working at the intersection of Additive Manufacturing, Thermodynamics, and Agentic AI. My research combines computational modeling, data-driven analysis, and intelligent systems to address complex engineering challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am particularly interested in applying machine learning, computational methods, and autonomous AI frameworks to improve manufacturing processes, enhance process monitoring and decision-making, and optimize thermal and energy systems. My goal is to bridge traditional engineering principles with emerging AI technologies to develop smarter, more efficient, and reliable engineering solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;