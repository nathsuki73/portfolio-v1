import Link from "next/link";

const Landing = () => {
  return (
    <section
      className={`flex w-full h-full flex-row overflow-hidden gap-4 sm:p-12 `}
    >
      <div className="flex flex-col md:w-2/3 lg:w-1/2 justify-center ">
        <h1 className="font-bold text-5xl sm:text-6xl">
          Hello, <br />
          I&apos;m Nathaniel
        </h1>
        <h3 className="my-4">UI/UX Designer / Developer</h3>
        <h5>
          Computer Science student focused on building impactful, high-quality
          software. I enjoy designing intuitive interfaces, solving complex
          problems, and leveraging emerging technologies to create scalable
          solutions.
        </h5>
        <div className="flex flex-row mt-8 gap-4 sm:w-full md:w-10/12 lg:w-3/4 xl:w-2/3  text-center">
          <Link
            className="w-full border-1 px-4 py-2 border-background bg-foreground text-background"
            href={"/"}
          >
            Contact Me
          </Link>
          <Link className="w-full border-1 px-4 py-2" href={"/"}>
            My Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
