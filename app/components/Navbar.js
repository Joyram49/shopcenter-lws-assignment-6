import logSVG from "@/assets/lws-logo-black.svg";
import avatarSVG from "@/assets/svg/avatar.svg";
import menuSVG from "@/assets/svg/menu.svg";
import shoppingCart from "@/assets/svg/shopping-Cart.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto'>
      <div className='flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]'>
        <div className='flex items-center gap-2'>
          <Image src={menuSVG} className='lg:hidden w-5 h-5' alt='menu' />
          <Link href='/'>
            <Image src={logSVG} className='h-10 w-auto' alt='lws-logo' />
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12'>
        <Image
          src={avatarSVG}
          className='hidden lg:block w-[18px] h-[18px]'
          alt='login acount avatar'
        />
        <Image
          src={shoppingCart}
          className='block w-5 h-5'
          alt='shopping cart icon'
        />
      </div>
    </nav>
  );
}
