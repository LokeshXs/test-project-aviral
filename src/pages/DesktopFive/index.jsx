import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button, Slider, Input } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const data = [
  {
    iconfinderbusi: "images/img_iconfinder_busi.svg",
    price: "-$850",
    depositfrommy: "Deposit from my Card",
    date: "28 January 2021",
  },
  {
    iconfinderbusi: "images/img_iconfinder_payp.svg",
    price: "+$2,500",
    depositfrommy: "Deposit Paypal",
    date: "25 January 2021",
  },
  {
    iconfinderbusi: "images/img_iconfinder_6_4753731.svg",
    price: "+$5,400",
    depositfrommy: "Jemi Wilson",
    date: "21 January 2021",
  },
];

export default function DesktopFivePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [collapsed, setCollapsed] = React.useState(false);
  const [searchBarValue6, setSearchBarValue6] = React.useState("");

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Dashboard - Manage Your Finances | BankDash</title>
        <meta
          name="description"
          content="Access your BankDash dashboard to overview transactions, accounts, investments, and credit cards. Manage your finances effectively with comprehensive tools and insights."
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="self-end">
          {/* header section */}
          <header>
            <div className="flex flex-col items-end">
              <div className="self-stretch bg-white-A700 p-5">
                <div className="flex items-start justify-between gap-5 md:flex-col">
                  <div className="mt-[11px] flex items-center gap-[9px]">
                    <Img
                      src="images/img_iconfinder_vect.png"
                      alt="iconfindervect"
                      className="h-[36px] w-[36px] object-cover"
                    />
                    <Heading size="xl" as="h4" className="!font-mont">
                      BankDash.
                    </Heading>
                  </div>
                  <div className="flex w-[81%] items-center justify-between gap-5 md:w-full md:flex-col">
                    <Heading size="2xl" as="h3">
                      Overview
                    </Heading>
                    <div className="flex w-[46%] items-center justify-between gap-5 md:w-full sm:flex-col">
                      <Input
                        size="xs"
                        variant="fill"
                        name="search"
                        placeholder={`Search for something`}
                        value={searchBarValue6}
                        onChange={(e) => setSearchBarValue6(e)}
                        prefix={
                          <Img
                            src="images/img_search_indigo_300.svg"
                            alt="search"
                            className="h-[20px] w-[20px] cursor-pointer"
                          />
                        }
                        suffix={
                          searchBarValue6?.length > 0 ? (
                            <CloseSVG onClick={() => setSearchBarValue6("")} fillColor="#718ebfff" />
                          ) : null
                        }
                        className="w-[50%] gap-[15px] rounded-[25px] text-indigo-200 sm:w-full sm:px-5"
                      />
                      <Button shape="circle" className="w-[50px] !rounded-[25px]">
                        <Img src="images/img_settings_1.svg" />
                      </Button>
                      <Button shape="circle" className="w-[50px] !rounded-[25px]">
                        <Img src="images/img_002_notification_1.svg" />
                      </Button>
                      <Img
                        src="images/img_pexels_christin.png"
                        alt="pexelschristin"
                        className="h-[60px] w-[60px] rounded-[50%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-[83%] bg-indigo-50_01" />
            </div>
          </header>
          <div className="flex items-start gap-[38px] md:flex-col">
            {/* sidebar navigation section */}
            <Sidebar
              width="252px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              className="!sticky top-0 flex h-screen flex-col overflow-auto py-[13px] md:hidden md:p-5"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "19px 12px",
                    gap: "26px",
                    alignSelf: "end",
                    color: "#b1b1b1",
                    fontWeight: 500,
                    fontSize: "18px",
                    [`&:hover, &.ps-active`]: { color: "#2d60ff" },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "0.19px" } }}
                className="mb-[602px] flex w-full flex-col items-center"
              >
                <MenuItem icon={<Img src="images/img_home.svg" alt="home_one" className="h-[25px] w-[25px]" />}>
                  Dashboard
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_television.svg" alt="television_one" className="h-[25px] w-[25px]" />}
                >
                  Transactions
                </MenuItem>
                <MenuItem icon={<Img src="images/img_user_3_1.svg" alt="user3one_one" className="h-[25px] w-[25px]" />}>
                  Accounts
                </MenuItem>
                <MenuItem icon={<Img src="images/img_group.svg" alt="image" className="h-[25px] w-[25px]" />}>
                  Investments
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_credit_card_1.svg" alt="creditcardone" className="h-[26px] w-[26px]" />}
                >
                  Credit Cards
                </MenuItem>
                <MenuItem icon={<Img src="images/img_loan_1.svg" alt="loanone_one" className="h-[25px] w-[25px]" />}>
                  Loans
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_service_1.svg" alt="serviceone_one" className="h-[25px] w-[25px]" />}
                >
                  Services
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_econometrics_1.svg" alt="econometricsone" className="h-[25px] w-[25px]" />}
                >
                  My Privileges
                </MenuItem>
                <MenuItem icon={<Img src="images/img_search.svg" alt="search_one" className="h-[25px] w-[25px]" />}>
                  Setting
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col md:self-stretch md:p-5">
              {/* main content section */}
              <div className="flex w-[97%] items-start gap-[38px] md:w-full md:flex-col">
                <div className="flex flex-1 flex-col gap-[17px] md:self-stretch">
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <Heading as="h1">My Cards</Heading>
                    <a href="#">
                      <Heading size="s" as="h2" className="text-right">
                        See All
                      </Heading>
                    </a>
                  </div>
                  <div className="flex gap-[30px] md:flex-col">
                    <div className="flex w-full flex-col items-center gap-[33px] rounded-[25px] bg-gradient pt-6 sm:pt-5">
                      <div className="flex w-[86%] items-center justify-between gap-5 md:w-full md:p-5">
                        <div className="flex flex-col items-start">
                          <Text size="xs" as="p" className="!font-lato !text-white-A700">
                            Balance
                          </Text>
                          <Heading size="md" as="h3" className="!font-lato !text-white-A700">
                            $5,756
                          </Heading>
                        </div>
                        <Img
                          src="images/img_chip_card.png"
                          alt="balance_two"
                          className="h-[34px] w-[34px] self-start object-cover"
                        />
                      </div>
                      <div className="ml-[26px] flex w-[70%] justify-between gap-5 self-start md:ml-0 md:w-full md:p-5">
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="xs" as="p" className="!font-lato !text-white-A700_b2">
                            CARD HOLDER
                          </Text>
                          <Heading size="xs" as="h4" className="self-center !font-lato !text-white-A700">
                            Eddy Cusuma
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="xs" as="p" className="!font-lato !text-white-A700_b2">
                            VALID THRU
                          </Text>
                          <Heading size="xs" as="h5" className="!font-lato !text-white-A700">
                            12/22
                          </Heading>
                        </div>
                      </div>
                      <div className="self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient1 p-5">
                        <div className="flex items-center justify-between gap-5">
                          <Heading as="h6" className="self-end !font-lato !text-white-A700">
                            3778 **** **** 1234
                          </Heading>
                          <Img src="images/img_contrast.svg" alt="image" className="h-[30px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center gap-[33px] rounded-[25px] border border-solid border-teal-50 bg-white-A700 pt-6 sm:pt-5">
                      <div className="flex w-[86%] items-center justify-between gap-5 md:w-full md:p-5">
                        <div className="flex flex-col items-start">
                          <Text size="xs" as="p" className="!font-lato">
                            Balance
                          </Text>
                          <Heading size="md" as="h5" className="!font-lato">
                            $5,756
                          </Heading>
                        </div>
                        <Img
                          src="images/img_chip_card.png"
                          alt="chipcard_one"
                          className="h-[34px] w-[34px] self-start object-cover"
                        />
                      </div>
                      <div className="ml-[26px] flex w-[70%] justify-between gap-5 self-start md:ml-0 md:w-full md:p-5">
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="xs" as="p" className="!font-lato">
                            CARD HOLDER
                          </Text>
                          <Heading size="xs" as="p" className="self-center !font-lato">
                            Eddy Cusuma
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="xs" as="p" className="!font-lato">
                            VALID THRU
                          </Text>
                          <Heading size="xs" as="p" className="!font-lato">
                            12/22
                          </Heading>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-5 self-stretch rounded-bl-[25px] rounded-br-[25px] border border-solid border-teal-50_01 p-5">
                        <Heading as="h5" className="ml-1.5 self-end !font-lato md:ml-0">
                          3778 **** **** 1234
                        </Heading>
                        <Img
                          src="images/img_contrast_blue_gray_300.svg"
                          alt="contrast_one"
                          className="mr-1 h-[30px] md:mr-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex w-[32%] flex-col items-start gap-[19px] md:w-full">
                  <Heading as="h5">Recent Transaction</Heading>
                  <div className="flex flex-col gap-2.5 self-stretch rounded-[25px] bg-white-A700 p-6 sm:p-5">
                    {data.map((d, index) => (
                      <div key={"listiconfinderb" + index} className="flex items-center gap-[17px]">
                        <Button size="sm" shape="round" className="w-[55px]">
                          <Img src={d.iconfinderbusi} />
                        </Button>
                        <div className="mb-[3px] flex flex-col items-start gap-[5px] self-end">
                          <Text size="xl" as="p" className="!text-gray-900">
                            {d.depositfrommy}
                          </Text>
                          <Text size="lg" as="p">
                            {d.date}
                          </Text>
                        </div>
                        <Text size="xl" as="p" className="text-right !text-red-A200">
                          {d.price}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-3.5 flex items-start justify-between gap-5 md:flex-col">
                {/* weekly activity section */}
                <div className="mb-[39px] flex w-[63%] flex-col items-start gap-[15px] md:w-full">
                  <Heading as="h5">Weekly Activity</Heading>
                  <div className="flex flex-col items-end gap-5 self-stretch rounded-[25px] bg-white-A700 p-[26px] sm:p-5">
                    <div className="mr-[3px] flex w-[29%] gap-[30px] md:mr-0 md:w-full">
                      <div className="flex w-[45%] items-center gap-2.5 self-end">
                        <div className="h-[15px] w-[15px] self-start rounded-[7px] bg-teal-A400" />
                        <Text size="lg" as="p">
                          Diposit
                        </Text>
                      </div>
                      <div className="flex flex-1 items-center gap-2.5 self-start">
                        <div className="h-[15px] w-[15px] self-end rounded-[7px] bg-pink-A100" />
                        <Text size="lg" as="p">
                          Withdraw
                        </Text>
                      </div>
                    </div>
                    <div className="relative mr-[3px] h-[226px] self-stretch md:mr-0">
                      <div className="absolute right-[0.00px] top-[7.73px] m-auto flex w-[95%] flex-col gap-9">
                        <div className="h-px bg-gray-100_01" />
                        <div className="h-px bg-gray-100_01" />
                        <div className="h-px bg-gray-100_01" />
                        <div className="h-px bg-gray-100_01" />
                        <div className="h-px bg-gray-100_01" />
                        <div className="h-px bg-gray-100_01" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[96%] flex-col items-end gap-2">
                        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                          <div className="flex flex-col items-center gap-[21px]">
                            <Text as="p" className="text-right">
                              500
                            </Text>
                            <Text as="p" className="text-right">
                              400
                            </Text>
                            <Text as="p" className="text-right">
                              300
                            </Text>
                            <Text as="p" className="text-right">
                              200
                            </Text>
                            <Text as="p" className="self-start text-right">
                              100
                            </Text>
                            <Text as="p" className="mr-[3px] self-end text-right md:mr-0">
                              0
                            </Text>
                          </div>
                          <Img src="images/img_group_39.svg" alt="image_one" className="h-[178px] w-[91%] md:w-full" />
                        </div>
                        <div className="mr-[13px] flex w-[89%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                          <Text as="p" className="text-center">
                            Sat
                          </Text>
                          <Text as="p" className="text-center">
                            Sun
                          </Text>
                          <Text as="p" className="text-center">
                            Mon
                          </Text>
                          <Text as="p" className="text-center">
                            Tue
                          </Text>
                          <Text as="p" className="text-center">
                            Wed
                          </Text>
                          <Text as="p" className="text-center">
                            Thu
                          </Text>
                          <Text as="p" className="h-[16px] text-center">
                            Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* expense statistics section */}
                <div className="flex w-[30%] flex-col items-start gap-[15px] md:w-full">
                  <Heading as="h5">Expense Statistics</Heading>
                  <div className="relative h-[322px] self-stretch rounded-[25px] bg-white-A700 p-[31px] md:h-auto sm:p-5">
                    <Img src="images/img_group_blue_gray_800.svg" alt="image_two" className="h-[259px] w-[93%]" />
                    <div className="absolute left-0 right-0 top-[20%] m-auto flex w-[79%] flex-col items-start gap-[9px]">
                      <Text
                        as="p"
                        className="ml-12 w-[56%] text-center !font-medium leading-[18px] !text-white-A700 md:ml-0 md:w-full"
                      >
                        <span className="text-base font-bold text-white-A700">
                          <>
                            30%
                            <br />
                          </>
                        </span>
                        <span className="font-bold text-white-A700">Entertainment</span>
                      </Text>
                      <Text
                        as="p"
                        className="w-[37%] self-end text-center !font-medium leading-[18px] !text-white-A700 md:w-full"
                      >
                        <span className="text-base font-bold text-white-A700">
                          <>
                            15%
                            <br />
                          </>
                        </span>
                        <span className="font-bold text-white-A700">Bill Expense</span>
                      </Text>
                      <div className="flex w-[82%] items-start justify-between gap-5 md:w-full">
                        <Text
                          as="p"
                          className="mb-[30px] w-[42%] text-center !font-medium leading-[18px] !text-white-A700"
                        >
                          <span className="text-base font-bold text-white-A700">
                            <>
                              20%
                              <br />
                            </>
                          </span>
                          <span className="font-bold text-white-A700">Investment</span>
                        </Text>
                        <Text as="p" className="w-[26%] text-center !font-medium leading-[18px] !text-white-A700">
                          <span className="text-base font-bold text-white-A700">
                            <>
                              35%
                              <br />
                            </>
                          </span>
                          <span className="font-bold text-white-A700">Others</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[97%] items-start gap-[42px] md:w-full md:flex-col">
                {/* quick transfer section */}
                <div className="flex w-[41%] flex-col items-start gap-[19px] md:w-full">
                  <Heading as="h5">Quick Transfer</Heading>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="self-stretch rounded-[25px] bg-white-A700 p-[25px] sm:p-5">
                      <div className="mb-[87px] mt-2.5 flex items-center justify-between gap-5 sm:flex-col">
                        <div className="w-[79%]">
                          <Slider
                            autoPlay
                            autoPlayInterval={2000}
                            responsive={{ 0: { items: 1 }, 550: { items: 2 }, 1050: { items: 3 } }}
                            disableDotsControls
                            activeIndex={sliderState}
                            onSlideChanged={(e) => {
                              setSliderState(e?.item);
                            }}
                            ref={sliderRef}
                            items={[...Array(9)].map(() => (
                              <React.Fragment key={Math.random()}>
                                <div className="mx-2.5 flex w-full flex-col gap-3.5">
                                  <div>
                                    <Img
                                      src="images/img_austin_distel_7.png"
                                      alt="austindistelsev"
                                      className="h-[70px] w-[70px] rounded-[50%]"
                                    />
                                    <Img
                                      src="images/img_emanuel_minca_j.png"
                                      alt="emanuelmincaj"
                                      className="relative mt-[-70px] h-[70px] w-[70px] rounded-[50%]"
                                    />
                                  </div>
                                  <div className="flex flex-col items-center gap-[5px]">
                                    <Text size="xl" as="p" className="!font-normal !text-gray-900">
                                      Workman
                                    </Text>
                                    <Text size="lg" as="p">
                                      Designer
                                    </Text>
                                  </div>
                                </div>
                              </React.Fragment>
                            ))}
                          />
                        </div>
                        <Button shape="circle" className="w-[50px] !rounded-[25px]">
                          <Img src="images/img_arrow_right.svg" />
                        </Button>
                      </div>
                    </div>
                    <div className="relative mt-[-85px] flex w-[89%] items-start gap-[27px] md:w-full sm:flex-col">
                      <Text size="xl" as="p" className="mt-[15px] !font-normal">
                        Write Amount
                      </Text>
                      <div className="flex flex-1 flex-col items-end sm:self-stretch">
                        <div className="flex items-center justify-between gap-5 self-stretch rounded-[25px] bg-blue_gray-50 pl-[30px] sm:pl-5">
                          <Text size="xl" as="p" className="!font-normal">
                            525.50
                          </Text>
                          <div className="h-[50px] w-[53%] rounded-[25px] bg-indigo-A700_01 shadow-xs" />
                        </div>
                        <div className="relative mr-6 mt-[-34px] flex flex-col items-start gap-32 md:mr-0 md:gap-24 sm:gap-16">
                          <Text size="xl" as="p" className="!text-white-A700">
                            Send
                          </Text>
                          <Img src="images/img_save.svg" alt="save_one" className="h-[25px] w-[26px] self-end" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* balance history section */}
                <div className="flex flex-1 flex-col items-start gap-[17px] md:self-stretch">
                  <Heading as="h5">Balance History</Heading>
                  <div className="flex items-start self-stretch rounded-[25px] bg-white-A700 p-[19px] sm:flex-col">
                    <div className="relative z-[1] mt-2 flex w-[7%] flex-col items-end gap-[30px] sm:w-full">
                      <div className="flex items-center gap-2 self-stretch">
                        <Text as="p" className="text-right">
                          800
                        </Text>
                        <div className="h-px w-[6px] bg-indigo-300" />
                      </div>
                      <div className="flex items-center gap-2 self-stretch">
                        <Text as="p" className="text-right">
                          600
                        </Text>
                        <div className="h-px w-[6px] bg-indigo-300" />
                      </div>
                      <div className="flex items-center gap-2 self-stretch">
                        <Text as="p" className="text-right">
                          400
                        </Text>
                        <div className="h-px w-[6px] bg-indigo-300" />
                      </div>
                      <div className="flex items-center gap-[7px] self-stretch">
                        <Text as="p" className="text-right">
                          200
                        </Text>
                        <div className="h-px w-[6px] bg-indigo-300" />
                      </div>
                      <div className="flex w-[59%] items-end md:w-full">
                        <Text size="xs" as="p" className="text-right">
                          0
                        </Text>
                        <div className="mb-1.5 ml-2 h-px w-[6px] flex-1 bg-indigo-300" />
                        <Img src="images/img_group_indigo_300.svg" alt="image_three" className="h-[4px]" />
                      </div>
                    </div>
                    <div className="relative mb-[9px] ml-[-1px] mt-4 flex flex-1 flex-col items-center gap-0.5 sm:ml-0 sm:self-stretch">
                      <div className="h-[185px] self-stretch bg-[url(/public/images/img_group_6.svg)] bg-cover bg-no-repeat md:h-auto">
                        <Img
                          src="images/img_vector.png"
                          alt="vector_eleven"
                          className="h-[177px] w-full object-cover md:h-auto"
                        />
                      </div>
                      <div className="flex w-[71%] justify-between gap-5 md:w-full">
                        <Img src="images/img_group_indigo_300.svg" alt="image_four" className="h-[4px]" />
                        <Img src="images/img_group_indigo_300.svg" alt="image_five" className="h-[4px]" />
                        <Img src="images/img_group_indigo_300.svg" alt="image_six" className="h-[4px]" />
                        <Img src="images/img_group_indigo_300.svg" alt="image_seven" className="h-[4px]" />
                        <Img src="images/img_group_indigo_300.svg" alt="image_eight" className="h-[4px]" />
                        <Img src="images/img_group_indigo_300.svg" alt="image_nine" className="h-[4px]" />
                      </div>
                      <div className="flex w-[90%] justify-between gap-5 self-start md:w-full sm:flex-col">
                        <div className="flex w-[19%] flex-wrap justify-between gap-5 sm:w-full">
                          <Text size="md" as="p" className="h-[17px] self-start">
                            Jul
                          </Text>
                          <Text size="md" as="p" className="self-end">
                            Aug
                          </Text>
                        </div>
                        <div className="flex w-[68%] flex-wrap justify-between gap-5 sm:w-full">
                          <Text size="md" as="p" className="self-end">
                            Sep
                          </Text>
                          <Text size="md" as="p" className="self-start">
                            Oct
                          </Text>
                          <Text size="md" as="p" className="self-start">
                            Nov{" "}
                          </Text>
                          <Text size="md" as="p" className="self-start">
                            Dec
                          </Text>
                          <Text size="md" as="p" className="self-start">
                            Jan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
