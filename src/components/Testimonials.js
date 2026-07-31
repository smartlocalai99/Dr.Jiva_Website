import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Anjali R.",
    role: "Dr. Jiva User",
    image: "/user1.jpg",
    review:
      "Dr. Jiva makes it much easier to remember my medicines and keep all my health information organized in one place.",
  },
  {
    name: "Rahul K.",
    role: "Dr. Jiva User",
    image: "/user2.jpg",
    review:
      "The medicine reminders are very helpful. I can also access my prescriptions and medical records whenever I need them.",
  },
  {
    name: "Priya S.",
    role: "Dr. Jiva User",
    image: "/user3.jpg",
    review:
      "The app is simple, secure, and easy to use. Managing appointments and healthcare information feels much more organized.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F8FAFC] py-28"
    >
      {/* Background Decorations */}

      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#2F5E9F]/5 blur-3xl" />

      <div className="absolute bottom-10 right-[-100px] h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#2F5E9F]/10 px-5 py-2 text-sm font-semibold text-[#2F5E9F]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
            Trusted by People Who
            <span className="block text-[#2F5E9F]">
              Care About Their Health
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            See how Dr. Jiva helps people stay consistent with medicines,
            organize healthcare information, and manage their health with
            greater confidence.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (

            <div
              key={index}
              className="group relative rounded-[30px] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Quote Icon */}

              <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F5E9F]/10">

                <Quote
                  size={23}
                  className="text-[#2F5E9F]"
                />

              </div>

              {/* Stars */}

              <div className="flex items-center gap-1">

                {[...Array(5)].map((_, starIndex) => (

                  <Star
                    key={starIndex}
                    size={18}
                    fill="#FBBF24"
                    className="text-[#FBBF24]"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="mt-7 min-h-[145px] text-lg leading-8 text-slate-600">
                “{testimonial.review}”
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#2F5E9F]">
                    {testimonial.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Rating */}

        <div className="mt-16 flex flex-col items-center justify-center gap-5 rounded-[28px] border border-[#2F5E9F]/10 bg-white px-8 py-8 text-center shadow-sm md:flex-row">

          <div className="flex items-center gap-2">

            <div className="flex">

              {[...Array(5)].map((_, index) => (

                <Star
                  key={index}
                  size={22}
                  fill="#FBBF24"
                  className="text-[#FBBF24]"
                />

              ))}

            </div>

            <span className="ml-2 text-xl font-black text-slate-900">
              4.9/5
            </span>

          </div>

          <div className="hidden h-8 w-px bg-slate-200 md:block" />

          <p className="text-slate-600">
            Loved by users for making healthcare simpler and more organized.
          </p>

        </div>

      </div>

    </section>
  );
}