import axios from "axios";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import Card from "../components/Card";
import useSWR from "swr";

function Home() {
  const navigate = useNavigate();

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  // add new data
  const onClickPostData = () => {
    const payload = {
      name: "Hypno",
      type: "Psychic",
      description:
        "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    };

    axios
      .post("http://localhost:3000/pokemon", payload)
      .then(() => {
        console.log("New pokemon added!");
        mutate();
      })
      .catch((error) => console.log(error));
  };

  //   use react swr to fetch data
  const getPokemon = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/660/pokemon",
    getPokemon,
    {
      onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
    }
  );

  if (error) return alert(JSON.stringify(error));

  return (
    <section className="flex flex-col justify-center">
      <div className="flex justify-center gap-4">
        {/* <button
          className="rounded-lg bg-sky-400 p-2 text-white self-center"
          onClick={onClickGetData}
        >
          Get Data
        </button> */}

        <button
          className="rounded-lg bg-sky-400 p-2 text-white self-center"
          onClick={onClickPostData}
        >
          Post Data
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {isLoading ? (
          <BeatLoader color="#38BDF8" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.map(({ id, name, img }) => (
              <Card
                title={name}
                image={img}
                key={id}
                onClick={() => onClickCard(id, name)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
