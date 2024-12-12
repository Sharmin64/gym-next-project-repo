import Image from "next/image";

type Review = {
  clientName: string;
  feedback: string;
  rating: number; // Rating out of 5
};

type Trainer = {
  name: string;
  expertise: string[];
  certifications: string[];
  reviews: Review[];
  profilePicture: string;
};

const trainers: Trainer[] = [
  {
    name: "John Doe",
    expertise: ["Strength Training", "Nutrition"],
    certifications: [
      "ACE Certified Personal Trainer",
      "Certified Nutrition Specialist",
    ],
    reviews: [
      {
        clientName: "Novice",
        feedback: "Great trainer, very knowledgeable!",
        rating: 5,
      },
      {
        clientName: "Bob Marley",
        feedback: "Helped me achieve my goals thanks a million.",
        rating: 4.5,
      },
    ],
    profilePicture: "/trainer-image/trainer-4.jfif",
  },
  {
    name: "John Doe",
    expertise: ["Strength Training", "Nutrition"],
    certifications: [
      "ACE Certified Personal Trainer",
      "Certified Nutrition Specialist",
    ],
    reviews: [
      {
        clientName: "Alice",
        feedback: "Great trainer, very knowledgeable!",
        rating: 5,
      },
      {
        clientName: "Bob",
        feedback: "Helped me achieve my goals.",
        rating: 4.5,
      },
    ],
    profilePicture: "/trainer-image/trainer-3.jfif",
  },
  {
    name: "Jane Smith",
    expertise: ["Yoga", "Pilates"],
    certifications: ["Certified Yoga Instructor", "Pilates Certification"],
    reviews: [
      { clientName: "Emma", feedback: "Amazing yoga sessions!", rating: 5 },
      {
        clientName: "Liam",
        feedback: "Relaxing and professional.",
        rating: 4.8,
      },
    ],
    profilePicture: "/trainer-image/trainer-1.jfif",
  },
];

const TrainerProfile: React.FC = () => {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Our Trainers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-5 flex flex-col items-center"
          >
            <Image
              width={500}
              height={500}
              src={trainer.profilePicture}
              alt={trainer.name}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {trainer.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Expertise: {trainer.expertise.join(", ")}
            </p>
            <div className="mb-3">
              <h3 className="font-medium text-gray-700">Certifications:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {trainer.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                Client Reviews:
              </h3>
              {trainer.reviews.map((review, idx) => (
                <div key={idx} className="mb-2">
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold">{review.clientName}:</span>{" "}
                    {review.feedback}
                  </p>
                  <p className="text-sm text-yellow-500">
                    {"⭐".repeat(Math.round(review.rating))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerProfile;
