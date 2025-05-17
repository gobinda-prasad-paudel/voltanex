import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import JoinTeamSection from "@/components/join-team-section"
import ContactSection from "@/components/contact-section"
import TestimonialsSection from "@/components/testimonials-section"
import TeamSection from "@/components/team-section"
import DonateSection from "@/components/donate-section"
import FocusAreasSection from "@/components/focus-areas-section"
import ChatbotInitializer from "@/components/chatbot-initializer"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <ChatbotInitializer />
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <ProjectsSection />
      <TeamSection />
      {/* <TestimonialsSection /> */}
      {/* <JoinTeamSection /> */}
      {/* <DonateSection /> */}
      <ContactSection />
    </div>
  )
}
