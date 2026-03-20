
import type { Destination } from '../types';

export const FEATURED_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    description: 'Breathtaking sunsets, whitewashed houses, and crystal clear Aegean waters.',
    price: 1299,
    rating: 4.9,
    imageUrl: "https://media.cntraveller.com/photos/611be9bb69410e829d87e0c2/16:9/w_2560%2Cc_limit/Blue-domed-church-along-caldera-edge-in-Oia-Santorini-greece-conde-nast-traveller-11aug17-iStock.jpg",
    tags: ['Relax', 'Romance', 'Beach']
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Immerse yourself in traditional culture, stunning temples, and serene zen gardens.',
    price: 1450,
    rating: 4.8,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjvaPKfbUBst8wLsFE8rRRrrUUgZIu20xsQ&s',
    tags: ['Culture', 'Temples', 'History']
  },
  {
    id: '3',
    name: 'Swiss Alps',
    country: 'Switzerland',
    description: 'Experience majestic mountain peaks, luxury ski resorts, and pristine lakes.',
    price: 1800,
    rating: 4.9,
    imageUrl: 'https://www.alpsinsight.com/wp-content/uploads/2016/02/13SPcy0360.jpg',
    tags: ['Nature', 'Adventure', 'Luxury']
  },
  {
    id: '4',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Tropical paradise known for forested volcanic mountains, iconic rice paddies, and coral reefs.',
    price: 899,
    rating: 4.7,
    imageUrl: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/olvu6sgb3dcdjwlcpts3.jpg',
    tags: ['Tropical', 'Surfing', 'Relax']
  }
];
