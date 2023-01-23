import './App.css';
import Tabs from './components/Tabs';
import Results from './components/Results';
import React, { useState } from 'react';

function App() {
  //create an array of items that will have a label and a content property
  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content is showing here"},
    { label: "Tab 2", content: "Tab 2 content is showing here"},
    { label: "Tab 3", content: "Tab 3 content is showing here"},
    { label: "Tab 4", content: "Tab 4 content is showing here"}
  ];

  //create state that can hold array of items
  const [allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">
        <div className="App-header">
          <Tabs
            allTabs ={allTabs}
            currentTabIndex = { currentTabIndex }
            setCurrentTabIndex = { setCurrentTabIndex }
          />
          <div className='test'>
              <Results
                allTabs = {allTabs} currentTabIndex={ currentTabIndex }
              />
          </div>
        </div>
    </div>
  );
}
export default App;


