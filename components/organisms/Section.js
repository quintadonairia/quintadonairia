import Link from "next/link";

import { motion } from "framer-motion";
import Button from "../atoms/Button";
import Header from "../molecules/Header";

const Section = ({
  title,
  heading,
  subheading,
  image,
  description,
  action,
  reverse,
}) => {
  return (
    <section className="flex flex-col items-center gap-16 px-6 py-16 lg:p-24">
      <Header title={title} heading={heading} />
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
      >
        <motion.img
          initial={{ x: "-4rem", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src={image}
          alt=""
          className={`${reverse && `order-last`}`}
        />
        <motion.div
          initial={{ x: "4rem", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl lg:text-4xl">{subheading}</h2>
            <p>{description}</p>
          </div>
          <Link href="/stay">
            <Button variant="primary" size="lg" mode="light">
              {action}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
