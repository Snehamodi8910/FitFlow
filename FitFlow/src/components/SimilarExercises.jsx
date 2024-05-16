/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material"

import Carousel from "./Carousel"
import Loader from "./Loader"

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb="55px">
        Exercises that target the same muscle group
      </Typography>
      {targetMuscleExercises.length ? (
        <Carousel data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
      <Typography variant="h3" my="55px">
        Exercises that use the same equipment
      </Typography>
      {equipmentExercises.length ? (
        <Carousel data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Box>
  )
}
export default SimilarExercises
