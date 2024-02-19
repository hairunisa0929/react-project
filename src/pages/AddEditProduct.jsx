import { useParams } from "react-router-dom";

function AddEditProduct({ register, handleSubmit, onSubmitForm }) {
  const { action } = useParams();
  
  return (
    <form
      className="flex flex-col gap-4 mt-4"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Name"
          className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
          {...register("name")}
          id="name"
        />
        <p className="error">{errors.name?.message}</p>
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          placeholder="Price"
          className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
          {...register("price")}
          id="price"
        />
        <p className="error">{errors.name?.price}</p>
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <input
          placeholder="Image URL"
          className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
          {...register("image")}
          id="image"
        />
        <p className="error">{errors.name?.image}</p>
      </div>

      <button
        className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default AddEditProduct;
