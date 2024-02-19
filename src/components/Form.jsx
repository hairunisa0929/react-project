import { IoCloseOutline } from "react-icons/io5";

function Form({
  title,
  handleSubmit,
  register,
  onSubmitForm,
  errors,
  handleClose,
}) {
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="h-fit w-fit p-4 rounded-lg bg-white shadow-md">
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">{title}</h2>
            <IoCloseOutline
              className="text-lg cursor-pointer"
              onClick={handleClose}
            />
          </div>
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
            <p className="error">{errors.price?.message}</p>
          </div>

          <div>
            <label htmlFor="img">Image</label>
            <input
              placeholder="Image URL"
              className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
              {...register("img")}
              id="img"
            />
            <p className="error">{errors.img?.message}</p>
          </div>

          <button
            className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
