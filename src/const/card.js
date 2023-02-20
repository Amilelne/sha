import { DefaultCardPath } from './default';

const cards = {
  sha: {
    name: '杀',
    url: 'sha.png',
  },
  shan: {
    name: '闪',
    url: 'shan.png',
  },
  tao: {
    name: '桃',
    url: 'tao.png',
  },
};

export function getCardPath(cardId) {
  return DefaultCardPath + cards[cardId].url;
}

export function getCardById(cardId) {
  const card = cards[cardId];
  const newCard = Object.assign({...card}, {
    url: getCardPath(cardId),
    // url: '/vite.svg'
  });
  return newCard;
}
