import React from "react";
import {Button} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {AnimatePresence, LazyMotion, domAnimation, m} from "framer-motion";
import BasicNavbar from "../components/BasicNavbar";
import AppScreenshotSkewed from "../components/AppScreenshotSkewed";
import Link from "next/link";

export default function Component() {
  return (
      <div className="relative flex h-screen min-h-dvh w-full flex-col overflow-hidden bg-background">
        <BasicNavbar />
        <main className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
          <section className="z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
            <Link href="https://x.com/MinaPlayground/status/1841088487946104885" target="_blank">
              <Button
                  className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
                  endContent={
                    <Icon
                        className="flex-none outline-none [&>path]:stroke-[2]"
                        icon="mingcute:celebrate-line"
                        width={20}
                    />
                  }
                  radius="full"
                  variant="bordered"
              >
                MinaPlayground v2 is in progress!
              </Button>
            </Link>
            <LazyMotion features={domAnimation}>
              <m.div
                  animate="kick"
                  className="flex flex-col gap-6"
                  exit="auto"
                  initial="auto"
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                  variants={{
                    auto: {width: "auto"},
                    kick: {width: "auto"},
                  }}
              >
                <AnimatePresence mode="wait">
                  <m.div
                      animate={{filter: "blur(0px)", opacity: 1, x: 0}}
                      className="text-start text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]"
                      initial={{filter: "blur(16px)", opacity: 0, x: 15 + 1 * 2}}
                      transition={{
                        bounce: 0,
                        delay: 0.01 * 10,
                        duration: 0.8 + 0.1 * 8,
                        type: "spring",
                      }}
                  >
                    <div className="bg-gradient-to-br from-pink-500 to-orange-400 bg-clip-text text-transparent">
                      Interactive learning platform
                    </div>
                  </m.div>

                  <m.div
                      animate={{filter: "blur(0px)", opacity: 1, x: 0}}
                      className="text-start font-normal leading-7 text-default-600 sm:w-[466px] sm:text-[18px]"
                      initial={{filter: "blur(16px)", opacity: 0, x: 15 + 1 * 3}}
                      transition={{
                        bounce: 0,
                        delay: 0.01 * 30,
                        duration: 0.8 + 0.1 * 9,
                        type: "spring",
                      }}
                  >
                    MinaPlayground offers interactive tutorials that guide you through learning about Mina Protocol and o1js in an engaging, practical way. Learn by doing, step by step!
                  </m.div>

                  <m.div
                      animate={{filter: "blur(0px)", opacity: 1, x: 0}}
                      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
                      initial={{filter: "blur(16px)", opacity: 0, x: 15 + 1 * 4}}
                      transition={{
                        bounce: 0,
                        delay: 0.01 * 50,
                        duration: 0.8 + 0.1 * 10,
                        type: "spring",
                      }}
                  >
                    <Link href="https://learn.minaplayground.com">
                      <Button
                          className="h-10 w-[163px] bg-gradient-to-br from-pink-500 to-orange-400 px-[16px] py-[10px] leading-5 text-background"
                          radius="full"
                      >
                        Follow tutorials
                      </Button>
                    </Link>
                    {/*<Button*/}
                    {/*  className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] leading-5"*/}
                    {/*  endContent={*/}
                    {/*    <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">*/}
                    {/*      <Icon*/}
                    {/*        className="text-default-500 [&>path]:stroke-[1.5]"*/}
                    {/*        icon="solar:arrow-right-linear"*/}
                    {/*        width={16}*/}
                    {/*      />*/}
                    {/*    </span>*/}
                    {/*  }*/}
                    {/*  radius="full"*/}
                    {/*  variant="bordered"*/}
                    {/*>*/}
                    {/*  Explore the rest*/}
                    {/*</Button>*/}
                  </m.div>
                </AnimatePresence>
              </m.div>
            </LazyMotion>
          </section>
        </main>
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
                animate={{filter: "blur(0px)", opacity: 1, y: 0}}
                className="absolute top-[40%] w-full"
                initial={{filter: "blur(16px)", opacity: 0, y: 300}}
                transition={{
                  bounce: 0,
                  delay: 0.01 * 10,
                  duration: 0.8 + 0.1 * 8,
                  type: "spring",
                }}
            >
              <AppScreenshotSkewed className="w-full" />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
  );
}
