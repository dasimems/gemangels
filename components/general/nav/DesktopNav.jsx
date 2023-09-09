import { navRoutes } from "@/utils/general";
import LinkComponent from "./LinkComponent";
import Button from "../Button";

const DesktopNav = ({ footer }) => {
  return (
    <ul
      className={`gap-6 ${footer
        ? "flex-col inline-flex "
        : "hidden md:gap-8 lg:gap-10 md:items-center"} md:flex`}
    >
      {navRoutes.map((data, index) =>
        <li key={index}>
          <LinkComponent
            {...data}
            showIcon={!footer}
            iconClassName="text-sm"
            footer={footer}
            key={index}
          />
        </li>
      )}
      {/* <li>
        {footer &&
          <LinkComponent label="Login" showIcon={!footer} iconClassName="text-sm" footer={footer}  /> }
      </li> */}
    </ul>
  );
};

export default DesktopNav;
