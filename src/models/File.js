const mongoose = require("mongoose");

const File = mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    path: {
      type: String,
      require: true
    }
  },
  {
    //timestamps => adiciona as colunas de: createdAt, updatedAt
    timestamps: true,

    //toda vez que meu arquivo for convertido em Objeto ou JSON ele colocara campo virtual automaticamente
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

//Aqui crio um campo virtual
//path -> esta referencia o variavel path do Schema File
File.virtual("url").get(function() {
  const url = process.env.URL || http://localhost:3333

  return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);
