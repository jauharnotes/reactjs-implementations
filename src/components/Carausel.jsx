import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import imagePlaceHolder from "../img/img-placeholder.png";

function Carausel() {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
      }}
    >
      <SplideSlide>
        <img src={imagePlaceHolder} alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={imagePlaceHolder} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={imagePlaceHolder} alt="Image 3" />
      </SplideSlide>
    </Splide>
  );
}

export default Carausel;
