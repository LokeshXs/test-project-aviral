import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading, Input } from "../../components";

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>Login - Access Your Account | Lorem Ipsum</title>
        <meta
          name="description"
          content="Sign in to your account with your email or username. Forgot your password? Register here to continue with Lorem Ipsum's exclusive services."
        />
      </Helmet>

      {/* login section */}
      <div className="flex w-full justify-center bg-white-A700 p-[46px] md:p-5">
        {/* main content section */}
        <div className="mx-auto mb-[25px] flex w-full max-w-[1324px] flex-col gap-[5px]">
          {/* logo image section */}
          <Img src="images/img_group_1.svg" alt="image" className="h-[124px] w-[10%]" />

          {/* signin form section */}
          <div className="flex flex-col items-end">
            <a href="#" className="mr-[161px] md:mr-0">
              {/* signin link section */}
              <Heading size="3xl" as="h1" className="!text-black-900">
                Sign in
              </Heading>
            </a>

            {/* credentials input section */}
            <div className="relative z-[1] mt-[75px] flex w-[27%] flex-col gap-11 md:w-full">
              {/* username field section */}
              <Input
                shape="round"
                color="undefined_undefined"
                type="email"
                name="userName"
                placeholder={`Email or user name`}
                className="font-black sm:pr-5"
              />

              {/* password field section */}
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
                className="gap-[35px] font-black sm:pr-5"
              />
            </div>

            {/* signin text and forgotpassword section */}
            <div className="relative mr-[18px] mt-[-3px] flex items-center justify-between gap-5 self-stretch md:mr-0">
              {/* signin prompt section */}
              <Heading size="3xl" as="h2" className="w-[37%] !text-black-900 md:hidden">
                <span className="text-[42px] text-black-900">
                  <>
                    Sign in to
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

              {/* forgot password link section */}
              <Text size="3xl" as="p" className="mb-[31px] self-end !text-black-900">
                Forgot Password ?
              </Text>
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              {/* registration prompt section */}
              <div className="mt-[27px] flex w-[91%] items-start justify-between gap-5 self-start md:w-full md:flex-col">
                {/* registration text section */}
                <Text size="4xl" as="p" className="mt-1.5 w-[38%] !text-black-900 md:w-full">
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
                  <span className="text-light_blue_400">Register Here</span>
                </Text>

                {/* login button section */}
                <Button size="lg" shape="square" className="min-w-[190px] font-medium sm:px-5">
                  Login
                </Button>
              </div>
            </a>
            <a href="#" className="mr-[110px] mt-[3px] md:mr-0">
              {/* alternative signin prompt section */}
              <Text size="xl" as="p" className="!text-black-900">
                or continue with
              </Text>
            </a>

            {/* social media signin buttons section */}
            <div className="mr-[51px] mt-11 flex w-[18%] justify-between gap-5 md:mr-0 md:w-full">
              {/* facebook signin button section */}
              <Button size="md" shape="square" className="w-[77px]">
                <Img src="images/img_facebook_symbol_svg.svg" />
              </Button>

              {/* google signin button section */}
              <Img src="images/img_google_symbol_svg.svg" alt="googlesymbol" className="h-[62px] w-[35%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
