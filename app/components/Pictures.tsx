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
    hb: 'https://basket-22.wbbasket.ru/vol3909/part390990/390990015/images/big/1.webp',
    tetris:
      'https://basket-27.wbbasket.ru/vol5138/part513872/513872235/images/big/1.webp',
    travel:
      'https://basket-15.wbbasket.ru/vol2386/part238679/238679208/images/big/1.webp',
    sup: 'https://basket-18.wbbasket.ru/vol2994/part299462/299462002/images/big/1.webp',
    mirror:
      'https://basket-20.wbbasket.ru/vol3366/part336639/336639719/images/big/1.webp',
    def: 'https://basket-15.wbbasket.ru/vol2218/part221883/221883545/images/big/1.webp',
  };
  return (
    <div className="pictures-container">
      <div className="picture-wrapper">
        <div className="picture-overlay">
          <h2 className="picture-title">{selectedCollection.name}</h2>
        </div>
        <img
          key={selectedCollection.id}
          src={collectionImages[selectedCollection.id]}
          alt={selectedCollection.name}
          className="picture-image"
        />
      </div>
    </div>
  );
}
