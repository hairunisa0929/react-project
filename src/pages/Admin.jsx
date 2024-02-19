import { useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "../components/Form";

function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [pokemonId, setPokemonId] = useState(null);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    price: yup.string().required("Price is required"),
    img: yup.string().required("Image is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getPokemon = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/pokemon",
    getPokemon
  );

  const onClickAdd = () => {
    setShowModal(true);
    setModalTitle("Add Item");
  };

  const onClickEdit = (id) => {
    axios.get(`http://localhost:3000/pokemon/${id}`).then((res) => {
      setValue("name", res.data.name);
      setValue("price", res.data.price);
      setValue("img", res.data.img);
      setModalTitle("Edit Item");
      setShowModal(true);
      setPokemonId(id);
    });
  };

  const onClickDelete = (id) => {
    axios.delete(`http://localhost:3000/pokemon/${id}`).then(() => mutate());
  };

  const onSubmitModal = (data) => {
    console.log(data);

    if (modalTitle === "Add Item") {
      axios
        .post("http://localhost:3000/pokemon", data)
        .then(() => {
          reset();
          setShowModal(false);
          mutate();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      axios
        .put(`http://localhost:3000/pokemon/${pokemonId}`, data)
        .then(() => {
          reset();
          setShowModal(false);
          mutate();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold">List Products</h1>
      {isLoading ? (
        <BeatLoader color="#38BDF8" />
      ) : (
        <>
          <button
            onClick={onClickAdd}
            className="bg-blue-400 rounded-lg p-2 text-white"
          >
            Add New Pokemon
          </button>

          {showModal && (
            <Form
              title={modalTitle}
              handleSubmit={handleSubmit}
              register={register}
              onSubmitForm={onSubmitModal}
              errors={errors}
              handleClose={() => {
                setShowModal(false);
                reset();
              }}
            />
          )}

          <div className="rounded-lg border p-4 mt-4">
            {data.map((item) => (
              <div className="grid grid-cols-4 items-center" key={item.id}>
                <img src={item.img} alt={item.name} className="w-[80px]" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div className="flex gap-4 text-white">
                  <button
                    className="bg-blue-400 rounded-lg p-2"
                    onClick={() => onClickEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 rounded-lg p-2"
                    onClick={() => onClickDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;
