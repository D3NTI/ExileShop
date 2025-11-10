'use client';

import React, { useState } from 'react';
import MainDrop from './MainDrop';
import Pictures from './Pictures';

interface Collection {
  id: string;
  name: string;
}

const collections: Collection[] = [
  { id: 'black', name: 'BLACK COLLECTION' },
  { id: 'hb', name: 'HAPPY BIRTHDAY COLLECTION' },
  { id: 'tetris', name: 'TETRIS COLLECTION' },
  { id: 'travel', name: 'TRAVEL KIT COLLECTION' },
  { id: 'sup', name: 'SUPREME CHERRY KIT COLLECTON' },
  { id: 'mirror', name: 'MIRROR COLLECTION' },
  { id: 'def', name: 'DEFAULT COLLECTION' },
];

export default function Main() {
  const [selectedCollection, setSelectedCollection] = useState<Collection>(
    collections[0]
  );

  return (
    <div className="main-wrapper">
      <MainDrop
        selectedCollection={selectedCollection}
        onSelect={setSelectedCollection}
        collections={collections}
      />
      <Pictures selectedCollection={selectedCollection} />
    </div>
  );
}
