interface Article {
    id: number;
    title: string;
    image: string;
    description: string;
    author: string;
    authorImage: string;
    date: string;
}

export const articles: Article[] = [
    {
      id: 1,
      title: "Crochet Projects for Noodle Lovers",
      image: "https://i.pinimg.com/736x/20/3c/b1/203cb19e92db4527b32c19d8fbf60810.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat quia veritatis quos! Nihil veniam voluptas.",
      author: "John Smith",
      authorImage: "https://randomuser.me/api/portraits/men/1.jpg",
      date: "15 March 2025",
    },
    {
      id: 2,
      title: "Quick & Healthy Breakfast Ideas",
      image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UXVpY2slMjAlMjYlMjBIZWFsdGh5JTIwQnJlYWtmYXN0JTIwSWRlYXN8ZW58MHx8MHx8fDA%3D",
      description:
        "Start your day with energy! Here are 5 quick and healthy breakfast recipes.",
      author: "Jane Doe",
      authorImage: "https://randomuser.me/api/portraits/women/2.jpg",
      date: "12 March 2025",
    },
    {
      id: 3,
      title: "5 Smoothie Recipes to Boost Your Morning",
      image: "https://plus.unsplash.com/premium_photo-1695166767733-be6903caac71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NSUyMFNtb290aGllJTIwUmVjaXBlcyUyMHRvJTIwQm9vc3QlMjBZb3VyJTIwTW9ybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Delicious smoothie recipes packed with vitamins and nutrients.",
      author: "Alice Brown",
      authorImage: "https://randomuser.me/api/portraits/women/3.jpg",
      date: "10 March 2025",
    },
    {
      id: 4,
      title: "The Ultimate Guide to Meal Prepping",
      image: "https://plus.unsplash.com/premium_photo-1701115249441-59f109e9745e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwVWx0aW1hdGUlMjBHdWlkZSUyMHRvJTIwTWVhbCUyMFByZXBwaW5nfGVufDB8fDB8fHww",
      description:
        "Save time and eat healthier with these meal prepping tips and tricks for the busy week ahead.",
      author: "Chris Green",
      authorImage: "https://randomuser.me/api/portraits/men/4.jpg",
      date: "08 April 2025",
    },
    {
      id: 5,
      title: "Exploring the Street Food of Yogyakarta",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "A culinary journey through the vibrant and delicious street food scene in Yogyakarta, from gudeg to sate klatak.",
      author: "Siti Lestari",
      authorImage: "https://randomuser.me/api/portraits/women/5.jpg",
      date: "25 June 2025",
    },
];