import React from 'react'
import Item from './Item';
import { useTheme } from './ThemeContext';

export default function Practice() {
  const { theme } = useTheme();
  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#333' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <section style={headerStyle}>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
          importance={9}
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
          importance={6}
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}