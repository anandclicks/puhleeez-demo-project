import React from "react";

const Category = () => {
  const category = [
    {
      name: "Dupatta",
      image: "category/dupatta.webp",
    },
    {
      name: "Gowns",
      image: "category/gowns.webp",
    },
    {
      name: "Jacket",
      image: "category/jacket.webp",
    },
    {
      name: "kurti",
      image: "category/kurti.webp",
    },
    {
      name: "Salwar",
      image: "category/salwar.webp",
    },
    {
      name: "Sckirt",
      image: "category/sckirt.webp",
    },
  ];
  return <div>
    {/* <h2 className="text-2xl font-me">Categoes</h2> */}
    <div className="mt-5 flex gap-2 items-center justify-between h-[300px]">
      {category.map((item,key)=> (
        <div key={key} className="box shadow-sm p-2 w-[160px] h-[230px]  border-stone-100 border-[1px] cursor-pointer flex flex-col items-center">
        <img className="h-[90%] w-full object-cover " src={item.image} alt="" />
        <p className="text-[14px] font-[500]">{item.name}</p>
      </div>
      ))}
    </div>
  </div>;
};

export default Category;
