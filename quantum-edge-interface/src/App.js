import React from 'react';
import './App.css';
import TabsComponent from './Components/TabsComponent';
import ImageListComponent from './Components/ImageListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Material-UI Tabs with Tables</h1>
      </header>
      <main style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div style={{ flexGrow: 1 }}>
          <TabsComponent />
        </div>
        <ImageListComponent />
      </main>
    </div>
  );
}

export default App;
