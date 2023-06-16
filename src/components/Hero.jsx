import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute insert-8 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1b9bc8]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#1b9bc8]">Santiago</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I enjoy creating things that live on the internet.
            <br className="sm:block hidden" /> My interest in web development
            started back in 2018 when I decided to try making web designs in
            Photoshop and developing designs in AutoCAD.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
