const mongoose = require("mongoose");

const ECGSchema = new mongoose.Schema({

    Id : {type : Number , required : true , unique : true},

  patient_id: {
    type: Number, // Reference to Patient collection
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  lead_data: {
    lead_I: { type: [Number], required: true, validate: v => v.length > 0 },
    lead_II: { type: [Number], required: true, validate: v => v.length > 0 },
    lead_III: { type: [Number], required: true, validate: v => v.length > 0 },
    lead_aVR: { type: [Number], required: true, validate: v => v.length > 0 },
    lead_aVL: { type: [Number], required: true, validate: v => v.length > 0 },
    lead_aVF: { type: [Number], required: true, validate: v => v.length > 0 }
  },
  heart_rate: {
    bpm: { type: Number, required: true },
    max_bpm: { type: Number, required: true },
    min_bpm: { type: Number, required: true },
    average_bpm: { type: Number, required: true }
  },
  intervals: {
    p_wave_duration: { type: Number, required: true },
    pr_interval: { type: Number, required: true },
    qrs_duration: { type: Number, required: true },
    qt_interval: { type: Number, required: true },
    st_segment: { type: Number, required: true }
  },
  diagnosis: {
    rhythm: { type: String, required: true },
    abnormalities: [
      {
        abnormality_type: { type: String, required: true }, // Changed 'type' to avoid conflict
        severity: { type: String, required: true },
        description: { type: String, required: true }
      }
    ]
  },
  device_info: {
    device_id: { type: String, required: true },
    device_model: { type: String, required: true },
    sampling_rate: { type: Number, required: true },
    leads_count: { type: Number, required: true }
  }
});

const ECG = mongoose.model("ECGReport", ECGSchema);

module.exports = ECG;
