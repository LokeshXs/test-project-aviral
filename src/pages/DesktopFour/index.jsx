import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Input, Heading } from "../../components";

export default function DesktopFourPage() {
  return (
    <>
      <Helmet>
        <title>Register - Create New Account | Lorem Ipsum</title>
        <meta
          name="description"
          content="Sign up for a new account using your full name, phone number, and email address. Register to explore Lorem Ipsum's features or login if you already have an account."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full justify-center bg-white-A700 p-[46px] md:p-5">
        {/* signup section */}
        <div className="mx-auto mb-[25px] flex w-full max-w-[1322px] flex-col items-end">
          {/* signup header section */}
          <div className="flex w-[89%] items-start justify-between gap-5 self-start md:w-full">
            <Img src="images/img_group_1.svg" alt="image" className="mb-[18px] h-[124px] w-[11%]" />
            <a href="#">
              <Heading size="3xl" as="h1" className="!text-black-900">
                Sign up
              </Heading>
            </a>
          </div>

          {/* user information fields section */}
          <div className="relative z-[1] mt-[50px] flex w-[26%] flex-col gap-6 md:w-full">
            <Input
              shape="round"
              color="undefined_undefined"
              type="text"
              name="fullName"
              placeholder={`Full Name`}
              className="font-black sm:cursor-pointer sm:pr-5"
            />
            <Input
              shape="round"
              color="undefined_undefined"
              type="number"
              name="phoneNumber"
              placeholder={`Phone number`}
              className="font-black sm:cursor-pointer sm:pr-5"
            />
            <Input
              shape="round"
              color="undefined_undefined"
              type="email"
              name="email"
              placeholder={` Email Address`}
              className="font-black sm:cursor-pointer sm:pr-5"
            />
          </div>

          {/* signup details section */}
          <div className="relative mt-[-3px] flex w-full items-start justify-between gap-5 md:flex-col">
            {/* signup intro section */}
            <div className="flex w-[64%] flex-col md:w-full">
              <Heading size="3xl" as="h2" className="ml-[7px] w-[58%] !text-black-900 md:ml-0 md:hidden md:w-full">
                <span className="text-[42px] text-black-900">
                  <>
                    Sign up to
                    <br />
                  </>
                </span>
                <span className="text-black-900">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-[38px] font-medium text-black-900">
                  <>
                    Lorem Ipsum is simply
                    <br />
                    <br />
                  </>
                </span>
              </Heading>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="flex items-start justify-between gap-5 sm:flex-col">
                  <Text size="4xl" as="p" className="mt-[33px] w-[54%] !text-black-900 sm:w-full sm:cursor-pointer">
                    <span className="text-[32px] text-black-900">
                      <>
                        if you don’t have an account
                        <br />
                      </>
                    </span>
                    <span className="text-black-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-light_blue_400">Login Here</span>
                  </Text>
                  <Img
                    src="images/img_https_lottief.png"
                    alt="httpslottief"
                    className="h-[226px] w-[25%] object-cover md:hidden sm:w-full"
                  />
                </div>
              </a>
            </div>

            {/* account creation section */}
            <div className="mt-[27px] flex w-[27%] flex-col items-end md:w-full">
              <Input
                shape="round"
                color="undefined_undefined"
                type="password"
                name="password"
                placeholder={`Password`}
                suffix={
                  <Img
                    src="images/img_fluenteye12filled.svg"
                    alt="fluent:eye-12-filled"
                    className="h-[22px] w-[22px]"
                  />
                }
                className="gap-[35px] self-stretch font-black md:static sm:cursor-pointer sm:pr-5"
              />
              <Text size="3xl" as="p" className="mr-4 mt-[51px] !text-black-900 md:mr-0">
                Forgot Password ?
              </Text>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  size="lg"
                  shape="square"
                  className="ml-[45px] mt-[58px] min-w-[190px] self-start font-medium md:ml-0 sm:px-5"
                >
                  Register
                </Button>
              </a>
              <a href="#" className="mt-[76px] self-center">
                <Text size="xl" as="p" className="!text-black-900">
                  or continue with
                </Text>
              </a>
              <div className="mr-[49px] mt-11 flex w-[75%] justify-between gap-5 md:mr-0 md:w-full">
                <Button size="md" shape="square" className="w-[77px]">
                  <Img src="images/img_facebook_symbol_svg.svg" />
                </Button>
                <Img
                  src="images/img_google_symbol_svg.svg"
                  alt="googlesymbol"
                  className="h-[62px] w-[35%] sm:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
