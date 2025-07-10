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
        <section className="py-16 md:py-32 px-4 md:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h3 className="text-2xl md:text-4xl font-semibold">Categories</h3>
                    <Button className="bg-slate-100/80 text-black font-semibold px-6 md:px-8 py-2">View all Categories</Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 mt-8 md:mt-12">
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
        <div className="bg-gradient-to-t from-blue-200/80 p-4 md:p-8 rounded-2xl flex flex-col justify-center items-center gap-4 md:gap-8 shadow-md col-span-1 min-h-[120px] md:min-h-[180px]">
            <h3 className="text-3xl md:text-6xl">{emoji}</h3>
            <h3 className="text-base md:text-lg font-semibold">{label}</h3>
        </div>
    )
}