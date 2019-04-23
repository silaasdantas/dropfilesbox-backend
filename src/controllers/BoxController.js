const Box = require("../models/Box");

class BoxController {
  //store => metodo salvar um objeto de Box
  async store(req, res) {
    const box = await Box.create(req.body);
    return res.json(box);
  }

  // populate -> realiza uma relacionamento
  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      options: { sort: { createdAt: -1 } } //-1 ordena decrecente
    });
    return res.json(box);
  }
}
//new => é para acessar a intancia da classe
module.exports = new BoxController();
