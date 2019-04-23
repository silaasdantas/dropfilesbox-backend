const mongoose = require("mongoose");

const Box = mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
  },
  {
    //timestamps => adiciona as colunas de: createdAt, updatedAt
    timestamps: true
  }
);

module.exports = mongoose.model("Box", Box);
