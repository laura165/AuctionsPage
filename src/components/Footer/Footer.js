import React from "react";
import {
  FooterWrapper,
  FooterRow,
  FooterColumn,
  FooterLink,
  FooterTitle,
  Icon,
} from "./FooterElements";

import { GrFacebookOption } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/fa";

export function FooterContainer() {
  return (
    <FooterWrapper>
      <FooterRow>
        <FooterColumn>
          <FooterTitle>About Us</FooterTitle>
          <FooterLink href="#">Story</FooterLink>
          <FooterLink href="#">Clients</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Services</FooterTitle>
          <FooterLink href="#">Marketing</FooterLink>
          <FooterLink href="#">Consulting</FooterLink>
          <FooterLink href="#">Development</FooterLink>
          <FooterLink href="#">Design</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLink href="#">United States</FooterLink>
          <FooterLink href="#">United Kingdom</FooterLink>
          <FooterLink href="#">Australia</FooterLink>
          <FooterLink href="#">Support</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Social</FooterTitle>
          <FooterLink href="#">
          
            Facebook
          </FooterLink>
          <FooterLink href="#">
           
            Instagram
          </FooterLink>
          <FooterLink href="#">
           
            Youtube
          </FooterLink>
          <FooterLink href="#">
           
            Twitter
          </FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
  );
}
