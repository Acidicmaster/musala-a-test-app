

   
import mongoose from "mongoose";

const GatewaySchema = new mongoose.Schema({
    serial_number: {
      type: String,
      required: [true, "Please add a  serial number"],
      
    },
  
    name: {
      type: String,
      required: [true, "Please add human-readable name "],
    },
    
    ipv4_address:{
      type : String, 
    },
    peripherals:[{
      type : mongoose.Schema.Types.ObjectId,
      ref: "Peripheral"
  
    }],
  
  },
  {
      timestamps: true
  }
  
  );
  const gateway = mongoose.model("Gateway", GatewaySchema);
  export default gateway;