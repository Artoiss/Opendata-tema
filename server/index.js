const express = require("express");
const axios = require("axios");
const app = express();
const bodyParser = require("body-parser");

const config = require("./config");
//app.use(express.static('build'))
app.use(bodyParser.json());

// const getProductById = axios.get(
//   `https://${API_KEY}:${PASSWORD}${API_URL}/products/${product_id}.json`
// );

app.get("/api/order/:id", (req, response) => {
  const id = req.params.id;
  getOrder(id)
    .then(res => {
      const orderData = parseOrderData(res.data);
      response.json(orderData);
    })
    .catch(err => response.status(500).send({ error: err }));
});

app.get("/api/product/:id", (req, response) => {
  const id = req.params.id;
  getProduct(id)
    .then(res => {
      console.log(res.data);
      const productData = parseProductData(res.data);
      console.log("PRRRRRDATA", productData);
      response.json(productData);
    })
    .catch(err => response.status(500).send({ error: err }));
});

app.get("/api/product_image/:id", (req, response) => {
  const id = req.params.id;
  const image_id = req.query.imageId;
  getImage(id, image_id)
    .then(res => {
      console.log(res.data);
      const imageData = parseImageData(res.data);
      console.log("IMGGGDATA", imageData);
      response.json(imageData);
    })
    .catch(err => response.status(500).send({ error: err }));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
const getOrder = id =>
  axios.get(
    `https://${config.API_KEY}:${config.PASSWORD}${config.API_URL}/orders/${id}.json`
  );

const getProduct = id =>
  axios.get(
    `https://${config.API_KEY}:${config.PASSWORD}${config.API_URL}/products/${id}.json`
  );

const getImage = (id, image_id) =>
  axios.get(
    `https://${config.API_KEY}:${config.PASSWORD}${config.API_URL}/products/${id}/images/${image_id}}.json`
  );

const parseOrderData = data => {
  const order = data.order;
  const name = order.shipping_address.first_name;
  const product_id = order.line_items.map(item => item.product_id);
  const title = order.line_items.map(item => item.title);
  return {
    first_name: name,
    product_id: product_id,
    title: title
  };
};

const parseProductData = data => {
  const product = data.product;
  const image_id = product.variants[0].image_id;
  const size = product.variants[0].option1;
  const color = product.variants[0].option2;

  return {
    image_id,
    size,
    color
  };
};

const parseImageData = data => {
  const image = data.image;
  const image_url = image.src;
  return {
    image_url
  };
};