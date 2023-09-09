import { accountRoutes } from "@/utils/general";
import LinkComponent from "./LinkComponent";

const AccountLink = () => {
  return (
    <ul className={`gap-6 flex-col flex`}>
      {accountRoutes.map((data, index) => (
        <li key={index}>
          <LinkComponent {...data} footer />
        </li>
      ))}
    </ul>
  );
};

export default AccountLink;
