const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
/**
 * 
 *POST: /airplanes
 req-body {modelNumber:'airbus234', capacity:200}
 */
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    console.log("inside controller", airplane);
    return res.status(StatusCodes.CREATED).json({
      sucess: true,
      data: airplane,
      message: "Successfully created an airplane",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "something went wrong while creating an airplane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
