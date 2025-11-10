'use client';
import React from 'react';

interface Collection {
  id: string;
  name: string;
}

interface PicturesProps {
  selectedCollection: Collection;
}

export default function Pictures({ selectedCollection }: PicturesProps) {
  const collectionImages: { [key: string]: string } = {
    black:
      'https://basket-19.wbbasket.ru/vol3183/part318315/318315900/images/big/1.webp',
    hb: 'https://basket-27.wbbasket.ru/vol5138/part513872/513872235/images/big/1.webp',
    tetris:
      'https://basket-27.wbbasket.ru/vol5138/part513872/513872235/images/big/1.webp',
    travel:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    sup: 'https://basket-27.wbbasket.ru/vol5138/part513872/513872235/images/big/1.webp',
    mirror:
      'https://basket-27.wbbasket.ru/vol5138/part513872/513872235/images/big/1.webp',
    def: 'https://basket-27.wbbasket.ru/vol5138/part513872/513872235/images/big/1.webp',
  };
  return (
    <div className="pictures-container">
      <div className="picture-wrapper">
        <img
          key={selectedCollection.id}
          src={collectionImages[selectedCollection.id]}
          alt={selectedCollection.name}
          className="picture-image"
        />
        <div className="picture-overlay">
          <h2 className="picture-title">{selectedCollection.name}</h2>
        </div>
      </div>
    </div>
  );
}
