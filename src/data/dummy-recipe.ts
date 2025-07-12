interface Recipe {
  id: number;
  title: string;
  image: string;
  duration: string;
  category: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop",
    duration: "30 Minutes",
    category: "Snack",
  },
  {
    id: 2,
    title: "Healthy Avocado Salad with Fresh Greens",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1998&auto=format&fit=crop",
    duration: "15 Minutes",
    category: "Salad",
  },
  {
    id: 3,
    title: "Spicy Chicken Curry with Coconut Milk",
    image:
      "https://i.pinimg.com/736x/e2/8d/f2/e28df2691c1501784df30109195f64cf.jpg",
    duration: "45 Minutes",
    category: "Main Course",
  },
  {
    id: 4,
    title: "Vegan Pancakes with Maple Syrup",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1998&auto=format&fit=crop",
    duration: "25 Minutes",
    category: "Breakfast",
  },
  {
    id: 5,
    title: "Classic Italian Spaghetti Bolognese",
    image:
      "https://images.unsplash.com/photo-1574636573716-062c8c8c6179?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "50 Minutes",
    category: "Main Course",
  },
  {
    id: 6,
    title: "Refreshing Mixed Berry Smoothie",
    image:
      "https://images.unsplash.com/photo-1457518919282-b199744eefd6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "10 Minutes",
    category: "Drink",
  },
  {
    id: 7,
    title: "Grilled Salmon with Lemon and Asparagus",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
    duration: "25 Minutes",
    category: "Main Course",
  },
  {
    id: 8,
    title: "Decadent Chocolate Lava Cake",
    image:
      "https://images.unsplash.com/photo-1645805740318-31bb7604ffd9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "35 Minutes",
    category: "Dessert",
  },
];
