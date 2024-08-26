import { useState } from "react";
import { TInventoryItem } from "../../../types/basket";

const ItemAdd = ({
  addIventoryItem,
}: {
  addIventoryItem: (item: TInventoryItem) => void;
}) => {
  console.log("itemAdd rendering");
  const [formState, setFormState] = useState({
    name: "",
    quantity: "",
    description: "",
    price: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
                id="name"
                name="name"
                autoComplete="off"
                value={formState.name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
                id="quantity"
                type="number"
                name="quantity"
                autoComplete="off"
                value={formState.quantity}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
              id="description"
              name="description"
              autoComplete="off"
              value={formState.description}
              onChange={onChangeHandler}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="price">
              Price
            </label>
            <input
              className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
              id="price"
              type="number"
              name="price"
              autoComplete="off"
              value={formState.price}
              onChange={onChangeHandler}
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#f0f0f0] hover:bg-primary/90 h-10 px-4 py-2"
            onClick={() => {
              addIventoryItem({
                name: formState.name,
                quantity: formState.quantity,
                description: formState.description,
                price: formState.price,
              });
              setFormState({
                name: "",
                quantity: "",
                description: "",
                price: "",
              });
            }}
          >
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};
export default ItemAdd;
