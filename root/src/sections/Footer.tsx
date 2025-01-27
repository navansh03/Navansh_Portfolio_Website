import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/navansh-krishna-goswami-341713248/",
  },
  {
    title: "Github",
    href: "https://github.com/navansh03",
  },
  {
    title: "Leetcode",
    href: "https://leetcode.com/navansh03/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/navansh_.g/",
  },
];

export const Footer = () => {
  const currentYear=new Date().getFullYear();
  return (
    <footer className="relative  overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40 ">
            &copy; {currentYear}. All Rights Reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
                aria-label={`Visit ${link.title}`}  
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
