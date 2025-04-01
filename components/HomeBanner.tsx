import React from "react";
import { Title } from "./text";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { banner1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Grab Upto 50% off on <br />
          Selected Headphone
        </Title>
        <Link href={"/shop"}>
          <Button className="bg-shop_dark_green/90 text-sm hover:bg-shop_dark_green transition-colors ">
            Buy Now
          </Button>
        </Link>
      </div>
      <div>
        <Image
          src={banner1}
          alt="banner-img"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
