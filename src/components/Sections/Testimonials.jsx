import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Gadget Enthusiast",
    avatar: "/avatars/user1.jpg",
    rating: 5,
    message:
      "GadgetGrove has amazing products! Fast delivery and great support. Highly recommend!",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Tech Blogger",
    avatar: "/avatars/user2.jpg",
    rating: 4,
    message:
      "I love the variety of gadgets and the quality is top-notch. Customer service is excellent.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Gamer",
    avatar: "/avatars/user3.jpg",
    rating: 5,
    message:
      "Their gaming accessories are awesome! Fast shipping and amazing product quality.",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Software Developer",
    avatar: "/avatars/user4.jpg",
    rating: 5,
    message:
      "Best place to buy tech gadgets! The products are reliable and the prices are competitive.",
  },
  {
    id: 5,
    name: "David Martinez",
    role: "Photographer",
    avatar: "/avatars/user5.jpg",
    rating: 4,
    message:
      "Great selection of camera accessories. Quality products and excellent customer support.",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Fitness Trainer",
    avatar: "/avatars/user6.jpg",
    rating: 5,
    message:
      "Love my new smartwatch from GadgetGrove! Perfect for tracking my workouts.",
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Business Owner",
    avatar: "/avatars/user7.jpg",
    rating: 5,
    message:
      "Professional service and high-quality products. My go-to store for all tech needs.",
  },
  {
    id: 8,
    name: "Rachel Green",
    role: "Student",
    avatar: "/avatars/user8.jpg",
    rating: 4,
    message:
      "Affordable prices and great quality! Perfect for students on a budget.",
  },
  {
    id: 9,
    name: "Tom Brown",
    role: "Music Producer",
    avatar: "/avatars/user9.jpg",
    rating: 5,
    message:
      "The audio equipment I bought is fantastic! Crystal clear sound and durable build.",
  },
  {
    id: 10,
    name: "Jessica Taylor",
    role: "Designer",
    avatar: "/avatars/user10.jpg",
    rating: 5,
    message:
      "Sleek designs and powerful performance. GadgetGrove never disappoints!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Hear from our happy customers who trust GadgetGrove for all their
            tech needs.
          </p>
        </div>

        {/* Testimonials Scrolling Animation */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition flex-shrink-0 w-[350px]"
              >
                {/* Avatar */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "{testimonial.message}"
                </p>

                {/* Rating */}
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
