import Image from "next/image";

const Landing = () => {

    return (
        <section className="flex flex-row z-0 mt-20 h-full border-1">
            <Image 
            src={'/img/picture1.jpg'}
            alt="picture"
            width={370}
            height={500}></Image>
            <h1>Designer</h1>
            <h1>Developer</h1>
            <h5>Computer Science student focused on building impactful, high-quality software. I enjoy designing intuitive interfaces, solving complex problems, and leveraging emerging technologies to create scalable solutions.</h5>
        </section>
    )
}

export default Landing;