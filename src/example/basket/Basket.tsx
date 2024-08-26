import { useEffect, useState } from 'react';

interface info {
  name: string;
  quantity: number;
  description: string;
  price: number;
}

// const onChangeHanlder = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// )


const Basket = () => {
  const [value, setValue] = useState<info[]>()
  const [name, setName] = useState('');
  const [quantity, setQuan] = useState(0);
  const [description, setDes] = useState('');
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState('');
  const [filterItems, setFilterItems] = useState<info[]>()

  const handleAddItem = () => {
    setValue((value)=>[...(value || []), {name, quantity, description, price}])
  }

  const filteredItems = () =>{
    value?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  useEffect(()=>{
    setFilterItems(value);
  }, [value])

  // cosnt addInventoryItems = (item) => {
  //   setI
  // }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-500">
        <div className="flex gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
            <form onSubmit={(e) => e.preventDefault} className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
                    id="name"
                    name="name"
                    autoComplete="off"
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="quantity"
                  >
                    Quantity
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
                    id="quantity"
                    type="number"
                    name="quantity"
                    autoComplete="off"
                    onChange={(e)=>{setQuan(Number(e.target.value))}}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
                  id="description"
                  name="description"
                  autoComplete="off"
                  onChange={(e)=>{setDes(e.target.value)}}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
                  id="price"
                  type="number"
                  name="price"
                  autoComplete="off"
                  onChange={(e)=>{setPrice(Number(e.target.value))}}
                />
              </div>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#f0f0f0] hover:bg-primary/90 h-10 px-4 py-2"
                onClick={handleAddItem}
                type='button'>
                Add Item
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Current Inventory</h2>
            <div className="mb-4">
              <input
                className="flex h-10 rounded-md border bg-background px-3 py-2 text-sm w-full"
                placeholder="Search inventory..."
                type="search"
                autoComplete="off"
                onChange={  (e)=>{setSearch(e.target.value);  filteredItems(); console.log(value)} }
              />
            </div>
            <div className="overflow-auto">
              <div className="relative w-full overflow-scroll max-h-[280px]">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 font-medium cursor-pointer">
                        Name
                      </th>
                      <th className="h-12 px-4 font-medium cursor-pointer">
                        Description
                      </th>
                      <th className="h-12 px-4 font-medium cursor-pointer">
                        Quantity
                      </th>
                      <th className="h-12 px-4 font-medium cursor-pointer">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        value?.map((e)=>
                          <>
                            <tr className="border-b">
                              <td className="p-4 font-medium">{e.name}</td>
                              <td className="p-4">{e.quantity}</td>
                              <td className="p-4 text-right">{e.description}</td>
                              <td className="p-4 text-right">{e.price}</td>
                            </tr>
                          </>
                        )
                      }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Basket;  



//강사님 답
// import { useState } from "react";
// import { TInventoryItem } from "../../types/basket";
// import ItemAdd from "./ItemAdd";
// import ItemInventory from "./ItemInventory";

// const Basket = () => {
//   console.log("Basket rendering");
//   const [inventoryItems, setInventoryItems] = useState<TInventoryItem[]>([]);
//   const addIventoryItem = (item: TInventoryItem) => {
//     setInventoryItems((inventoryItems) => [...inventoryItems, item]);
//   };

//   return (
//     <>
//       <div className="flex items-center justify-center min-h-screen bg-gray-500">
//         <div className="flex gap-4">
//           {/* 왼쪽 영역 */}
//           <ItemAdd addIventoryItem={addIventoryItem} />
//           {/* 오른쪽 영역 */}
//           <ItemInventory inventoryItems={inventoryItems} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Basket;
