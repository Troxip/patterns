import Accordion from "./components/Accordian/Accordian";
import AccordionContent from "./components/Accordian/AccordionContent";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="1" className="accordion-item">
            <Accordion.Title className="accordion-item-title" id="1">
              We got 20 years of experience
            </Accordion.Title>
            <AccordionContent id="1" className="accordion-item-content">
              <article>
                <p>You can't go wrong with us</p>
                <p>
                  We are in the business of planning high We are in the business
                  of planning high
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Title className="accordion-item-title" id="2">
              Test
            </Accordion.Title>
            <AccordionContent id="2" className="accordion-item-content">
              <article>
                <p>Test</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  reiciendis deserunt aliquam necessitatibus. Odit nisi
                  consectetur officiis odio velit, neque asperiores omnis saepe
                  aliquam fuga nulla rem, deleniti quia amet.
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
