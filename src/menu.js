// Transcribed from the restaurant's supplied eight-page menu.
// One price = listed price; two prices = half and full as printed.
export const categories = [
  {
    id: 'paneer', title: 'Paneer & Kaju', gujarati: 'પનીર કા કમાલ',
    items: [
      ['Rajwadu Special', 200], ['Paneer Tikka Masala', 140], ['Paneer Handi Masala', 150],
      ['Paneer Butter Masala', 150], ['Paneer Kadai', 150], ['Paneer Tawa', 160],
      ['Paneer Bhurji', 160], ['Paneer Lasaniya', 160], ['Paneer Toofani', 170],
      ['Paneer Angara', 160], ['Paneer Patiyala', 180], ['Shahi Paneer', 140],
      ['Paneer Hungama', 150], ['R.J. Paneer', 170], ['Paneer Chatpata', 160],
      ['Paneer Lavabdar', 170], ['Paneer Laziz', 170], ['Paneer Maharaja', 180],
      ['Malai Methi Masala', 150], ['Cheese Paneer Masala', 170],
      ['Cheese Paneer Butter Masala', 180], ['Cheese Butter Masala', 170],
      ['Cheese Angara', 170], ['Cheese Tawa', 170], ['Cheese Kaju Masala', 180],
      ['Cheese Kaju Tawa Masala', 180], ['Kaju Curry', 150], ['Kaju Masala', 160],
      ['Kaju Paneer Masala', 160], ['Kaju Kadai', 160], ['Kaju Methi Masala', 160]
    ]
  },
  {
    id: 'vegetable', title: 'Vegetable Curries', gujarati: 'વેજ કા કમાલ',
    items: [
      ['Veg. Handi', 130], ['Veg. Kadai', 130], ['Veg. Tawa', 130],
      ['Veg. Toofani', 140], ['Mix Veg.', 110], ['Balti Veg.', 130],
      ['Veg. Makhkhanvala', 140], ['Veg. Kolhapuri', 130], ['Veg. Jaypuri', 130],
      ['Veg. Singapuri', 140], ['Chana Masala', 100], ['Sev Tameta', 90],
      ['Dal Fry', 80], ['Dal Fry Butter', 90], ['Dal Tadka', 90]
    ]
  },
  {
    id: 'chinese', title: 'Chinese Starters', gujarati: 'ચાઇનીઝ સ્ટાર્ટર',
    items: [
      ['Veg. Manchurian Dry', 60, 100], ['Veg. Manchurian Gravy', 60, 100],
      ['Veg. 65', 180], ['Veg. Lollipop', 180], ['Veg. Crispy', 180],
      ['Paneer Chilly Dry', 140], ['Paneer Manchurian Dry', 180],
      ['Paneer Manchurian Gravy', 180], ['Paneer Crispy', 200],
      ['Paneer Compound Sauce', 200], ['Paneer 65', 200]
    ]
  },
  {
    id: 'soups', title: 'Soups', gujarati: 'સૂપ',
    items: [
      ['Veg. Hot and Sour', 80], ['Veg. Manchow', 85],
      ['Veg. Manchurian Soup', 80], ['Mushroom Soup', 80]
    ]
  },
  {
    id: 'noodles', title: 'Noodles', gujarati: 'નૂડલ્સ',
    items: [
      ['Hakka Noodles', 70, 100], ['Manchurian Noodles', 70, 100],
      ['Sizwan Noodles', 110], ['Singapuri Noodles', 120]
    ]
  },
  {
    id: 'rice', title: 'Rice & Biryani', gujarati: 'રાઇસ કા કમાલ',
    items: [
      ['Plain Rice', 60], ['Jira Rice', 70], ['Veg. Fry Rice', 70, 100],
      ['Manchurian Fry Rice', 70, 100], ['Sizwan Fry Rice', 110],
      ['Veg. Biryani', 110], ['Veg. Hyderabadi Biryani', 120],
      ['Veg. Pulav', 60, 80], ['Paneer Pulav', 75, 100],
      ['Cheese Pulav', 110], ['Noodles Fry Rice', 120], ['Chinese Bhel', 140]
    ]
  },
  {
    id: 'breads', title: 'Tandoori & Breads', gujarati: 'ચપાતી તંદૂરી નાન',
    items: [
      ['Plain Tandoori', 12], ['Butter Tandoori', 14], ['Plain Naan', 25],
      ['Butter Naan', 30], ['Cheese Naan', 60], ['Cheese Garlic Naan', 80],
      ['Plain Hariyali Naan', 45], ['Butter Hariyali Naan', 50],
      ['Plain Kulcha', 40], ['Butter Kulcha', 50], ['Stuff Parotha', 70],
      ['Aloo Parotha', 60], ['Plain Chapati', 11], ['Butter Chapati', 13],
      ['Plain Parotha', 25], ['Butter Parotha', 30]
    ]
  },
  {
    id: 'sides', title: 'Sides & Buttermilk', gujarati: 'પાપડ સલાડ છાસ',
    items: [
      ['Roasted Papad', 15], ['Fry Papad', 20], ['Masala Papad', 30],
      ['Tomato Salad', 30], ['Green Salad', 30], ['Kachumber Salad', 30],
      ['Buttermilk', 15]
    ]
  },
  {
    id: 'specials', title: 'Meals & Specials', gujarati: 'ભોજન વિશેષ',
    items: [
      ['Bhaji Pav — Oil', 80], ['Bhaji Pav — Butter', 90],
      ['Bhaji Pav — Cheese', 110], ['Bhaji Pav — Rajwadu Special', 120],
      ['Manchurian — Half', 60], ['Manchurian — Full', 100],
      ['Punjabi Fixed Dish', 110], ['Punjabi Fixed Dish Parcel', 120]
    ]
  }
];

export const originalMenu = [
  ['1000520769.jpg', 'Menu cover'],
  ['1000520760.jpg', 'Paneer and kaju'],
  ['1000520757.jpg', 'Vegetable curries and rice'],
  ['1000520766.jpg', 'Starters, soups and sides'],
  ['1000520772.jpg', 'Noodles and breads'],
  ['1000520775.jpg', 'Specials'],
  ['1000520778.jpg', 'Punjabi fixed dish'],
  ['1000520763.jpg', 'Restaurant information']
];
