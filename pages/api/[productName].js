import getProductList from "../../lib/getProducts";

async function handler(req, res) {
  if (req.method === "GET") {
    const { productName } = req.query;

    if (productName.trim().length <= 3) {
      res.status(422).json({ message: "Invalid input length" });
      return;
    }

    try {
      const firstLetters = productName.toLowerCase().slice(0, 4);

      const allProducts = await getProductList();

      const filteredProducts = allProducts.filter(productItem =>
        productItem.name.toLowerCase().includes(firstLetters)
      );

      res.status(200).json({ message: "success", data: filteredProducts });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }

    return;
  }
}

export default handler;
