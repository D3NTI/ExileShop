'use client';

import React, { useState } from 'react';

interface Collection {
  id: string;
  name: string;
}

interface MainDropProps {
  selectedCollection: Collection;
  onSelect: (collection: Collection) => void;
  collections: Collection[];
}

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function MainDrop({
  selectedCollection,
  onSelect,
  collections,
}: MainDropProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (collection: Collection) => {
    onSelect(collection);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-section">
      <div className="dropdown-cont">
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-but">
          <span className="dropdown-text">{selectedCollection.name}</span>
          <ChevronDown className={`icon ${isOpen ? 'icon-rotated' : ''}`} />
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => handleSelect(collection)}
                className={`menu-item ${
                  selectedCollection.id === collection.id
                    ? 'menu-item-active'
                    : ''
                }`}
              >
                {collection.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
