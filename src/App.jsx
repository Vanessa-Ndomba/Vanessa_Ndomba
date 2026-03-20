import { startTransition, useEffect, useRef, useState } from 'react';
import { BsCodeSlash, BsFiletypeSql, BsGlobe, BsMicrosoft, BsSearch } from 'react-icons/bs';
import { CgBrowser } from 'react-icons/cg';
import { DiCss3, DiRuby } from 'react-icons/di';
import { FaCloudSun, FaMoon, FaPython, FaReact, FaSun, FaWordpress, FaBrain, FaChartLine, FaFire } from 'react-icons/fa';
import { SiDotnet, SiJavascript, SiOpenjdk, SiRust } from 'react-icons/si';
import { SiAirtable, SiVite } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { TbDatabase, TbSettingsAutomation, TbTerminal2, TbFileText } from 'react-icons/tb';

const educationItems = [
  'Bachelor of Computer and Information Science in Software Development - CPUT - Completed 2025',
  'Airtable Builder - Completed 2025',
  'Make Academy - Completed 2025',
  'Clio Admin Management - Completed 2025',
  'Diploma in Information Technology (IT) - Damelin College, Cape Town - Completed 2024',
  'Google Cloud Skills Boost - Completed 2024',
  'The Complete Web Development Bootcamp - Udemy - Online - Short Course 2024',
  'Complete Ruby - Udemy - Online - Short Course 2024',
  'National Senior Certificate (NSC) - Graduated 2020',
];

const technicalSkills = [
  { label: 'WordPress', icon: FaWordpress, color: '#21759b' },
  { label: 'Programming', icon: BsCodeSlash, color: '#f5f5f5' },
  { label: 'Web Development', icon: CgBrowser, color: '#4cc2ff' },
  { label: 'SQL', icon: BsFiletypeSql, color: '#336791' },
  { label: 'Office 360', icon: BsMicrosoft, color: '#f25022' },
  { label: 'Internet', icon: BsGlobe, color: '#2ea3ff' },
  { label: 'AI Integration', icon: FaBrain, color: '#8b5cf6' },
  { label: 'SEO', icon: BsSearch, color: '#10b981' },
  { label: 'Google Analytics', icon: FaChartLine, color: '#f59e0b' },
  { label: 'Airtable', icon: SiAirtable, color: '#18bfff' },
  { label: 'Workflow Automation', icon: TbSettingsAutomation, color: '#7c3aed' },
  { label: 'Content Management', icon: TbFileText, color: '#8b5cf6' },
  { label: 'Legal Documentation', icon: TbFileText, color: '#60a5fa' },
];

const codingLanguages = [
  { label: 'C#', icon: TbBrandCSharp, color: '#9b4f96' },
  { label: 'Java', icon: SiOpenjdk, color: '#f89820' },
  { label: 'VB.NET', icon: SiDotnet, color: '#512bd4' },
  { label: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { label: 'Ruby Basics', icon: DiRuby, color: '#cc342d' },
  { label: 'Python', icon: FaPython, color: '#3776ab' },
  { label: 'Rustc', icon: SiRust, color: '#ce412b' },
];

const interests = [
  'Coding',
  'Problem solving',
  'Communication and collaboration',
  'Continuous learning',
  'Adaptability',
  'Automation and efficiency',
  'AI and emerging technologies',
  'Data-driven insights',
  'User experience optimization',
  'Innovation and creative solutions',
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_vanessa_767?igsh=MTVyMWlzejNuZzFucw%3D%3D&utm_source=qr',
    icon: '/Insta.jpg',
  },
  {
    label: 'X',
    href: 'https://x.com/vanessadnv?s=11',
    icon: '/X.jpg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vanessa-ndomba-71805820b',
    icon: '/LinkedIn-logo.jpg',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Vanessa-Ndomba',
    shortLabel: 'GH',
  },
];

const contactDetails = [
  { type: 'email', value: 'vanessandomba2@gmail.com' },
  { type: 'location', value: 'Cape Town, South Africa' },
];

const projects = [
  {
    name: 'Portfolio Website',
    summary:
      'A responsive React portfolio that showcases my profile, skills, and contact channels in a clean single-page experience.',
    stack: ['React', 'Vite', 'CSS'],
  },
  {
    name: 'Weather Checker App',
    summary:
      'A Python weather application that lets users check weather conditions quickly using live forecast data.',
    stack: ['Python', 'Weather API', 'CLI'],
    repo: 'https://github.com/Vanessa-Ndomba/weather-checker-app',
  },
  {
    name: 'Deep Learning Training System',
    summary:
      'A Rust-based deep learning training system focused on document-aware model workflows, tokenization, and reproducible training pipelines.',
    stack: ['Rust', 'Burn', 'Tokenization'],
    repo: 'https://github.com/Vanessa-Ndomba/DLST_First',
  },
  {
    name: 'Workflow Automation Setup',
    summary:
      'A practical workflow integration project focused on improving task efficiency with no-code and low-code tools.',
    stack: ['Make', 'Airtable', 'Automation'],
  },
  {
    name: 'Database and Systems Practice',
    summary:
      'Hands-on academic and personal exercises focused on SQL, backend logic, and software development fundamentals.',
    stack: ['SQL', 'C#', 'Java'],
  },
];

const wordpressWebsites = [
  {
    name: 'Boyd Firm Law',
    url: 'https://boyd-firm.com/',
    summary:
      'Website developed and managed in WordPress for a law firm, focused on clear service presentation and strong user experience.',
  },
  {
    name: 'Joan Car Hire',
    url: 'https://joancarhire.com.na/',
    summary:
      'Website restructuring and optimization project focused on usability, visual consistency, and improved page performance.',
  },
  {
    name: 'Projordc.org',
    url: 'https://projordc.org',
    summary:
      'Temporary campaign website built in WordPress from scratch with a modern responsive layout and structured content for organizational communication.',
  },
];

const projectStackIcons = {
  React: { icon: FaReact, color: '#61dafb' },
  Vite: { icon: SiVite, color: '#646cff' },
  CSS: { icon: DiCss3, color: '#1572b6' },
  Python: { icon: FaPython, color: '#3776ab' },
  'Weather API': { icon: FaCloudSun, color: '#f59e0b' },
  CLI: { icon: TbTerminal2, color: '#f5f5f5' },
  Make: { icon: TbSettingsAutomation, color: '#7c3aed' },
  Airtable: { icon: SiAirtable, color: '#18bfff' },
  Automation: { icon: TbSettingsAutomation, color: '#22c55e' },
  SQL: { icon: TbDatabase, color: '#336791' },
  'C#': { icon: TbBrandCSharp, color: '#9b4f96' },
  Java: { icon: SiOpenjdk, color: '#f89820' },
  Rust: { icon: SiRust, color: '#ce412b' },
  Burn: { icon: FaFire, color: '#f97316' },
  Tokenization: { icon: TbFileText, color: '#38bdf8' },
};

const experiences = [
  {
    role: 'Web Developer and Content Manager - USA',
    organization: 'Boyd Firm Law',
    period: 'June - Dec 2025',
    summary:
      'Led web and content initiatives while supporting legal operations with accurate, compliant documentation and client-case administration.',
    points: [
      'Utilized Clio Admin to track case progress and manage client details, ensuring smooth workflow and accurate billing.',
      'Handled and organized bankruptcy case documents for clients, ensuring accuracy, confidentiality, and compliance with legal requirements.',
      'Spearheaded the development and launch of the firm\'s new website using modern web development frameworks for a responsive, user-friendly interface.',
      'Managed all site content, ensuring information stayed current, accurate, and aligned with the firm\'s branding and legal requirements.',
      'Optimized site performance and implemented SEO best practices to improve online visibility and client engagement.',
    ],
  },
  {
    role: 'Web Developer - Cape Town',
    organization: 'Projordc.org',
    period: 'Oct - Dec 2025',
    summary:
      'Built and maintained the organization website to support communication goals and improve digital reach.',
    points: [
      'Built the projordc.org website from the ground up using WordPress, implementing a modern and responsive layout tailored to the organization\'s needs.',
      'Managed and structured all site content to ensure clarity, consistency, and alignment with the organization\'s mission and communication goals.',
      'Integrated Google Analytics to track user behavior and improve data-driven decision-making.',
      'Applied SEO best practices to enhance search visibility, site ranking, and overall user engagement.',
    ],
  },
  {
    role: 'Legal Technology Assistant - USA',
    organization: 'Kemet Hunt Law Group',
    period: '2024 - 2025',
    summary:
      'Supported legal operations by combining case administration, document organization, and workflow automation tools.',
    points: [
      'Utilized Clio Admin to keep track of case progress and manage client details, ensuring smooth workflow and accurate billing.',
      'Organized legal documents and case information in Airtable, helping the team stay on top of critical tasks.',
      'Streamlined day-to-day operations by automating tasks through the Make Academy app and Apps Script, improving efficiency and maintaining data accuracy.',
    ],
  },
  {
    role: 'Website Restructuring - Namibia',
    organization: 'Joan Car Hire',
    period: 'June - Aug 2024',
    summary:
      'Delivered a full website restructuring focused on usability, visual consistency, and reliable page performance.',
    points: [
      'Enhanced user experience through improved navigation, consistent aesthetics, and content optimization.',
      'Implemented functional improvements, including fixing broken links and optimizing critical pages for better security and usability.',
      'Independently redesigned layouts, developed a cohesive visual identity, and implemented all design and functionality updates to ensure a seamless user experience.',
    ],
  },
  {
    role: 'Customer service | Direct marketing - Cape Town',
    organization: 'Local Debt Mediator Services',
    period: '2020 - 2021',
    summary:
      'Delivered customer-facing support and communication while maintaining accurate data handling for day-to-day operations.',
    points: [
      'Addressed customer inquiries, resolving issues promptly and effectively, ensuring a positive customer experience.',
      'Engaged in daily email correspondence, managing incoming and outgoing communications with proficiency and timeliness.',
      'Utilized Microsoft Excel extensively to capture, organize, and analyze data, ensuring accuracy and precision in delivering outputs.',
    ],
  },
];

const timelineOrbVariants = [
  'timeline-orb-orange',
  'timeline-orb-yellow',
  'timeline-orb-blue',
  'timeline-orb-purple',
  'timeline-orb-green',
];

const timelineOrbStartDelaysMs = [100, 200, 400, 600, 800];

const sectionTitles = {
  home: 'Vanessa Ndomba | Portfolio',
  about: 'Vanessa Ndomba | About',
  contact: 'Vanessa Ndomba | Contact',
};

function SectionNav({ activeSection, onChange }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'contact', label: 'Contact me' },
  ];

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={activeSection === item.id ? 'active' : ''}
          onClick={() => onChange(item.id)}
          aria-pressed={activeSection === item.id}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

function LoopHeading({ text, cycleMs = 5000, useHeroStyle = false }) {
  const chars = Array.from(text);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), cycleMs);
    return () => clearInterval(id);
  }, [cycleMs]);

  return (
    <h2 className="heading-loop" key={cycle} aria-label={text}>
      {chars.map((char, index) => (
        <span
          key={`${cycle}-${char}-${index}`}
          className={useHeroStyle ? 'hero-intro-char' : 'heading-loop-char'}
          style={useHeroStyle ? { '--word-index': index } : { '--heading-char-index': index }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h2>
  );
}

function HomeSection({ onViewAbout }) {
  const cvFilePath = '/Vanessa%20Ndomba%27s%20Resume.pdf';
  const welcomeLineOneText = 'Hello there!';
  const welcomeLineTwoText = 'I\'m Vanessa';
  const welcomeLineThreeText = 'Ndomba.';
  const welcomeLineOneChars = Array.from(welcomeLineOneText);
  const welcomeLineTwoChars = Array.from(welcomeLineTwoText);
  const welcomeLineThreeChars = Array.from(welcomeLineThreeText);
  const [welcomeCycle, setWelcomeCycle] = useState(0);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedWordpressSite, setSelectedWordpressSite] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const timelineRef = useRef(null);
  const experienceRefs = useRef([]);
  const [timelineOrbStates, setTimelineOrbStates] = useState(
    timelineOrbVariants.map(() => ({
      top: 0,
      moveMs: 0,
      isPaused: false,
      isVisible: false,
    })),
  );

  useEffect(() => {
    const id = setInterval(() => setWelcomeCycle((c) => c + 1), 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const timerIds = [];

    const clearTimers = () => {
      while (timerIds.length > 0) {
        const timerId = timerIds.pop();
        clearTimeout(timerId);
      }
    };

    const schedule = (callback, delayMs) => {
      const timerId = setTimeout(() => {
        const timerIndex = timerIds.indexOf(timerId);
        if (timerIndex !== -1) {
          timerIds.splice(timerIndex, 1);
        }
        callback();
      }, delayMs);
      timerIds.push(timerId);
    };

    const startOrbMotion = () => {
      if (isCancelled) {
        return;
      }

      const timelineElement = timelineRef.current;
      const cards = experienceRefs.current.filter(Boolean);

      if (!timelineElement || cards.length === 0) {
        schedule(startOrbMotion, 200);
        return;
      }

      const orbSizePx = 11.2;
      const maxTop = Math.max(0, timelineElement.clientHeight - orbSizePx);
      const stops = cards.map((card) => {
        const heading = card.querySelector('.experience-head');
        const headingOffset = heading ? heading.offsetTop : 20;
        const target = card.offsetTop + headingOffset;
        return Math.min(maxTop, Math.max(0, target));
      });

      if (stops.length === 0) {
        return;
      }

      // Reset all orb states before starting a new continuous cycle.
      setTimelineOrbStates(
        timelineOrbVariants.map(() => ({
          top: 0,
          moveMs: 0,
          isPaused: false,
          isVisible: false,
        })),
      );

      const updateOrbState = (orbIndex, patch) => {
        setTimelineOrbStates((current) =>
          current.map((state, index) => (index === orbIndex ? { ...state, ...patch } : state)),
        );
      };

      timelineOrbVariants.forEach((_, orbIndex) => {
        const startDelayMs = timelineOrbStartDelaysMs[orbIndex] ?? 0;
        let currentStopIndex = 0;

        const moveToNextStop = () => {
          if (isCancelled) {
            return;
          }

          if (currentStopIndex >= stops.length - 1) {
            updateOrbState(orbIndex, {
              isPaused: false,
              isVisible: false,
              moveMs: 0,
            });

            currentStopIndex = 0;

            schedule(() => {
              if (isCancelled) {
                return;
              }

              updateOrbState(orbIndex, {
                isVisible: true,
                isPaused: true,
                moveMs: 0,
                top: stops[0],
              });

              schedule(moveToNextStop, 2000);
            }, 300);

            return;
          }

          const nextStopIndex = currentStopIndex + 1;
          updateOrbState(orbIndex, {
            isPaused: false,
            moveMs: 900,
            top: stops[nextStopIndex],
          });

          schedule(() => {
            if (isCancelled) {
              return;
            }

            currentStopIndex = nextStopIndex;
            updateOrbState(orbIndex, {
              isPaused: true,
              moveMs: 0,
            });

            schedule(moveToNextStop, 2000);
          }, 900);
        };

        schedule(() => {
          if (isCancelled) {
            return;
          }

          updateOrbState(orbIndex, {
            isVisible: true,
            isPaused: true,
            moveMs: 0,
            top: stops[0],
          });

          schedule(moveToNextStop, 0);
        }, startDelayMs);
      });
    };

    startOrbMotion();

    const handleResize = () => {
      clearTimers();
      startOrbMotion();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isCancelled = true;
      clearTimers();
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <section className="panel hero-panel" aria-label="Home">
        <div className="hero-copy">
          <p className="eyebrow">Software Developer</p>
          <h1 className="hero-intro" key={welcomeCycle} aria-label="Hello there! I'm Vanessa Ndomba."> 
            <span className="hero-intro-line">
              {welcomeLineOneChars.map((char, index) => (
                <span
                  key={`line1-${char}-${index}`}
                  className="hero-intro-char"
                  style={{ '--word-index': index }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            <span className="hero-intro-line">
              {welcomeLineTwoChars.map((char, index) => (
                <span
                  key={`line2-${char}-${index}`}
                  className="hero-intro-char"
                  style={{ '--word-index': index + welcomeLineOneChars.length + 2 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            <span className="hero-intro-line">
              {welcomeLineThreeChars.map((char, index) => (
                <span
                  key={`line3-${char}-${index}`}
                  className="hero-intro-char"
                  style={{ '--word-index': index + welcomeLineOneChars.length + welcomeLineTwoChars.length + 4 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>
          <p className="lead">
            I have a strong foundation in programming languages, databases, and
            modern web technologies, with practical experience building responsive
            websites, optimizing system performance, and integrating APIs and
            workflows.
          </p>
          <p>
            I thrive in collaborative, fast-paced environments, bringing strong
            problem-solving, analytical, and communication skills while continuing
            to learn and expand my expertise.
          </p>
          <div className="hero-actions">
            <details className="cv-menu">
              <summary className="primary-link">Resume </summary>
              <div className="cv-menu-items" role="menu" aria-label="CV actions">
                <a href={cvFilePath} target="_blank" rel="noreferrer" role="menuitem">
                  View CV
                </a>
                <a href={cvFilePath} download role="menuitem">
                  Download CV
                </a>
              </div>
            </details>
          </div>
        </div>

        <div className="hero-card" aria-label="Profile picture of Vanessa Ndomba">
          <div className="portrait-ring">
            <img
              src="/Vane.jpg"
              alt="Portrait of Vanessa Ndomba"
            />
          </div>
          <div className="highlight-list">
            {['Web Development', 'Backend Programming', 'Automation', 'IT Support'].map((badge, i) => (
              <span key={badge} style={{ '--badge-index': i }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="panel projects-panel" aria-label="Projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <LoopHeading text="My recent work" cycleMs={4600} useHeroStyle />
          <p>
            A selection of recent projects that demonstrate my ability to design,
            build, and deliver practical solutions across web development,
            automation, and core software engineering.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`card project-card selectable-card ${selectedProject === project.name ? 'portfolio-item-active' : ''}`}
              key={project.name}
              style={{ '--project-index': index }}
              onClick={() => setSelectedProject(project.name)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project.name);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={selectedProject === project.name}
            >
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul className="tag-list">
                {project.stack.map((item) => {
                  const stackConfig = projectStackIcons[item];
                  const StackIcon = stackConfig?.icon;

                  return (
                    <li className="project-tag-item" key={`${project.name}-${item}`}>
                      {StackIcon && (
                        <span className="project-tag-icon" style={{ '--icon-color': stackConfig.color }} aria-hidden="true">
                          <StackIcon />
                        </span>
                      )}
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              {project.repo && (
                <a
                  className="project-link"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="panel wordpress-panel" aria-label="WordPress websites">
        <div className="section-heading">
          <p className="eyebrow">WordPress Websites</p>
          <LoopHeading text="Websites I built with WordPress" cycleMs={5200} />
          <p>
            A quick collection of live WordPress websites I have built and managed.
          </p>
        </div>

        <div className="projects-grid">
          {wordpressWebsites.map((site, index) => (
            <article
              className={`card project-card selectable-card ${selectedWordpressSite === site.name ? 'portfolio-item-active' : ''}`}
              key={site.name}
              style={{ '--project-index': index }}
              onClick={() => setSelectedWordpressSite(site.name)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedWordpressSite(site.name);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={selectedWordpressSite === site.name}
            >
              <h3>{site.name}</h3>
              <p>{site.summary}</p>
              <a
                className="project-link"
                href={site.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="panel experiences-panel" aria-label="Experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <LoopHeading text="Where I have applied my skills" cycleMs={5400} />
          <p>
            This section highlights my hands-on experience delivering reliable
            digital solutions, supporting legal operations, and driving process
            efficiency through practical, results-focused execution.
          </p>
        </div>

        <div className="experience-timeline" ref={timelineRef}>
          {timelineOrbStates.map((orbState, index) =>
            orbState.isVisible ? (
              <span
                key={`timeline-orb-${timelineOrbVariants[index]}`}
                className={`timeline-orb timeline-orb-runner ${timelineOrbVariants[index]} ${orbState.isPaused ? 'is-paused' : ''}`}
                style={{ top: `${orbState.top}px`, transitionDuration: `${orbState.moveMs}ms` }}
                aria-hidden="true"
              />
            ) : null,
          )}
          {experiences.map((item, index) => (
            <article
              className={`card experience-card selectable-card ${index % 2 === 0 ? 'timeline-right' : 'timeline-left'} ${selectedExperience === item.role ? 'portfolio-item-active' : ''}`}
              key={`${item.role}-${item.period}`}
              style={{ '--exp-index': index }}
              ref={(element) => {
                experienceRefs.current[index] = element;
              }}
              onClick={() => setSelectedExperience(item.role)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedExperience(item.role);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={selectedExperience === item.role}
            >
              <div className="experience-head">
                <h3>{item.role}</h3>
                <span>{item.period}</span>
              </div>
              <p className="experience-org">{item.organization}</p>
              <p>{item.summary}</p>
              {item.points && item.points.length > 0 && (
                <ul className="experience-points">
                  {item.points.map((point) => (
                    <li key={`${item.role}-${point}`}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutSection() {
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedCodingLanguage, setSelectedCodingLanguage] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');

  return (
    <section
      className="panel about-panel"
      aria-label="About Me"
    >
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <LoopHeading text="Education, skills, languages, and strengths" cycleMs={5600} />
      </div>

      <div className="about-grid">
        <article className="card full-width about-card" style={{ '--about-index': 0 }}>
          <h3>Education</h3>
          <ul className="stack-list education-list">
            {educationItems.map((item) => (
              <li
                key={item}
                className={selectedEducation === item ? 'education-item-active' : ''}
                onClick={() => setSelectedEducation(item)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedEducation(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={selectedEducation === item}
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="card about-card full-width" style={{ '--about-index': 1 }}>
          <h3>Skills</h3>
          <ul className="tag-list skills-row" aria-label="Technical skills">
            {technicalSkills.map((item) => (
              <li
                key={item.label}
                className={`about-selectable-item language-item ${selectedSkill === item.label ? 'portfolio-item-active' : ''}`}
                onClick={() => setSelectedSkill(item.label)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedSkill(item.label);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={selectedSkill === item.label}
              >
                <span className="language-icon" style={{ '--icon-color': item.color }} aria-hidden="true">
                  <item.icon />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card about-card full-width" style={{ '--about-index': 2 }}>
          <h3>Coding Languages</h3>
          <ul className="tag-list skills-row" aria-label="Coding languages">
            {codingLanguages.map((item) => (
              <li
                key={item.label}
                className={`about-selectable-item language-item ${selectedCodingLanguage === item.label ? 'portfolio-item-active' : ''}`}
                onClick={() => setSelectedCodingLanguage(item.label)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedCodingLanguage(item.label);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={selectedCodingLanguage === item.label}
              >
                <span className="language-icon" style={{ '--icon-color': item.color }} aria-hidden="true">
                  <item.icon />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card about-card full-width" style={{ '--about-index': 3 }}>
          <h3>Interests</h3>
          <ul className="tag-list skills-row" aria-label="Interests">
            {interests.map((item) => (
              <li
                key={item}
                className={`about-selectable-item ${selectedInterest === item ? 'portfolio-item-active' : ''}`}
                onClick={() => setSelectedInterest(item)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedInterest(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={selectedInterest === item}
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function ContactSection() {
  const [selectedContactDetail, setSelectedContactDetail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [
      `Name: ${formData.name} ${formData.surname}`.trim(),
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:vanessandomba2@gmail.com?subject=${encodeURIComponent(
      `Portfolio message from ${formData.name || 'visitor'}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="panel contact-panel" aria-label="Contact Me">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <LoopHeading text="Let's connect" cycleMs={4200} />
        <p>
          Use the form below or reach out directly using the contact details in
          this section.
        </p>
      </div>

      <div className="contact-layout">
        <article className="card contact-card">
          <h3>Direct Contact</h3>
          <ul className="contact-list">
            {contactDetails.map((item) => {
              const detailKey = `${item.type}:${item.value}`;

              return item.type === 'email' ? (
                <li
                  key={detailKey}
                  className={`about-selectable-item ${selectedContactDetail === detailKey ? 'portfolio-item-active' : ''}`}
                >
                  <a
                    className="contact-email-link"
                    href={`mailto:${item.value}`}
                    onClick={() => setSelectedContactDetail(detailKey)}
                    aria-label="Email Vanessa Ndomba"
                  >
                    <img className="contact-email-logo" src="/gmail-logo.svg" alt="" aria-hidden="true" />
                    <span>{item.value}</span>
                  </a>
                </li>
              ) : item.type === 'location' ? (
                <li
                  key={detailKey}
                  className={`about-selectable-item ${selectedContactDetail === detailKey ? 'portfolio-item-active' : ''}`}
                >
                  <a
                    className="contact-location-link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.value)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setSelectedContactDetail(detailKey)}
                    aria-label="Open location in Google Maps"
                  >
                    <img className="contact-location-logo" src="/location-logo.svg" alt="" aria-hidden="true" />
                    <span>{item.value}</span>
                  </a>
                </li>
              ) : (
                <li
                  key={detailKey}
                  className={`about-selectable-item ${selectedContactDetail === detailKey ? 'portfolio-item-active' : ''}`}
                  onClick={() => setSelectedContactDetail(detailKey)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedContactDetail(detailKey);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={selectedContactDetail === detailKey}
                >
                  {item.value}
                </li>
              );
            })}
          </ul>
          <a className="primary-link compact" href="mailto:vanessandomba2@gmail.com">
            Send Email
          </a>
        </article>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />

          <label htmlFor="surname">Surname</label>
          <input id="surname" name="surname" type="text" value={formData.surname} onChange={handleChange} required />

          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required />

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer information">
      <div className="footer-grid">
        <div>
          <h3>This portfolio is about</h3>
          <p>
            Turning ideas into clean, high-impact digital experiences. Explore
            my projects, skills, and the value I bring to every build.
          </p>
        </div>

        <div>
          <h3>Social</h3>
          <ul className="social-list">
            {socialLinks.map((item, index) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} style={{ '--social-index': index }}>
                  {item.icon ? (
                    <img src={item.icon} alt={item.label} />
                  ) : (
                    <span className="social-badge" aria-hidden="true">
                      {item.shortLabel || item.label.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="contact-list">
            {contactDetails.map((item) => (
              <li key={`${item.type}:${item.value}`}>
                {item.type === 'email' ? (
                  <a className="contact-email-link" href={`mailto:${item.value}`} aria-label="Email Vanessa Ndomba">
                    <img className="contact-email-logo" src="/gmail-logo.svg" alt="" aria-hidden="true" />
                    <span>{item.value}</span>
                  </a>
                ) : item.type === 'location' ? (
                  <a
                    className="contact-location-link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.value)}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open location in Google Maps"
                  >
                    <img className="contact-location-logo" src="/location-logo.svg" alt="" aria-hidden="true" />
                    <span>{item.value}</span>
                  </a>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDayMode, setIsDayMode] = useState(false);
  const headerNameChars = Array.from('Vanessa Ndomba');

  useEffect(() => {
    document.title = sectionTitles[activeSection];
  }, [activeSection]);

  useEffect(() => {
    document.documentElement.dataset.theme = isDayMode ? 'day' : 'night';
  }, [isDayMode]);

  const handleSectionChange = (section) => {
    startTransition(() => {
      setActiveSection(section);
    });
  };

  return (
    <div className="app-shell">
      <div className="background-orb orb-one" aria-hidden="true" />
      <div className="background-orb orb-two" aria-hidden="true" />

      <header className="site-header">
        <div className="brand-lockup">
          <span className="brand-name" aria-label="Vanessa Ndomba">
            <span className="brand-loader" aria-hidden="true">
              {headerNameChars.map((char, index) => (
                <span key={`brand-char-${char}-${index}`} style={{ '--brand-delay': `${index * 0.12}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </span>
          <span className="brand-role">Software Developer and Technology Specialist</span>
        </div>
        <SectionNav activeSection={activeSection} onChange={handleSectionChange} />
        <button
          className="theme-toggle"
          onClick={() => setIsDayMode(v => !v)}
          aria-label={isDayMode ? 'Switch to night mode' : 'Switch to day mode'}
          title={isDayMode ? 'Switch to night mode' : 'Switch to day mode'}
        >
          {isDayMode ? <FaMoon /> : <FaSun />}
        </button>
      </header>

      <main className="site-main">
        {activeSection === 'home' && (
          <HomeSection onViewAbout={() => handleSectionChange('about')} />
        )}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      <Footer />
    </div>
  );
}