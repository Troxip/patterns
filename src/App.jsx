import SearchableList from "./SearchableList/SearchableList";
import Accordion from "./components/Accordian/Accordian";
import AccordionContent from "./components/Accordian/AccordionContent";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="1" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <AccordionContent className="accordion-item-content">
              <article>
                <p>You can't go wrong with us</p>
                <p>
                  We are in the business of planning high We are in the business
                  of planning high
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item id="2" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Test
            </Accordion.Title>
            <AccordionContent className="accordion-item-content">
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
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item 2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
