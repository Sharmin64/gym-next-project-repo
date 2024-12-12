import Image from "next/image";

type Card = {
  id: number;
  title: string;
  imageUrl: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Chest Exercise",
    imageUrl: "https://i.postimg.cc/SNVdhkF2/fitD.jpg",
  },
  {
    id: 2,
    title: "Butterfly Machine Gym",
    imageUrl: "https://i.postimg.cc/4yQ5nTY0/fitB.jpg",
  },
  {
    id: 3,
    title: "Core Muscle Exercise",
    imageUrl: "https://i.postimg.cc/2yDGz5Sv/fitA.jpg",
  },
  {
    id: 4,
    title: "Push & Pull Exercise",
    imageUrl: "https://i.postimg.cc/CxBqQgFV/fitG.jpg",
  },
  {
    id: 5,
    title: "Cycling",
    imageUrl: "https://i.postimg.cc/B6sPbP2q/fitE.jpg",
  },
  {
    id: 6,
    title: "Trademil Exercise",
    imageUrl: "https://i.postimg.cc/W40JswFW/fitF.jpg",
  },
];

const ExploreFeaturePage = () => {
  return (
    <>
      <h1 className="text-center mt-28 text-5xl text-pretty">
        See the transformation ! See the Changes..!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-5 mt-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              width={250}
              height={250}
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

export default ExploreFeaturePage;
