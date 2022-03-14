// Simple middleware for handling exceptions inside of async express routes
// and passing them to your express error handlers
import asyncHandler from "express-async-handler";
import PeripheralModel from "../models/peripheral.js";


const getAllPeripheral =asyncHandler(async (req, res, next) => {
    let data = await PeripheralModel.find();
    res.status(200).json(data);
  });

  const getPeripheral =asyncHandler( async (req, res, next) => {
    let found = await PeripheralModel.findById(req.params.id);
    if (!found){
        res.status(400);
        throw new Error(`Peripheral  is not found with id of ${req.params.id}`)

    }
   
    res.status(200).json(found);
  });

  const createPeripheral =asyncHandler( async (req, res, next) => {
     await PeripheralModel.create(req.body).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500);
        throw new Error(`Error creating Peripharal ${error.message}`)
      });
    ;
  });

  const updatePeripheral = asyncHandler(async (req, res, next) => {
     await PeripheralModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500);
        throw new Error(`Error updating Peripharal ${error.message}`)
    
      });
  });
  
  const deletePeripheral =asyncHandler( async (req, res, next) => {
    const data = await PeripheralModel.findById(req.params.serial_number);
  
    if (!data){
        res.status(400);
        throw new Error(`gateway  is not found with Id of ${req.params.id}`)
    }
   
  
  
    await data.remove();
    res
      .status(204)
      .send({ status: "success"});
  });


  export {
  getAllPeripheral,
  getPeripheral,createPeripheral,
  deletePeripheral,updatePeripheral
  };