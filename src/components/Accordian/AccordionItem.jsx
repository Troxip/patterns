import { useAccordionContext } from "./Accordian";

export default function AccordionItem({ className, children }) {
  return <li className={className}>{children}</li>;
}
