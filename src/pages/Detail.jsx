import { useLocation, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { pokemon } from "../data/pokemon";

function Detail() {
  // useParams
  const { id } = useParams();
  // console.log(id);
  const data = pokemon.find((item) => item.id === parseInt(id));
  // console.log(data);
  // get data with useSearchParams (params showed in url)
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("name"));

  // get data with useLocation (state not showed in url)
  // const location = useLocation();
  // console.log("name", location.state.name);

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl">{data.name}</h1>
      <img src={data.img} alt={data.name} />
      <div>tes detail</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        tempus ut velit ac commodo. Proin vitae augue at eros tempor feugiat.
        Fusce sit amet eros ut lacus pretium bibendum eu id ipsum. Etiam rutrum
        sem eget accumsan bibendum. Phasellus eu magna tempor, malesuada elit
        eget, lobortis nunc. Praesent id velit a sem condimentum placerat.
        Aenean id fermentum sem. Donec libero odio, elementum eu quam a, posuere
        eleifend risus. Duis a justo placerat, accumsan felis et, scelerisque
        magna. Donec scelerisque tortor et nibh porta vehicula. Suspendisse
        feugiat sit amet velit non aliquam. Proin porta varius lacus, nec
        malesuada lectus ultricies id. Cras a justo congue, venenatis sapien ac,
        semper enim. Quisque vel rhoncus diam, vitae blandit massa. Fusce arcu
        nulla, sollicitudin eu lacus congue, vulputate ornare elit. Maecenas id
        tortor rutrum, sagittis neque in, luctus nisi. Maecenas nec neque dolor.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed vel finibus nisl. Maecenas ultrices odio at ex
        gravida malesuada. Ut in urna vehicula, ornare ipsum id, tempor tellus.
        Vivamus maximus eget urna vel ullamcorper. Nulla massa augue, lacinia
        quis vestibulum ut, aliquam in lectus. Pellentesque aliquet dignissim
        diam ac accumsan. Nulla lobortis eros pellentesque, feugiat dolor sit
        amet, ullamcorper mi. Aenean lobortis cursus purus, vel maximus nisi.
        Phasellus fringilla, sem sed ultrices elementum, ligula mi molestie
        enim, et mattis velit dui a nisi. Donec orci velit, porttitor nec nulla
        et, convallis sagittis erat. Aenean ultricies interdum leo ut euismod.
        Phasellus in tortor id sapien aliquet sagittis. Suspendisse commodo,
        dolor vitae porta rutrum, mi arcu feugiat sem, non luctus sapien libero
        dignissim elit. Nulla interdum mattis hendrerit. Aliquam egestas lorem
        vitae ante elementum ornare. Proin eget odio libero. Etiam eget lorem
        metus. Vivamus ligula ligula, posuere id sollicitudin vitae, finibus et
        tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Vivamus vel quam ultricies, ornare libero dictum,
        tincidunt augue. Vivamus tristique libero non mi vehicula congue.
        Quisque ante arcu, suscipit vel commodo non, interdum vitae sapien. Cras
        vulputate turpis odio, ac tristique sapien elementum laoreet.
      </p>
    </div>
  );
}

export default Detail;
