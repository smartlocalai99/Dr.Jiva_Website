import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Smart medicine reminders",
  "Secure digital medical records",
  "Easy appointment management",
  "Connected healthcare ecosystem",
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-[#F8FAFC] py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{
              x: -250,
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            animate={{
              y: [0, -12, 0],
            }}
            className="flex justify-center"
          >
            <img
              src="/about.png"
              alt="About Dr. Jiva"
              className="w-full max-w-[650px]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: .2,
            }}
          >

            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .3,
              }}
              viewport={{ once: true }}
              className="inline-flex rounded-full bg-[#F8FAFC] px-5 py-2 text-2xl font-bold text-[#2F5E9F]"
            >
              ABOUT US
            </motion.span>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .4,
              }}
              viewport={{ once: true }}
              className=" mt-4 text-4xl lg:text-5xl font-black leading-tight text-slate-900"
            >
              Transforming Healthcare

              <span className="block text-[#2F5E9F]">
                Through Digital Innovation
              </span>

            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .55,
              }}
              viewport={{ once: true }}
              className="mt-8 text-lg leading-8 text-slate-600"
            >
              Dr. Jiva is a modern digital healthcare platform developed by
              <strong> SMARTLOCAL AI</strong> to simplify healthcare
              management for patients and healthcare providers.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .7,
              }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-slate-600"
            >
              Our goal is to provide a smarter healthcare experience
              through digital records, medicine reminders,
              appointments, and secure access to medical information
              anytime, anywhere.
            </motion.p>

            <div className="mt-10 space-y-5">

              {points.map((item, index) => (

                <motion.div
                  key={item}
                  initial={{
                    x: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: .5,
                    delay: .9 + index * .15,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5E9F]/10">

                    <CheckCircle
                      size={20}
                      className="text-[#2F5E9F]"
                    />

                  </div>

                  <p className="text-lg font-medium text-slate-700">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}