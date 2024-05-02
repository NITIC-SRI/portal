import RecipeReviewCard from "@/core/card/card";
import { CardType } from "@/types/card.type";

const tweets: CardType[] = [
  {
    id: 1,
    user: {
      name: "Alice",
      stuNumber: "123456",
    },
    text: "Hello World!",
    createdAt: "2021-10-01",
  },
  {
    id: 2,
    user: {
      name: "Bob",
      stuNumber: "654321",
    },
    text: "Hi Alice!",
    createdAt: "2021-10-02",
  },
];

const Timeline = () => {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <RecipeReviewCard card={tweet} key={index} />
      ))}
    </div>
  );
};

export default Timeline;
