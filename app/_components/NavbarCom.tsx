
"use client";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Gift, Mail, Phone, User, UserPlus, Van } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NavbarCom() {
  return (
<>
<div className="border-b text-sm border-gray-100 container mx-auto">

<div className="flex items-center justify-between">


<div className="flex gap-6 text-gray-500 py-2">


<div className="flex gap-2 items-center">
<Van  width={15} height={15}/>
<span>Free Shipping on Orders 500 EGP
</span>
</div>


<div className="flex gap-2 items-center">
<Gift width={15} height={15}/>
<span>New Arrivals Daily
</span>
</div>



</div>





<div className="flex items-center">

<div className="flex gap-6 text-gray-500 border-r border-gray-100 pr-4">

    <div className="flex gap-2 items-center">
      <Phone width={15} height={15}/>
      <span>+1 (800) 123-4567</span>
    </div>

    <div className="flex gap-2 items-center">
      <Mail width={15} height={15}/>
      <span>support@freshcart.com
</span>
    </div>


</div>

<div className="flex gap-4 pl-4">
<div className="flex gap-2 items-center">
  <User  width={15} height={15}/>
  <span>Sign In</span>
</div>
<div className="flex gap-2 items-center">
  <UserPlus  width={15} height={15}/>
  <span>Sign Up</span>
</div>

</div>

</div>

</div>
</div>




    <Navbar  rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image src="/freshcart-logo.49f1b44d.svg" width={150} alt="logo" height={150} />
       
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
</>
  );
}
