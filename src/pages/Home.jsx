import { useNavigate, Outlet } from "react-router";
import { pokemon as data } from "../data/pokemon";
import Card from "../components/Card";
import { createSearchParams } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  // passing data with search params
  // const onClickCard = (id, name) => {
  //   navigate({
  //     pathname: `/detail/${id}`,
  //     search: createSearchParams({
  //       name: name,
  //     }).toString(),
  //   });
  // };

  // passing data with state
  // const onClickCard = (id, name) => {
  //   navigate(`/detail/${id}`, {
  //     state: {
  //       name: name,
  //     },
  //   });
  // };

  return (
    <section className="flex flex-col justify-cente mt-8 p-8">
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
      {/* <Outlet /> */}
    </section>
  );
}

export default Home;
