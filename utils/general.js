import {
  AdImageOne,
  BannerImage,
  BannerImage2,
  BannerImage3,
  BrowseBannerImage,
  BrowseBannerTwoImage,
  CameraImage,
  CameraImageFour,
  CameraImageThree,
  CameraImageTwo,
  ModelOneImage,
  ModelThreeImage,
  ModelTwoImage
} from "@/assets/images";
import {
  Call,
  Chat,
  Document,
  Home,
  InfoCircle,
  Location,
  Message,
  ShieldDone,
  TickSquare,
  TimeCircle,
  TwoUsers,
  Work,
  Folder
} from "react-iconly";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
  FaWhatsappSquare
} from "react-icons/fa";

export const siteName = "Gem Angels",
  seoDescription = `Unlock your potential at Stake Six by taking part in exciting games that will entertain you while also allowing you to make real money. Enter a thrilling world of talent, strategy, and opportunity where every action you take could result in amazing rewards. Join us today to turn your passion for gaming into a lucrative adventure!"`,
  navHeight = 80,
  navLink = "navLink",
  extraLink = "extraLink",
  helpLink = "helpLink",
  Routes = {
    Home: {
      path: "/",
      label: "Home",
      showIn: [navLink],
      Icon: Home,
      type: "link"
    },
    Browse: {
      path: "/browse",
      label: "Browse",
      showIn: [navLink],
      Icon: Folder,
      type: "link"
    },
    About: {
      path: "/about",
      label: "About Us",
      showIn: [navLink],
      Icon: TwoUsers,
      type: "link"
    },
    PrivacyPolicy: {
      path: "/privacy-policy",
      label: "Privacy policy",
      showIn: [helpLink],
      Icon: InfoCircle,
      type: "link"
    },
    TermsCondition: {
      path: "/terms-condition",
      label: "Terms & Conditions",
      showIn: [helpLink],
      Icon: InfoCircle,
      type: "link"
    },
    FAQ: {
      path: "/faq",
      label: "FAQ",
      showIn: [helpLink],
      Icon: InfoCircle,
      type: "link"
    },
    Contact: {
      path: "/contact",
      label: "Contact Us",
      showIn: [navLink],
      Icon: Chat,
      type: "link"
    },
    History: {
      path: "/history",
      label: "History",
      showIn: [],
      Icon: "",
      type: "link"
    },
    SignUp: {
      path: "/auth/register",
      label: "Signup",
      showIn: [],
      Icon: "",
      type: "link"
    },
    Login: {
      path: "/auth/login",
      label: "Signup",
      showIn: [],
      Icon: "",
      type: "link"
    },
    Subscriptions: {
      path: "/contact",
      label: "Subscriptions",
      showIn: [],
      Icon: "",
      type: "link"
    }
  },
  actionList = {
    logout: "logout",
    settings: "settings",
    deposit: "deposit",
    withdraw: "withdraw",
    bank: "bank"
  },
  historyTypes = {
    bet: "bet",
    transactions: "transactions"
  },
  winners = [
    {
      game: {
        name: "Game Name",
        image: ""
      },
      time: "00:00:30",
      player: "user94***0",
      amount: "600",
      prediction: "3x",
      payout: "1600"
    },
    {
      game: {
        name: "Game Name",
        image: ""
      },
      time: "00:00:30",
      player: "user94***0",
      amount: "600",
      prediction: "3x",
      payout: "1600"
    },
    {
      game: {
        name: "Game Name",
        image: ""
      },
      time: "00:00:30",
      player: "user94***0",
      amount: "600",
      prediction: "3x",
      payout: "1600"
    }
  ],
  games = {
    aviator: {
      name: "aviator",
      label: "Aviator",
      image: "",
      description: ""
    },
    dice: {
      name: "aviator",
      label: "Dice",
      image: "",
      description: ""
    },
    color: {
      name: "aviator",
      label: "Color",
      image: "",
      description: ""
    },
    limbo: {
      name: "aviator",
      label: "Limbo",
      image: "",
      description: ""
    }
  },
  Socials = {
    Facebook: {
      link: "https://facebook.com/",
      name: "Facebook",
      Icon: FaFacebookSquare
    },
    Twitter: {
      link: "https://twitter.com/",
      name: "Twitter",
      Icon: FaTwitterSquare
    },
    Instagram: {
      link: "https://instagram.com/",
      name: "Instagram",
      Icon: FaInstagramSquare
    },
    LinkedIn: {
      link: "https://linkedin.com/in/",
      name: "Linkedin",
      Icon: FaLinkedinIn
    },
    Discord: {
      link: "https://discordapp.com/users/",
      name: "Discord",
      Icon: FaDiscord
    },
    Whatsapp: {
      link: "https://wa.me/",
      name: "Whatsapp",
      Icon: FaWhatsappSquare
    }
  },
  Contacts = {
    MobileNumber: {
      path: "tel:+2347082820828",
      label: "+(234) 708-282 0828",
      Icon: Call
    },
    Location: {
      path: "",
      label:
        "01 Bojuri junction, Jimoh Aliu Street, Along Apata Nata. Adebayo. Ado Ekiti. Ekiti State",
      Icon: Location
    },
    Mail: {
      path: "mailto:support@ayodasglobal.com",
      label: "support@ayodasglobal.com",
      Icon: Message
    }
  },
  bannerContents = [
    {
      image: BannerImage,
      text: "Discover a world of exclusive content",
      imagePosition: "left"
    },
    {
      image: BannerImage2,
      text: "Connect with your favorite model and support their passion",
      imagePosition: "right"
    },
    {
      image: BannerImage3,
      text: " Get closer to the content you love",
      imagePosition: "left"
    }
  ],
  modelLists = [
    {
      name: "Belle Delphine",
      image: ModelOneImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    },
    {
      name: "Mia Khalifa",
      image: ModelTwoImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    },
    {
      name: "Jem Wofie",
      image: ModelThreeImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    },
    {
      name: "Jem Wofie",
      image: ModelOneImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    },
    {
      name: "Jem Wofie",
      image: ModelTwoImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    },
    {
      name: "Jem Wofie",
      image: ModelThreeImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    },
    {
      name: "Jem Wofie",
      image: ModelOneImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    },
    {
      name: "Jem Wofie",
      image: ModelTwoImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    },
    {
      name: "Jem Wofie",
      image: ModelThreeImage,
      description:
        "Consectetur pariatur consectetur ullamco elit commodo. Lorem ad tempor minim mollit. Sit in consectetur cillum commodo ipsum officia. Dolor aliqua anim ea elit est Lorem culpa consectetur proident eiusmod ad enim pariatur pariatur. Adipisicing esse non veniam elit adipisicing veniam cillum reprehenderit aute esse culpa laborum ad. Labore ex id eu mollit est eu laboris esse anim in esse."
    }
  ],
  cameraImages = [
    CameraImage,
    CameraImageTwo,
    CameraImageThree,
    CameraImageFour
  ],
  services = [
    "Marketing/Social Media Marketing (Awareness)",
    "Customer Acquisition & Sourcing (Attraction)",
    "Content Management (Pitch)",
    "Customer Engagement & Conversion (Conversion & Sales) ",
    '"Die-for-you" -Loyalty (Loyalty & Repeat Customers)'
  ],
  authInputClassName =
    "text-white placeholder:text-slate-400 bg-transparent border-t-0 border-l-0 border-r-0 rounded-none border-b border-slate-400",
  browseImages = [BrowseBannerImage, BrowseBannerTwoImage],
  socialList = Object.keys(Socials).map(key => Socials[key]),
  gameList = Object.keys(games).map(key => games[key]),
  allRoutes = Object.keys(Routes).map(key => Routes[key]),
  contactRoute = Object.keys(Contacts).map(key => Contacts[key]),
  navRoutes = allRoutes.filter(route => route.showIn.includes(navLink)),
  helpRoutes = allRoutes.filter(route => route.showIn.includes(helpLink)),
  accountRoutes = allRoutes.filter(route => route.showIn.includes(extraLink));
