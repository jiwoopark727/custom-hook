import { useEffect, useState } from "react";
import { TInventoryItem } from "../../../types/basket";

const ItemInventory = ({
  inventoryItems,
}: {
  inventoryItems: TInventoryItem[];
}) => {
  console.log("itemInventory rendering");
  const [filterItems, setFilterItems] =
    useState<TInventoryItem[]>(inventoryItems);

  const [terms, setTerms] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerms(e.target.value);
  };

  // 가방 -> 가위
  useEffect(() => {
    console.log("itemInventory useEffect");
    setFilterItems(inventoryItems);
  }, [inventoryItems]);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Current Inventory</h2>
        <div className="mb-4">
          <input
            className="flex h-10 rounded-md border bg-background px-3 py-2 text-sm w-full"
            placeholder="Search inventory..."
            type="search"
            autoComplete="off"
            value={terms}
            onChange={onChangeHandler}
          />
        </div>
        <div className="overflow-auto">
          <div className="relative w-full overflow-scroll max-h-[280px]">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 font-medium cursor-pointer">Name</th>
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
                {filterItems
                  .filter((item) => item.name.includes(terms))
                  .map((item) => (
                    <tr className="border-b">
                      <td className="p-4 font-medium">{item.name}</td>
                      <td className="p-4">{item.description}</td>
                      <td className="p-4 text-right">{item.quantity}</td>
                      <td className="p-4 text-right">${item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemInventory;
