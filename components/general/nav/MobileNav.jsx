import { navRoutes } from "@/utils/general";
import LinkComponent from "./LinkComponent";

const MobileNav = () => {
  return (
    <ul className="flex flex-col gap-10">
      {navRoutes.map((data, index) => (
        <li key={index}>
          <LinkComponent
            className="flex items-center gap-2 "
            showIcon
            {...data}
            key={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;
