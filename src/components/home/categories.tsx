import { Button } from "../ui/button";


type FoodItem = {
    label: string;
    emoji: string;
  };

  const foodItems: FoodItem[] = [
    { label: "Onigiri", emoji: "🍙" },
    { label: "Sayur", emoji: "🥦" },
    { label: "Buah", emoji: "🍎" },
    { label: "Roti", emoji: "🍞" },
    { label: "Daging", emoji: "🍖" },
    { label: "Ikan", emoji: "🐟" },
  ];

export default function Categories() {
    return (
        <section className="py-32">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h3 className="text-4xl font-semibold">Categories</h3>
                    <Button className="bg-slate-100/80 text-black font-semibold px-8 py-2">View all Categories</Button>
                </div>
                <div className="grid grid-cols-6 gap-8 mt-12">
                    {foodItems.map((item, index) => (
                        <CardCategories key={index} label={item.label} emoji={item.emoji} />
                    ))}
                </div>
            </div>
        </section>
    );
}


const CardCategories = ({label, emoji}: FoodItem) => {
    return (
        <div className="bg-gradient-to-t from-blue-200/80  p-8 rounded-2xl flex flex-col justify-center items-center gap-8  shadow-md col-span-1">
            <h3 className="text-6xl">{emoji}</h3>
            <h3 className="text-lg font-semibold">{label}</h3>
        </div>
    )
}