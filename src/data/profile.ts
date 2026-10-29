/**
 * Central configuration for personal details.
 * Everything personal (name, links, resume, contact) lives here so it can be
 * updated in one place without touching components.
 */

export const profile = {
  fullName: "MD Zahidul Islam",
  shortName: "Zahidul Islam",
  designation: "Full Stack Developer",
  location: "Dhaka, Bangladesh",
  greeting: "Hi, I'm",
  intro:
    "A Full Stack Developer focused on building modern, responsive, and user-friendly web applications. I enjoy solving problems, learning new technologies, and turning ideas into practical digital experiences.",
  photo: {
    src: "/images/profile.jpg",
    alt: "Portrait of MD Zahidul Islam, Full Stack Developer",
  },
  /**
   * Resume source is configurable:
   * - `downloadUrl` points at the local PDF in /public (verified to exist).
   * - `externalUrl` is the original Google Drive file (sharing is open).
   * Switch `downloadUrl` to `externalUrl` if you prefer linking to Drive.
   */
  resume: {
    downloadUrl: "/resume.pdf",
    externalUrl:
      "https://drive.google.com/file/d/1LBu4nCCUxX7coPQ8TOj-LvRiCbJxC8ME/view?usp=sharing",
    directUrl:
      "https://drive.google.com/uc?export=download&id=1LBu4nCCUxX7coPQ8TOj-LvRiCbJxC8ME",
    label: "Download Resume",
  },
  education: {
    degree: "Bachelor of Science in Computer Science and Engineering",
    shortDegree: "B.Sc. in CSE",
    institution: "Sonargaon University",
    location: "Dhaka, Bangladesh",
    status: "Currently pursuing",
  },
} as const;

export const socials = {
  github: "https://github.com/zahidulislam420",
  linkedin: "https://www.linkedin.com/in/md-zahidulislam420/",
  twitter: "https://x.com/ZahidulIsl19509",
  /**
   * The Facebook link currently points to the general Facebook homepage and has
   * not been verified as a personal profile, so it is intentionally not
   * rendered anywhere. Replace this value with the real profile URL and add it
   * back to the UI when available.
   */
  facebook: "https://www.facebook.com/",
  email: "zahidulislam.cell@gmail.com",
  phoneDisplay: "+880 1626 104564",
  phoneRaw: "01626104564",
  /** International format used for the WhatsApp deep link. */
  whatsapp: "https://wa.me/8801626104564",
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;
