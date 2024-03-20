import Accordion from "./components/Accordian/Accordian";
import AccordionItem from "./components/Accordian/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can't go wrong with us</p>
              <p>
                We are in the business of planning high We are in the business
                of planning high
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            className="accordion-item"
            title="We are working with local guides"
          >
            <article>
              <p>We are not doing this along from out office</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                tenetur ratione iste voluptatum nisi quis voluptate inventore
                vitae consequatur, omnis culpa asperiores officiis sint aliquam,
                est explicabo, itaque odio id.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
