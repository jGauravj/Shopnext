import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubTitle } from "./text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="" />
            <p className="text-muted-foreground text-sm">
              Discover curated furniture collections at Shopnext, blending style
              and comfort to elevate your living spaces.
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName=" border-darkColor/60 hover:text-shop_light_green hover:border-shop_light_green transition-colors "
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-2 mt-4 text-muted-foreground">
              {quickLinksData.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-sm font-normal transition-colors hover:text-shop_light_green"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-2 mt-4 text-muted-foreground">
              {categoriesData.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="text-sm font-normal transition-colors hover:text-shop_light_green"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newslatter</SubTitle>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </p>
            <form className="space-y-2.5">
              <Input placeholder="Enter your email" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
