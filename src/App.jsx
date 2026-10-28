import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Music2,
  VolumeX,
  Languages,
  ChevronDown,
  Heart,
  Flower2,
  Images,
  CalendarDays,
} from "lucide-react";

const COPY = {
  en: {
    eyebrow: "A celebration of love, family & tradition",
    invitation: "Together with our families",
    inviteLine:
      "request the pleasure of your company as we begin our journey as one",
    poruwa: "Poruwa Ceremony",
    registration: "Marriage Registration",
    date: "Thursday, 13 May 2027",
    parents: "With the blessings of our parents",
    groomParents: "Lovely Son of Mr. Karunadasa & Mrs. Somawathi",
    brideParents: "Lovely Daughter of Mr. Jayathunga & Mrs. Malani",
    storyTitle: "A day woven with tradition",
    storyText:
      "With grateful hearts, we invite you to witness the beginning of our forever, surrounded by the customs and blessings of Sri Lanka.",
    schedule: "The day's ceremonies",
    future: "More beautiful traditions will be added here",
    futureText:
      "Additional ceremony names and auspicious times will be included once confirmed by our families.",
    gallery: "Moments of us",
    galleryText:
      "Our portraits and favourite memories will find their place here.",
    rsvp: "We would be honoured by your presence",
    rsvpText: "Your blessings will make our day even more meaningful.",
    footer: "With love and gratitude",
    open: "Open the invitation",
    seal: "A day to remember",
    photoNote: "Replace these placeholders with the couple's photographs",
    addCalendar: "Save the date",
    grromFullName: "Naveen Nuwan",
    grromShortName: "Naveen",
    brideFullName: "Pawani Wasana",
    brideShortName: "Wasana",
  },
  si: {
    eyebrow: "ආදරය, පවුල සහ සම්ප්‍රදාය එක්වන මංගල්‍යය",
    invitation: "අපගේ පවුල්වල ආශීර්වාදය සමඟ",
    inviteLine: "අපගේ නව ජීවිත ගමනේ සතුට බෙදාගැනීමට ඔබට ගෞරවයෙන් ආරාධනා කරමු",
    poruwa: "පෝරුවේ චාරිත්‍රය",
    registration: "විවාහ ලියාපදිංචිය",
    date: "2027 මැයි 13, බ්‍රහස්පතින්දා",
    parents: "දෙමාපිය ආශීර්වාදය සමඟ",
    groomParents: "කරුණාදාස මහතාගේ සහ සෝමාවතී මහත්මියගේ ආදරණීය පුත්‍රයා",
    brideParents: "ජයතුංග මහතාගේ සහ මාලනි මහත්මියගේ ආදරණීය දියණිය",
    storyTitle: "සම්ප්‍රදායෙන් හැඩවන සුන්දර දිනයක්",
    storyText:
      "ශ්‍රී ලාංකීය සම්ප්‍රදායන් හා ආශීර්වාද මධ්‍යයේ අපගේ නව ජීවිත ගමනේ ආරම්භය දැකගැනීමට ඔබට ආරාධනා කරමු.",
    schedule: "මංගල උත්සවයේ වේලාවන්",
    future: "තවත් චාරිත්‍ර මෙහි එක් කෙරේ",
    futureText:
      "පවුල්වලින් වේලාවන් තහවුරු වූ පසු අනෙකුත් චාරිත්‍ර මෙහි ඇතුළත් කරනු ලැබේ.",
    gallery: "අපගේ මතකයන්",
    galleryText: "අපගේ ඡායාරූප සහ සුන්දර මතකයන් මෙහි එක් කරනු ලැබේ.",
    rsvp: "ඔබගේ පැමිණීම අපට ගෞරවයකි",
    rsvpText: "ඔබගේ ආශීර්වාදය අපගේ දිනය තවත් අර්ථවත් කරනු ඇත.",
    footer: "ආදරයෙන් සහ කෘතඥතාවයෙන්",
    open: "ආරාධනා පත්‍රය විවෘත කරන්න",
    seal: "මතකයේ රැඳෙන දිනයක්",
    photoNote: "මෙම ස්ථානවලට යුවළගේ ඡායාරූප එක් කරන්න",
    addCalendar: "දිනය සුරකින්න",
    grromFullName: "නවින් නුවන්",
    grromShortName: "නවින්",
    brideFullName: "පවනි වාසනා",
    brideShortName: "වාසනා",
  },
};

const events = [
  { time: "09:30 AM", title: "poruwa", detail: "13 May 2027" },
  { time: "10:30 AM", title: "registration", detail: "13 May 2027" },
];

function Lotus({ className = "" }) {
  return (
    <svg
      className={`lotus ${className}`}
      viewBox="0 0 180 100"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      >
        <path d="M90 88 C64 73 54 48 72 24 C85 42 90 61 90 88Z" />
        <path d="M90 88 C116 73 126 48 108 24 C95 42 90 61 90 88Z" />
        <path d="M90 88 C42 81 27 59 36 42 C58 46 78 63 90 88Z" />
        <path d="M90 88 C138 81 153 59 144 42 C122 46 102 63 90 88Z" />
        <path d="M90 88 C66 70 68 38 90 12 C112 38 114 70 90 88Z" />
        <path d="M25 90 Q90 99 155 90" />
        <path d="M46 96 Q90 102 134 96" />
      </g>
    </svg>
  );
}

function Petals({ count = 18 }) {
  const reduce = useReducedMotion();
  return (
    <div className="petal-field" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <motion.span
          key={i}
          className="petal"
          initial={{ y: "-12vh", x: 0, rotate: 0, opacity: 0 }}
          animate={
            reduce
              ? {}
              : {
                  y: "112vh",
                  x: [0, i % 2 ? 55 : -45, i % 3 ? -25 : 30],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.72, 0.55, 0],
                }
          }
          transition={{
            duration: 11 + (i % 7) * 2,
            delay: (i % 9) * 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${(i * 37) % 100}%`, scale: 0.55 + (i % 5) * 0.15 }}
        />
      ))}
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [lang, setLang] = useState("si");
  const [musicOn, setMusicOn] = useState(false);
  const [audio, setAudio] = useState(null);
  const t = COPY[lang];

  useEffect(() => {
    const player = new Audio("/music/music.mp3");
    player.loop = true;
    player.volume = 0.35;
    player.preload = "auto";

    setAudio(player);

    // Keep the music state in sync with playback.
    player.addEventListener("play", () => setMusicOn(true));
    player.addEventListener("pause", () => setMusicOn(false));

    // Attempt autoplay. Browsers may block this.
    player.play().catch(() => {
      setMusicOn(false);
      console.log("Music will start after visitor interaction.");
    });

    return () => {
      player.pause();
      player.src = "";
    };
  }, []);

  const startMusic = async () => {
    if (!audio) return;

    try {
      await audio.play();
      setMusicOn(true);
    } catch (error) {
      setMusicOn(false);
      console.warn("Unable to start music:", error);
    }
  };

  const toggleMusic = async () => {
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setMusicOn(false);
    } else {
      await startMusic();
    }
  };

  const openInvitation = async () => {
    setOpened(true);
    await startMusic();
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className={lang === "si" ? "app sinhala" : "app"}>
      <AnimatePresence>
        {!opened && (
          <motion.div
            className="opening"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.1 } }}
          >
            <Petals count={14} />
            <motion.div
              className="envelope-card"
              initial={{ y: 24, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <div className="envelope-frame">
                <Lotus className="opening-lotus" />
                <span className="tiny-caps">{t.seal}</span>
                {/* <h1>N <span>&</span> P</h1> */}
                <p className="envelope-names">
                  {t.grromShortName} & {t.brideShortName}
                </p>
                {/* <div className="wax-seal"> */}
                {/* N<span>✦</span>P */}
                {/* </div> */}
                <button className="open-button" onClick={openInvitation}>
                  {t.open} <span aria-hidden="true">↗</span>
                </button>
                <p className="envelope-date">13 · 05 · 2027</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="topbar">
        <button
          className="monogram"
          onClick={() => scrollTo("home")}
          aria-label="Go to top"
        ></button>
        <div className="top-actions">
          <button
            className="utility"
            onClick={() => setLang(lang === "en" ? "si" : "en")}
            aria-label="Change language"
          >
            <Languages size={16} />
            {lang === "en" ? "සිංහල" : "English"}
          </button>
          <button
            className="music-button"
            onClick={toggleMusic}
            aria-label={musicOn ? "Pause music" : "Play music"}
          >
            {musicOn ? <Music2 size={17} /> : <VolumeX size={17} />}
            <span>{musicOn ? "Music on" : "Play music"}</span>
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <Petals count={22} />
        <div className="hero-ornament ornament-left">
          <Lotus />
        </div>
        <div className="hero-ornament ornament-right">
          <Lotus />
        </div>
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={opened ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 1.2, delay: 0.15 }}
        >
          <p className="eyebrow">{t.eyebrow}</p>
          <div className="fine-rule">
            <span>✦</span>
          </div>
          <p className="invitation-line">{t.invitation}</p>
          <h1 className="names">
            <span>{t.grromFullName}</span>
            <i>&</i>
            <span>{t.brideFullName}</span>
          </h1>
          <p className="full-name-note"> </p>
          <p className="hero-subtitle">{t.inviteLine}</p>
          <div className="hero-date">{t.date}</div>
          <button className="scroll-cue" onClick={() => scrollTo("couple")}>
            {lang === "en" ? "Discover our invitation" : "ආරාධනාව බලන්න"}{" "}
            <ChevronDown size={16} />
          </button>
        </motion.div>
        <motion.div
          className="hero-illustration"
          initial={{ opacity: 0, y: 35 }}
          animate={opened ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 1.4, delay: 0.45 }}
        >
          <img
            src="/images/Sri_Lankan_Wedding_Portrait.png"
            alt="Illustration of a Kandyan bride and groom with white lotus flowers"
          />
        </motion.div>
        <div className="vertical-note">A SRI LANKAN WEDDING · 2027</div>
      </section>

      <section id="couple" className="couple-section section-pad">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-kicker">{t.parents}</span>
          <Lotus className="small-lotus" />
          <h2>{t.storyTitle}</h2>
          <p>{t.storyText}</p>
        </motion.div>
        <div className="family-grid">
          <motion.article
            className="family-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
          >
            <span className="card-index"></span>
            <p>{t.groomParents}</p>
            <br />
            <div className="card-rule"></div>
            <h3>{t.grromFullName}</h3>
          </motion.article>
          <div className="between-mark">
            <Heart size={20} strokeWidth={1} />
          </div>
          <motion.article
            className="family-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
          >
            <span className="card-index"></span>
            <p>{t.brideParents}</p>
            <br />
            <div className="card-rule"></div>
            <h3>{t.brideFullName}</h3>
          </motion.article>
        </div>
      </section>

      <section id="ceremonies" className="ceremony-section section-pad">
        <div className="section-heading light-heading">
          <span className="section-kicker">13 · 05 · 2027</span>
          <h3>{t.schedule}</h3>
          <p>
            {lang === "en"
              ? "A day of blessings, promises and the beginning of forever."
              : "ආශීර්වාද, පොරොන්දු සහ නව ජීවිතයක ආරම්භය."}
          </p>
        </div>
        <div className="timeline">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              className="timeline-event"
              initial={{ opacity: 0, x: i % 2 ? 25 : -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="timeline-number">0{i + 1}</div>
              <div className="timeline-info">
                <span className="timeline-time">{event.time}</span>
                <h3>{t[event.title]}</h3>
                <p>{event.detail}</p>
              </div>
              <Flower2 className="timeline-flower" size={22} strokeWidth={1} />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery-section section-pad">
        <div className="section-heading">
          <span className="section-kicker">
            <Images size={14} style={{ verticalAlign: "middle" }} /> &nbsp; OUR
            PORTRAITS
          </span>
          <h2>{t.gallery}</h2>
          <p>{t.galleryText}</p>
        </div>
        <div className="photo-grid">
          {/* <div className="photo-placeholder portrait-one">
            <img
              src="/images/naveen.jpg
              "
              alt="Naveen and Pawani wedding portrait"
            />
          </div>

          <div className="photo-placeholder portrait-two">
            <img src="/images/pawani.JPG" alt="Naveen and Pawani together" />
          </div> */}

          <div className="photo-placeholder portrait-three">
            <img
              src="/images/couple1.jpg"
              alt="A favourite memory of Naveen and Pawani"
            />
          </div>
        </div>
      </section>

      <section className="closing-section">
        <Lotus className="closing-lotus" />
        <span className="section-kicker">{t.footer}</span>
        <h2>
          {t.grromShortName} <i>&</i> {t.brideShortName}
        </h2>
        <p>{t.rsvp}</p>
        <p className="closing-small">{t.rsvpText}</p>
        <button
          className="calendar-button"
          onClick={() => {
            const ics = [
              "BEGIN:VCALENDAR",
              "VERSION:2.0",
              "BEGIN:VEVENT",
              "DTSTART:20270513T093000",
              "DTEND:20270513T113000",
              "SUMMARY:Wedding of Naveen Nuwan Chathurangana and Pawani Wasana",
              "DESCRIPTION:Poruwa ceremony at 9:30 AM and marriage registration at 10:30 AM.",
              "END:VEVENT",
              "END:VCALENDAR",
            ].join("\\r\\n");
            const blob = new Blob([ics], {
              type: "text/calendar;charset=utf-8",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Naveen-Pawani-Wedding.ics";
            a.click();
            URL.revokeObjectURL(url);
          }}
        >
          <CalendarDays size={16} />
          {t.addCalendar}
        </button>
        <footer>
          13 · MAY · 2027 <span>✦</span> SRI LANKA
        </footer>
      </section>
    </main>
  );
}

export default App;
