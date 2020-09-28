import ProductBuilder from '../builders/ProductBuilder';

class ProductFactory {
  async makeProduct(product) {
    try {
      ProductBuilder
        .setNome(product.nome)
        .setCategoria(product.categoria)
        .setAtivo(product.ativo)
        .setValor(product.valor)

      return ProductBuilder;
    } catch (err) {
      console.log("Exception from ProductFactory.js/makeProduct: " + err);
    }
  }
}

export default new ProductFactory();
