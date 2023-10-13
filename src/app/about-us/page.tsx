import Clients from "@/components/molecules/Clients";
import Image from "next/image";
import { Metadata } from "next";

const stats = [
  { label: "Websites built", value: "+120" },
  { label: "Slack messages with our clients", value: "540 thousand" },
  { label: "All in Colombia", value: "5 cities" },
];
const values = [
  {
    name: "✨ Aspire for excellence",
    description:
      "Give always your best. We take pride in our work, and we do what we do because we love this craft (software development). We want to be the best and give our clients our best work. ",
  },
  {
    name: "💪 Be a yes person and take responsibility",
    description:
      "Do not fear the unknown but embrace it. We want our clients to love us passionately; they must feel they cannot live without us and have us at the top of their minds. We do this by solving their problems and providing exceptional value.",
  },
  {
    name: "🤗 Treat others right",
    description:
      "Our environment is very important; we want to have a safe environment for everyone. There are no dumb questions, we should not fear not knowing, and we will not tolerate any sign of disrespect, mockery, or misbehavior. Be a team player: back your team, and let your team help you too.",
  },
  {
    name: "🗣️ Communicate Effectively",
    description:
      "We are a fully remote company, and communication is paramount. You need to be able to talk to clients, ask questions, raise flags, request improvements, speak your mind when things can be improved, and participate proactively.",
  },
  {
    name: "📖 Always learning",
    description:
      "You love challenges and learning new things. You get excited with clients need to work on a platform you don't know. The learning process never stops.",
  },
];
const people = [
  {
    name: "Juan Solano",
    role: "Founder & CEO",
    imageUrl: "/people/juan.png",
    bio: `"The best part of my job is the people I work with. I love the fact that we are a small team, and we all know each other. We are a family, and we care about each other. We are all passionate about what we do, and we are all committed to our clients' success. We are all in this together, and we all want to be the best."`,
  },
  {
    name: "Diego Velazquez",
    role: "Senior Web Developer",
    imageUrl: "/people/diego.jpeg",
    bio: `"At Wondercraft, I have discovered an environment that values ​​my personal and professional growth. Every day presents an opportunity to learn and be part of a team that fosters creativity and innovation. It is where I have thrived in my personal and professional career."`,
  },
  {
    name: "Julio Salas",
    role: "Front End Developer",
    imageUrl: "/people/julio.jpeg",
    bio: `"At Wondercraft, you're surrounded by incredibly talented people always ready to lend you a hand. It's an experience like no other — truly extraordinary."`,
  },
  {
    name: "Sergio Gutierrez",
    role: "Senior Web Developer",
    imageUrl: "/people/sergio.jpeg",
    bio: `"Working at Wondercraft has been a transformative journey for me.  Every project has been a unique and exciting learning experience, pushing me to grow and evolve. There's always someone with a solution or a new perspective, making our collaborative spirit truly shine. The best part? The mutual respect and open communication within the team and with our clients. It's a stress-free zone where I feel valued and empowered."`,
  },
  {
    name: "Javier Vargas",
    role: "Senior Web Developer",
    imageUrl: "/people/javier.jpeg",
    bio: `"Working at Wondercraft has been an incredible experience for me. As someone transitioning into this new field with limited experience, I'm truly grateful for the opportunity and the professional growth I have achieved here. What sets Wondercraft apart is the commitment to personal development and learning. It's not just about following orders and completing projects; the company genuinely encourages us to learn and improve in various areas."`,
  },
  {
    name: "Duvan Samorano",
    role: "QA Engineer",
    imageUrl: "/people/duvan.png",
    bio: `"Wondercraft is a company in which there is good communication, an excellent work environment and the best thing is that you always feel part of it.\n
    I am proud to be part of this great company that works every day to provide its customers with the best experience of usability, quality, security, portability and many things through developments with the latest in development."`,
  },
];

export const metadata: Metadata = {
  title: "About us - Wondercraft",
  description: "Who we are, what we believe in",
};

export default function Example() {
  return (
    <main className="isolate">
      {/* Hero section */}

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Passion Fuels Our Craft
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                There is something unique about this craft that makes people
                fall in love with it. We&apos;re deeply passionate about it.
                There&apos;s something inherently special about it, something
                that resonates with people. Creating code is like wielding a
                magic wand, empowering users to solve problems and giving brands
                a sleek, impressive edge. Above all, it&apos; s the sheer joy of
                making people happy through our work that drives us forward.
              </p>
            </div>
            <Image
              src="/about-hero.jpg"
              alt=""
              width={530}
              height={442}
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                At the heart of our small but dynamic development team lies an
                unwavering commitment to our clients&apos; satisfaction. We
                don&apos;t just aim for contentment; we strive for sheer
                exhilaration. We want our clients to be so enamored with our
                work that they can&apos;t help but sing our praises and place
                their absolute trust in us. This trust is sacred to us, and we
                hold it in the highest regard.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Each project we undertake is a testament to this commitment.
                  We infuse every website and e-commerce platform with
                  expertise, creativity, and passion. Our goal is not only to
                  deliver a service but to cultivate enduring partnerships
                  founded on respect and mutual trust.
                </p>
                <p className="mt-10">
                  Transparency, communication, and adaptability define our
                  approach. We believe in involving our clients throughout the
                  process, ensuring their unique vision is not just met, but
                  exceeded. By staying at the forefront of technology, we
                  guarantee our clients receive the most innovative solutions.
                  Ultimately, our clients&apos; triumphs are our own, and their
                  unwavering trust is the beacon that guides our path forward.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our values
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                At the heart of our team&apos;s ethos lies a deep commitment to
                a set of guiding principles that define not only how we work,
                but who we are. These values serve as the foundation of our
                every endeavor, shaping our interactions, decisions, and
                ultimately, our success.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none lg:border-t lg:border-white/10 lg:pt-10">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    {/* <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-white py-24 md:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0 md:pr-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  className=" h-24 w-24 rounded-full object-cover"
                  src={person.imageUrl}
                  alt={person.name}
                  width={96}
                  height={96}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo cloud */}
      <Clients />
    </main>
  );
}
