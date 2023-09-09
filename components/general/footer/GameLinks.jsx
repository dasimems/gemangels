import { Routes, gameList } from "@/utils/general";
import LinkComponent from "../nav/LinkComponent";

const GameLink = () => {
  return (
    <ul className={`gap-6 flex-col flex`}>
      {gameList.map(({ name, label }, index) => (
        <li key={index}>
          <LinkComponent
            iconClassName="text-slate-200"
            path={`${Routes.Games.path}/${name}`}
            label={label}
            footer
            key={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default GameLink;
