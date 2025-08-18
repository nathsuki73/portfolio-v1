import Link from "next/link";

const Landing = () => {
  return (
    <section
      className={`flex flex-col sm:flex-row h-full overflow-hidden gap-4 mb-8 p-4 lg:p-16`}
    >
      <div className="flex-col sm:w-1/2">
        <h1 className="font-bold text-6xl">
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
        <div className="flex flex-row mt-8 gap-4">
          <Link
            className="border-1 px-4 py-2 border-background bg-foreground text-background"
            href={"/"}
          >
            Contact Me
          </Link>
          <Link className="border-1 px-4 py-2" href={"/"}>
            My Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
