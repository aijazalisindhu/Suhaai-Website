import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story of Suhaai, a village-based education initiative from Village 21 Dadh working for rural girls education in Sindh."
};

const challenges = [
  "Long distance from village to high school",
  "Daily transport expenses",
  "Poverty and limited family income",
  "Lack of safe travel options",
  "Social and cultural hesitation around girls' education",
  "Poor quality of education in government schools",
  "Lack of modern learning in English, Science, Mathematics, Computer Education, and Artificial Intelligence"
];

const improvements = [
  {
    title: "3 New Classrooms",
    image: "/Images/About/classrooms.webp"
  },
  {
    title: "Solar Panels & Fans",
    image: "/Images/About/solar-fans.webp"
  },
  {
    title: "Furniture",
    image: "/Images/About/furniture.webp"
  },
  {
    title: "Washrooms & Washbasins",
    image: "/Images/About/washrooms.webp"
  },
  {
    title: "Book Bank & Library",
    image: "/Images/About/book-bank-library.webp"
  },
  {
    title: "Learning Materials",
    image: "/Images/About/learning-materials.webp"
  }
];

const provisions = [
  "Free tuition and coaching classes",
  "Free transport support for girls",
  "Qualified teachers",
  "English, Mathematics, Science, Physics, Chemistry, Biology, and Sindhi support",
  "Study circles and awareness sessions",
  "Newspaper reading and current affairs learning",
  "Book bank and library support",
  "Free notebooks and stationery",
  "Classroom furniture and learning materials",
  "Safe and supportive learning environment"
];

const impact = [
  { value: "300+", label: "Students Connected with Learning Support" },
  { value: "3", label: "Free Transport Rickshaws" },
  { value: "60+", label: "Girls Attending City High School" },
  { value: "3", label: "Additional Classrooms Built" },
  { value: "1", label: "Book Bank & Library Started" },
  { value: "2026", label: "Girls Expected to Reach College and University Level" }
];

const vision = [
  "More village-based learning centers",
  "Computer lab facilities",
  "Science lab facilities",
  "Digital learning opportunities",
  "More transport support for girls",
  "Scholarships for deserving students",
  "Better classroom resources",
  "Stronger teacher training and academic support"
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function MiniIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2Z" />
      <path d="M8 7h7" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-suhaai-green text-white">
        <div className="absolute inset-0">
          <img
            src="/Images/hero-1.webp"
            alt=""
            className="h-full w-full object-cover opacity-34"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-suhaai-green via-suhaai-green/88 to-suhaai-green/58" />
        </div>
        <div className="container-shell relative py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="rounded-full border border-suhaai-gold/45 bg-suhaai-gold/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-suhaai-gold">
              Village 21 Dadh, Sakrand
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              About Suhaai
            </h1>
            <p className="mt-4 text-2xl font-extrabold text-suhaai-gold md:text-3xl">
              A Light of Education from Village 21 Dadh
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-suhaai-cream/92">
              Suhaai is a community-based education initiative from Village 21 Dadh,
              Sakrand, Sindh, Pakistan, working to make quality education accessible
              for rural children, especially girls.
            </p>
            <p className="mt-5 max-w-2xl border-l-4 border-suhaai-gold bg-white/8 px-5 py-4 text-xl font-black leading-8 text-white">
              Suhaai was created to change this reality - one village, one classroom,
              and one girl at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-suhaai-soft">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-3xl border border-suhaai-gold/35 bg-white p-2 shadow-soft">
            <div className="aspect-video overflow-hidden rounded-[1.25rem] bg-suhaai-green">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/UTTn40Tdr50?si=_oJIcMegvIqlgErd"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl font-black text-suhaai-green md:text-5xl">
              How It Started
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-suhaai-ink/78 md:text-lg md:leading-9">
              <p>
                In 2015, Aijaz Ali Sindhu began his journey as a primary school
                teacher in Village 21 Dadh. During his early years in teaching, he
                witnessed the difficult situation of education in rural Sindh,
                especially for girls.
              </p>
              <p>
                Many girls were able to study only up to primary level because high
                schools were located far away in the city. Some families wanted to
                educate their daughters but could not afford transport, school bags,
                uniforms, shoes, books, notebooks, and stationery. Others were worried
                about safety, harassment, and the social pressure girls face when they
                travel outside the village for education.
              </p>
              <p>
                Aijaz saw that the problem was not lack of ability. The girls were
                capable, intelligent, and eager to learn. The real problem was lack of
                access, support, and opportunity.
              </p>
            </div>
            <blockquote className="mt-7 rounded-3xl border border-suhaai-gold/35 bg-white px-6 py-5 text-xl font-black leading-8 text-suhaai-green shadow-sm">
              "The girls were capable. What they needed was access, support, and
              opportunity."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              The Problem We Saw
            </span>
            <h2 className="mt-3 text-3xl font-black text-suhaai-green md:text-5xl">
              Education Should Not Depend on Distance
            </h2>
            <p className="mt-5 text-lg leading-8 text-suhaai-ink/72">
              In rural Sindh, many girls stop studying not because they do not want
              to learn, but because the system around them does not support them.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <article
                key={challenge}
                className="rounded-3xl border border-amber-100 bg-suhaai-soft p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold/70 hover:shadow-[0_18px_45px_rgba(18,53,91,0.09)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-suhaai-gold/14 text-suhaai-green ring-1 ring-suhaai-gold/35">
                  <MiniIcon />
                </span>
                <p className="mt-5 text-base font-extrabold leading-7 text-suhaai-green">
                  {challenge}
                </p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-3xl bg-suhaai-green px-7 py-6 text-center text-xl font-black leading-8 text-white shadow-soft">
            Suhaai was born from this concern: education should not depend on gender,
            poverty, distance, or geography.
          </p>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              A Turning Point
            </span>
            <h2 className="mt-3 text-3xl font-black text-suhaai-green md:text-5xl">
              Free Transport: A Turning Point
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-suhaai-ink/78 md:text-lg md:leading-9">
              <p>
                One of the most painful moments in this journey came when Aijaz saw a
                group of girls walking nearly five kilometers from the city school
                back to the village in extreme heat.
              </p>
              <p>
                They had no safe transport. They were tired, exposed to the road, and
                vulnerable to the unsafe social environment around them. That moment
                became a turning point.
              </p>
              <p>
                After continuous efforts, a kind and education-loving supporter agreed
                to help provide transport. Three rickshaws were arranged for the girls
                of Village 21 Dadh, picking students from their homes and dropping them
                safely at school and back.
              </p>
            </div>
            <blockquote className="mt-7 rounded-3xl border border-suhaai-gold/45 bg-suhaai-gold px-6 py-5 text-xl font-black leading-8 text-suhaai-green shadow-sm">
              Free transport did not just solve a travel problem - it restored dignity,
              safety, and hope.
            </blockquote>
          </div>
          <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white p-2 shadow-soft">
            <img
              src="/Images/About/transport-turning-point.webp"
              alt="Transport support for rural students"
              className="h-[380px] w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-3xl border border-amber-100 bg-suhaai-cream p-2 shadow-soft">
            <img
              src="/Images/Gallery/gallery-1.webp"
              alt="Village classroom learning support"
              className="h-[360px] w-full rounded-[1.25rem] object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              Quality Education
            </span>
            <h2 className="mt-3 text-3xl font-black text-suhaai-green md:text-5xl">
              From Transport to Quality Education
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-suhaai-ink/78 md:text-lg md:leading-9">
              <p>
                After the transport service started, another important question
                emerged: if girls are going to school, but the quality of education is
                still weak, how will they truly move forward?
              </p>
              <p>
                This concern led to the next step: creating a village-based tuition
                and coaching support system. Aijaz requested supporters to help arrange
                qualified teachers so girls could receive better learning support
                within their own village after school hours.
              </p>
              <p>
                Once the teaching program started, the response was overwhelming. More
                than 200 students, including girls and young boys, began attending
                classes. The available two classrooms quickly became overcrowded.
              </p>
            </div>
            <p className="mt-7 rounded-3xl bg-suhaai-cream px-6 py-5 text-xl font-black leading-8 text-suhaai-green ring-1 ring-amber-100">
              When education is brought closer to the village, parents are willing to
              send their daughters.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-suhaai-soft">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              Learning Spaces
            </span>
            <h2 className="mt-3 text-3xl font-black text-suhaai-green md:text-5xl">
              Building Better Learning Spaces
            </h2>
            <p className="mt-5 text-lg leading-8 text-suhaai-ink/72">
              With donor support, Suhaai helped construct three additional classrooms,
              improved the learning environment, installed solar panels and fans,
              arranged furniture, and built proper washrooms and washbasins for girls.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {improvements.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold/70 hover:shadow-[0_18px_45px_rgba(18,53,91,0.09)]"
              >
                <div className="h-44 overflow-hidden bg-suhaai-cream">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 p-5 text-suhaai-green">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-suhaai-gold/16 text-suhaai-green">
                    <CheckIcon />
                  </span>
                  <span className="text-base font-black">{item.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              What We Provide
            </span>
            <h2 className="mt-3 text-3xl font-black text-suhaai-green md:text-5xl">
              What Suhaai Provides
            </h2>
            <p className="mt-5 text-lg leading-8 text-suhaai-ink/72">
              The goal is not only to help students pass exams, but to build
              confidence, curiosity, awareness, and modern thinking.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {provisions.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-amber-100 bg-suhaai-soft p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-suhaai-gold/70"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-suhaai-gold/16 text-suhaai-green">
                  <MiniIcon />
                </span>
                <p className="mt-4 text-sm font-black leading-6 text-suhaai-green">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-suhaai-green text-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              Our Impact
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              A Village-Level Education Movement
            </h2>
            <p className="mt-5 text-lg leading-8 text-suhaai-cream/82">
              Over the past three years, Suhaai has grown from a small effort into a
              village-level education movement.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {impact.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/8 p-6 text-center shadow-lg shadow-black/10"
              >
                <p className="text-5xl font-black text-suhaai-gold">{item.value}</p>
                <p className="mx-auto mt-3 max-w-xs text-sm font-extrabold uppercase tracking-[0.12em] text-suhaai-cream/86">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-xl font-bold leading-9 text-white">
            Today, girls who once had no opportunity to study beyond primary level are
            reading English, learning Science, understanding the world, and dreaming of
            a better future.
          </p>
        </div>
      </section>

      <section className="section-padding bg-suhaai-cream">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              Our Belief
            </span>
            <h2 className="mt-3 text-3xl font-black text-suhaai-green md:text-5xl">
              A Girl's Education Can Change an Entire Family
            </h2>
            <div className="mx-auto mt-7 max-w-2xl space-y-2 text-xl font-black leading-9 text-suhaai-green md:text-2xl md:leading-10">
              <p>When a girl learns, she becomes confident.</p>
              <p>When she becomes confident, she changes her home.</p>
              <p>When homes change, villages change.</p>
              <p>And when villages change, society moves forward.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <blockquote className="rounded-3xl bg-suhaai-green p-7 text-2xl font-black leading-9 text-white shadow-soft">
              "Education should never depend on distance, poverty, or gender."
            </blockquote>
            <blockquote className="rounded-3xl border border-suhaai-gold/45 bg-white p-7 text-2xl font-black leading-9 text-suhaai-green shadow-soft">
              "Every girl deserves the chance to learn with dignity, safety, and
              confidence."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
              Future Vision
            </span>
            <h2 className="mt-3 text-3xl font-black text-suhaai-green md:text-5xl">
              Our Future Vision
            </h2>
            <p className="mt-5 text-lg leading-8 text-suhaai-ink/72">
              Suhaai's dream is not limited to one village. Our vision is to expand
              Suhaai to other villages of Sindh, especially where girls are unable to
              continue education due to distance, poverty, lack of teachers, or social
              barriers.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vision.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-amber-100 bg-suhaai-soft p-6 shadow-sm"
              >
                <span className="text-sm font-black uppercase tracking-[0.18em] text-suhaai-gold">
                  Step {index + 1}
                </span>
                <p className="mt-3 text-lg font-black leading-7 text-suhaai-green">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-bold leading-9 text-suhaai-ink/78">
            Suhaai is moving forward step by step, with the hope of bringing quality
            education closer to every village girl who needs it.
          </p>
        </div>
      </section>

      <section className="section-padding bg-suhaai-gold">
        <div className="container-shell text-center">
          <h2 className="text-4xl font-black text-suhaai-green md:text-6xl">
            Join the Mission
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-suhaai-ink/78">
            Suhaai is built on the belief that real change begins with small acts of
            courage, kindness, and responsibility. Your support can help Suhaai
            continue free tuition, free transport, learning resources, classrooms,
            teachers, and modern education for village girls.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-2xl font-black leading-9 text-suhaai-green">
            Together, we can illuminate futures and empower girls.
          </p>
          <Link
            href="/support-us"
            className="mt-8 inline-flex rounded-full bg-suhaai-green px-8 py-4 text-sm font-black text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-suhaai-blue hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-suhaai-green focus:ring-offset-2 focus:ring-offset-suhaai-gold"
          >
            Support Suhaai
          </Link>
        </div>
      </section>
    </>
  );
}
