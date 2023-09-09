import { contactRoute } from "@/utils/general";
import LinkComponent from "./LinkComponent";

const ContactLink = () => {
  return (
    <ul className={`gap-6 flex-col flex`}>
      {contactRoute.map((data, index) => (
        <li key={index}>
          <LinkComponent
            showIcon
            {...data}
            footer
            key={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactLink;
