import { useAccordionContext } from "./Accordian";

export default function AccordionItem({ id, className, title, children }) {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      {openItemId === id && (
        <div
          className={
            isOpen ? "accordion-item-content open" : "accordion-item-content"
          }
        >
          {children}
        </div>
      )}
    </li>
  );
}
