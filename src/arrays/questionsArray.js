import { GiLoincloth } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { ImScissors } from "react-icons/im";
import { BiFace } from "react-icons/bi";

export const QuestionArray = [
  {
    id: 1,
    qtitle: "Common",
    batch: "common",

    answer: ["HUMAN", "BLUE", "RED", "GREEN"],
    icon: <GiLoincloth size={22} />,
  },
  {
    id: 2,
    qtitle: "Epic",
    batch: "epic",
    answer: ["MAN", "BLUE", "RED", "GREEN"],
    icon: <AiFillFire size={22} />,
  },
  {
    id: 3,
    qtitle: "Legendary",
    batch: "legendary",
    answer: ["WOMEN", "BLUE", "RED", "GREEN"],
    icon: <ImScissors size={22} />,
  },
  {
    id: 4,
    qtitle: "Champion",
    batch: "champion",
    answer: ["CHILD", "BLUE", "RED", "GREEN"],
    icon: <BiFace size={22} />,
  },
  // {
  //   id: 5,
  //   qtitle: "HAIR",
  //   answer: ["GIRL", "BLUE", "RED", "GREEN"],
  //   icon: <GiLoincloth size={22} />,
  // },
  // {
  //   id: 6,
  //   qtitle: "FACE",
  //   answer: ["BOY", "BLUE", "RED", "GREEN"],
  //   icon: <BiFace size={22} />,
  // },
];
