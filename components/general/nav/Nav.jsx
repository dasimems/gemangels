import { useCallback, useEffect, useRef, useState } from "react";
import PageContainer from "../PageContainer";
import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import Link from "next/link";
import Button from "../Button";
import { Call, CloseSquare, Search, User } from "react-iconly";
import { FaBars } from "react-icons/fa";
import Modal from "../Modal";
import { useForm } from "react-hook-form"
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";
import InputField from "../form/InputField";
import { Routes } from "@/utils/general";
import FooterSocials from "../footer/FooterSocials";


const Nav = () => {
  const newLocal =
    "h-[40px] w-[40px] md:hidden inline-flex items-center justify-center";
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [fixNav, setFixNav] = useState(false)

  const [openMenu, setOpenMenu] = useState(false);
  const {register, handleSubmit, } = useForm({
    defaultValues: {
      search: ""
    }
  })
  const searchProduct = useCallback((data)=>{}, []);
  

  const checkScroll = () => {
    if(window){
      if(window.scrollY >= 200){

        setFixNav(true)

      }else{

        setFixNav(false)
      
      }
    }
  }


  useEffect(() => {
    if (mobileMenuOpened) {
      setTimeout(() => {
        setOpenMenu(true);
      }, 100);
    } else {
      setOpenMenu(false);
    }
  }, [mobileMenuOpened]);

  useEffect(()=>{
    if(window){
      checkScroll();

      window.addEventListener("scroll", checkScroll)
    }
  }, [])

  return (
    <>
      <div className={`${fixNav? "fixed left-1/2 top-0 -translate-x-1/2" : "relative"} z-[999] duration-300 w-full`}>

        <PageContainer className={`${fixNav? "bg-bg border-b border-b-slate-500" : ""} flex items-center justify-between py-10`}>

            <div className="block">
              <Logo textClassName="text-2xl" />
            </div>

            <FooterSocials className="hidden md:flex" linkClassName="text-2xl text-white" />

            <Button
              type="conic-rainbow-2"
              className="gap-2 h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-auto md:w-auto pt-0 pb-0 pl-0 pr-0 md:pt-2 md:pb-2 md:pl-5 md:pr-5 items-center justify-center relative"
              buttonDescription="Account"
              link={Routes.Login.path}
            >
            <span className="relative md:hidden">
              <User set="bold" />
            </span>
            <span className="relative hidden text-white md:block">Login</span>
            </Button>

        </PageContainer>

        <PageContainer className={`${fixNav? "shadow-xl" : ""} flex items-end justify-between w-full gap-10 py-4 md:items-center bg-bg`}>

            

            <form onSubmit={handleSubmit(searchProduct)} className="flex-1 flex items-stretch max-w-[350px] border-b">

              <InputField {...register("search")} inputClassName="border-none border-b bg-transparent pt-2 pb-2 h-auto" className="flex-1" placeholder="Search..." />
              {/* <button className="bg-primary items-center rounded-r-md inline-flex justify-center border border-primary text-white w-[3.1rem]">
                <Search />
              </button> */}

            </form>

            
          <button
            aria-label="open menu"
            className={newLocal}
            onClick={() => {
              setMobileMenuOpened(true);
            }}
          >
            <FaBars />
          </button>

          <DesktopNav />

          
        </PageContainer>
        
      </div>
      <Modal
        opened={mobileMenuOpened}
        onClose={() => {
          setMobileMenuOpened(false);
        }}
        contentClassName="bg-bg max-w-[350px] h-screen py-10 px-10 pl-6 flex flex-col gap-6"
        dialogEnterFromAnimation="-translate-x-[200px] opacity-0"
        dialogEnterToAnimation="translate-x-0 opacity-100"
        dialogLeaveFromAnimation="translate-x-0 opacity-100"
        dialogLeaveToAnimation="-translate-x-[200px] opacity-0"
      >
        
          <div className="flex items-center justify-between">
            <Logo />

            <button
              aria-label="close mobile menu"
              onClick={() => {
                setOpenMenu(false);

                setTimeout(() => {
                  setMobileMenuOpened(false);
                }, 100);
              }}
            >
              <CloseSquare />
            </button>
          </div>

          <hr />

          <MobileNav />
      </Modal>
    </>
  );
};

export default Nav;
