'use client';

import Image from 'next/image';
import React from 'react';

interface Collection {
  id: string;
  name: string;
}

interface CollectionInfoProps {
  selectedCollection: Collection;
}
const collectionData = {
  black: {
    description: 'Элегантная коллекция в классическом черном цвете',
    includes: [
      'Очищающий гель',
      'Тоник для лица',
      'Увлажняющий крем',
      'Сыворотка',
      'Маска для лица',
    ],
    benefits: [
      'Глубокое очищение кожи',
      'Интенсивное увлажнение',
      'Антивозрастной эффект',
      'Выравнивание тона кожи',
    ],
    price: '2999 ₽',
  },
  hb: {
    description: 'Праздничный набор - идеальный подарок на день рождения',
    includes: [
      'Шампунь праздничный',
      'Кондиционер',
      'Маска для волос',
      'Блеск для губ',
      'Подарочная упаковка',
    ],
    benefits: [
      'Роскошная упаковка',
      'Приятный аромат',
      'Питание и восстановление',
      'Готовый подарок',
    ],
    price: '3499 ₽',
  },
  tetris: {
    description: 'Игровая коллекция в стиле ретро-игры Tetris',
    includes: [
      'Гель для душа "Level Up"',
      'Шампунь "Power Play"',
      'Скраб "Game Over"',
      'Лосьон "High Score"',
      'Геймпад-мочалка',
    ],
    benefits: [
      'Уникальный дизайн',
      'Яркий цитрусовый аромат',
      'Энергия на весь день',
      'Коллекционный набор',
    ],
    price: '3299 ₽',
  },
  travel: {
    description: 'Компактный набор для путешествий - все необходимое в дороге',
    includes: [
      'Мини-шампунь 50мл',
      'Мини-гель для душа 50мл',
      'Зубная паста 20мл',
      'Крем для рук 30мл',
      'Дорожная косметичка',
    ],
    benefits: [
      'Компактный размер',
      'Соответствует правилам авиаперевозок',
      'Герметичная упаковка',
      'Легкий вес',
    ],
    price: '1499 ₽',
  },
  sup: {
    description: 'Премиум коллекция Supreme Cherry - роскошь и стиль',
    includes: [
      'Cherry Lip Balm',
      'Cherry Body Lotion',
      'Cherry Face Cream',
      'Cherry Hand Cream',
      'Эксклюзивная упаковка',
    ],
    benefits: [
      'Аромат вишни',
      'Премиум качество',
      'Лимитированная серия',
      'Стильный дизайн',
    ],
    price: '4999 ₽',
  },
  mirror: {
    description: 'Коллекция с зеркальным эффектом - сияние и блеск',
    includes: [
      'Сияющая сыворотка',
      'Хайлайтер для лица',
      'Блеск для губ',
      'Карманное зеркало',
      'Кисть для макияжа',
    ],
    benefits: [
      'Эффект сияния',
      'Светоотражающие частицы',
      'Идеально для вечера',
      'Зеркальная упаковка',
    ],
    price: '3799 ₽',
  },
  def: {
    description: 'Базовая коллекция - все необходимое для ежедневного ухода',
    includes: [
      'Очищающее средство',
      'Увлажняющий крем',
      'Солнцезащитный крем SPF30',
      'Ночной крем',
      'Инструкция по уходу',
    ],
    benefits: [
      'Базовый уход',
      'Подходит для всех типов кожи',
      'Доступная цена',
      'Проверенная формула',
    ],
    price: '2499 ₽',
  },
};

export default function CollectionInfo({
  selectedCollection,
}: CollectionInfoProps) {
  const info =
    collectionData[selectedCollection.id as keyof typeof collectionData];
  return (
    <div className="info-container">
      <div className="info-content">
        <h2 className="info-title">{selectedCollection.name}</h2>
        <p className="info-description">{info.description}</p>

        <div className="info-section">
          <h3 className="section-title">Что входит в набор:</h3>
          <ul className="info-list">
            {info.includes.map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="info-section">
          <h3 className="section-title">Преимущества:</h3>
          <ul className="info-list benefits-list">
            {info.benefits.map((benefit, index) => (
              <li key={index} className="list-item benefit-item">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="price-section">
          <span className="price-label">Цена:</span>
          <span className="price-value">{info.price}</span>
        </div>

        <button className="buy-button">Купить сейчас</button>
      </div>
      <Image
        src="/images/erf.png"
        alt="exc"
        width={700}
        height={400}
        className="exc-image"
      />
    </div>
  );
}
