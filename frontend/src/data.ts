import { Parfum } from './app/shared/models/Parfum';
import { Tag } from './app/shared/models/Tag';
export const sample_parfums: Parfum[] = [
    {
        id:'1',
        name: 'Homme Dior',
        price: 45,
        favorite: false,
        origins: ['France'],
        stars: 4.5,
        imageUrl: 'https://imgur.com/6uysF8w.png',
        tags: ['floral', 'woody', 'earthy'],
      },
      {
        id:'2',
        name: 'Toni Gard True',
        price: 35,
        favorite: true,
        origins: ['France'],
        stars: 4.7,
        imageUrl: 'https://imgur.com/DccTEJG.jpg',
        tags: ['fresh', 'pineapple lemon' , 'floral', 'Men'],
      },
      {
        id:'3',
        name: 'Sauvage Tom Ford',
        price: 40,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'https://imgur.com/6YdDmu3.png',
        tags: ['floral', 'Men'],
      },
]

export const sample_tags:Tag[] = [
  {name:'All', count:3},
  {name:'floral', count:3},
  {name:'woody', count:1},
  {name:'earthy', count:1},
  {name:'fresh', count:1},
  {name:'pineapple lemon', count:1},
  {name:'Men', count:2}
  
]