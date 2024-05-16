/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import BodyPart from "./BodyPart"
import ExerciseCard from "./ExerciseCard"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useMediaQuery } from "react-responsive"

const Carousel = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 })
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1024 })

  const settings = {
    infinite: true,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
  }
  return (
    <Slider {...settings}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </Slider>
  )
}
export default Carousel
