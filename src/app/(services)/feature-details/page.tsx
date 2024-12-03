import Image from "next/image";

type Card = {
  id: number;
  title: string;
  imageUrl: string;
};

const cards: Card[] = [
  { id: 1, title: "Card 1", imageUrl: "/fitness-img/fitB.jpg" },
  { id: 2, title: "Card 2", imageUrl: "/fitness-img/fitC.jpg" },
  { id: 3, title: "Card 3", imageUrl: "/fitness-img/fitE.jpg" },
  { id: 4, title: "Card 2", imageUrl: "/fitness-img/fitF.jpg" },
  { id: 5, title: "Card 3", imageUrl: "/fitness-img/fitD.jpg" },
  { id: 6, title: "Card 4", imageUrl: "/fitness-img/fitG.jpg" },
];

const FeatureDetailPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              fill
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg font-semibold">
                {card.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureDetailPage;
