import Image from "next/image";

interface ITestimonialProps {
  logo?: string;
  quote: string;
  name: string;
  title: string;
}

const Testimonial = ({ logo, quote, name, title }: ITestimonialProps) => {
  return (
    <div className="mx-auto mt-20 max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl text-purple-300 mb-10">
          A little sweet talk!
        </h2>
        <div className="mx-auto mt-2 max-w-xl text-center">
          {logo ? (
            <div className="w-full flex justify-center mb-4">
              <Image
                className="text-center"
                src={logo}
                alt={name}
                width={180}
                height={100}
              />
            </div>
          ) : null}
          <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-8 text-base">
            <div className="font-semibold text-white">{name}</div>
            <div className="mt-1 text-gray-400">{title}</div>
          </figcaption>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
export default Testimonial;
