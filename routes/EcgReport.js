const express = require("express");
const ECG = require("../model/EcgReport"); // Your ECG schema
const ECGrouter = express.Router();

// ECGrouter.get("/ecg-data", async (req, res) => {
//   try {
//     const ecgReports = await ECG.find({}, { lead_data: 1, timestamp: 1, _id: 0 }); // Fetching specific fields
//     res.json(ecgReports);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });


let ECGStatus = [
    {
      "timestamp": "2024-01-30T10:15:00.000Z",
      "lead_data": {
        "lead_I": [0.15, 0.18, 0.20],
        "lead_II": [0.22, 0.25, 0.30],
        "lead_III": [-0.10, -0.12, -0.15]
      }
    },
    {
      "timestamp": "2024-01-30T10:16:00.000Z",
      "lead_data": {
        "lead_I": [0.17, 0.19, 0.22],
        "lead_II": [0.23, 0.26, 0.31],
        "lead_III": [-0.11, -0.13, -0.16]
      }
    },
    {
      "timestamp": "2024-01-30T10:17:00.000Z",
      "lead_data": {
        "lead_I": [0.18, 0.21, 0.23],
        "lead_II": [0.24, 0.27, 0.32],
        "lead_III": [-0.12, -0.14, -0.17]
      }
    },
    {
      "timestamp": "2024-01-30T10:18:00.000Z",
      "lead_data": {
        "lead_I": [0.16, 0.19, 0.21],
        "lead_II": [0.21, 0.24, 0.29],
        "lead_III": [-0.11, -0.13, -0.14]
      }
    },
    {
      "timestamp": "2024-01-30T10:19:00.000Z",
      "lead_data": {
        "lead_I": [0.14, 0.17, 0.19],
        "lead_II": [0.20, 0.23, 0.28],
        "lead_III": [-0.09, -0.11, -0.13]
      }
    },
    {
      "timestamp": "2024-01-30T10:20:00.000Z",
      "lead_data": {
        "lead_I": [0.20, 0.23, 0.25],
        "lead_II": [0.25, 0.28, 0.33],
        "lead_III": [-0.13, -0.15, -0.18]
      }
    },
    {
      "timestamp": "2024-01-30T10:21:00.000Z",
      "lead_data": {
        "lead_I": [0.19, 0.22, 0.24],
        "lead_II": [0.26, 0.29, 0.34],
        "lead_III": [-0.12, -0.14, -0.16]
      }
    },
    {
      "timestamp": "2024-01-30T10:22:00.000Z",
      "lead_data": {
        "lead_I": [0.21, 0.24, 0.26],
        "lead_II": [0.27, 0.30, 0.35],
        "lead_III": [-0.14, -0.16, -0.18]
      }
    },
    {
      "timestamp": "2024-01-30T10:23:00.000Z",
      "lead_data": {
        "lead_I": [0.22, 0.25, 0.28],
        "lead_II": [0.28, 0.31, 0.36],
        "lead_III": [-0.15, -0.17, -0.19]
      }
    },
    {
      "timestamp": "2024-01-30T10:24:00.000Z",
      "lead_data": {
        "lead_I": [0.23, 0.26, 0.29],
        "lead_II": [0.29, 0.32, 0.37],
        "lead_III": [-0.16, -0.18, -0.20]
      }
    },
    {
      "timestamp": "2024-01-30T10:25:00.000Z",
      "lead_data": {
        "lead_I": [0.25, 0.28, 0.30],
        "lead_II": [0.30, 0.33, 0.38],
        "lead_III": [-0.17, -0.19, -0.21]
      }
    },
    {
      "timestamp": "2024-01-30T10:26:00.000Z",
      "lead_data": {
        "lead_I": [0.26, 0.29, 0.31],
        "lead_II": [0.31, 0.34, 0.39],
        "lead_III": [-0.18, -0.20, -0.22]
      }
    },
    {
      "timestamp": "2024-01-30T10:27:00.000Z",
      "lead_data": {
        "lead_I": [0.28, 0.31, 0.33],
        "lead_II": [0.32, 0.35, 0.40],
        "lead_III": [-0.19, -0.21, -0.23]
      }
    },
    {
      "timestamp": "2024-01-30T10:28:00.000Z",
      "lead_data": {
        "lead_I": [0.29, 0.32, 0.34],
        "lead_II": [0.33, 0.36, 0.41],
        "lead_III": [-0.20, -0.22, -0.24]
      }
    },
    {
      "timestamp": "2024-01-30T10:29:00.000Z",
      "lead_data": {
        "lead_I": [0.30, 0.33, 0.35],
        "lead_II": [0.34, 0.37, 0.42],
        "lead_III": [-0.21, -0.23, -0.25]
      }
    }
  ];
  

ECGrouter.get('/fetch-ecg-data',async (req,res)=>{
    try{

        const ECGdata = ECGStatus
        if(ECGdata.length > 0){
            return res.json({success : true , data : ECGdata})
        }
        else{
            return res.json({success : false , message : "Data error come to  ECG please check your machine or patient"})
        }

    }
    catch(err){
        console.log("Troule error in login", err)
        return res.json({ success: false, message: "Trouble Error to login please contact " })

    }
})





module.exports = ECGrouter;
