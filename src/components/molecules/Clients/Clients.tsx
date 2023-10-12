import Image from "next/image";
interface IClientsProps {}

const Clients = ({}: IClientsProps) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-wonder">
          Who Have We Worked With
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The world&apos;s most innovative companies use our services
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We enjoy close relationships with our clients and thrive on working
          with awesome people to bring great ideas to life. Together, we solve
          technical problems with design and business logic.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5 opacity-80">
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/logos/cisco.svg"
          alt="Cisco"
          width={158}
          height={60}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/logos/wondersauce.svg"
          alt="wondersauce"
          width={128}
          height={48}
        />
        <Image
          className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
          src="/logos/axon.svg"
          alt="Axon"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="/logos/storetasker.svg"
          alt="Storetasker"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="/logos/toptal.svg"
          alt="Toptal"
          width={158}
          height={48}
        />
      </div>
    </div>
  );
};
export default Clients;
