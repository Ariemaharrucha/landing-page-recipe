type FoodItem = {
  label: string;
  emoji: string;
};

export const CardCategories = ({ label, emoji }: FoodItem) => {
  return (
    <div className="bg-gradient-to-t from-blue-200/80 p-4 md:p-8 rounded-2xl flex flex-col justify-center items-center gap-4 md:gap-8 shadow-md col-span-1 min-h-[120px] md:min-h-[180px]">
      <h3 className="text-3xl md:text-6xl">{emoji}</h3>
      <h3 className="text-base md:text-lg font-semibold">{label}</h3>
    </div>
  );
};
