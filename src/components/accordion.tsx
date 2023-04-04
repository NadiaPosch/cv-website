import { classNames } from "@/helpers/class-names";
import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import { ChevronDown } from "./icons";

type AccordionProps = {
  items: {
    title: string;
    content: string;
  }[];
};

export const Accordion: FC<AccordionProps> = ({ items }) => (
  <div className="w-full text-white">
    {items.map(({ title, content }) => (
      <Disclosure key={title}>
        {({ open }) => (
          <>
            <Disclosure.Button className="relative flex w-full items-center justify-between px-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-[13px]"
              >
                <circle
                  fill="transparent"
                  stroke="white"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                />
              </svg>
              <div className="ml-4">{title}</div>
              <ChevronDown
                className={classNames(
                  "h-4 w-4 transition-transform duration-300",
                  !open && "-rotate-180"
                )}
              />
            </Disclosure.Button>
            <div className="pb-8 pl-8 pt-2 border-l-2 border-white">
              <Disclosure.Panel>{content}</Disclosure.Panel>
              <span className="min-h-[50px]"></span>
            </div>
          </>
        )}
      </Disclosure>
    ))}
  </div>
);
