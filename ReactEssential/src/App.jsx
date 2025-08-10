import { useState } from 'react';
import { EXAMPLES, CORE_CONCEPTS } from './data.js';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function renderCoreConceptList() {
  const coreConceptItem = CORE_CONCEPTS.map((item, index) => 
    <CoreConcept
      key={index}
      title={item.title}
      description={item.description}
      image={item.image}
    />
  )
  return <ul>{coreConceptItem}</ul>
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState()

function handleSelect(selectedButon) {
  setSelectedTopic(selectedButon)
}
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          { renderCoreConceptList() }
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
            <div id="tab-content">
              {!selectedTopic? (<p>Please select one</p>) : ( 
              <><h3>{EXAMPLES[selectedTopic].title}</h3><p>{EXAMPLES[selectedTopic].description}</p><pre>{EXAMPLES[selectedTopic].code}</pre></>
              )}
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
