function Form({register, handleSubmit, onSubmitForm}) {
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
        {/* <p className="error">{errors.name?.message}</p> */}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          placeholder="Email"
          className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
          {...register("email")}
          id="email"
        />
        {/* <p className="error">{errors.email?.message}</p> */}
      </div>

      <div>
        <label htmlFor="city">City</label>
        <select
          placeholder="City"
          className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm"
          {...register("city")}
          id="city"
        >
          <option value="">Please select</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
        </select>
        {/* <p className="error">{errors.city?.message}</p> */}
      </div>

      <div className="flex gap-8">
        <div className="flex gap-2">
          <input
            type="radio"
            id="sameday"
            {...register("delivery")}
            value="sameday"
          />
          <label htmlFor="sameday">Same Day</label>
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            id="regular"
            {...register("delivery")}
            value="regular"
          />
          <label htmlFor="regular">Regular</label>
        </div>
      </div>

      <div className="flex gap-2">
        <input type="checkbox" {...register("wrap")} id="wrap" />
        <label htmlFor="wrap">Extra Wrap</label>
      </div>

      <button
        className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
        type="submit"
      >
        Purchase
      </button>
    </form>
  );
}

export default Form;