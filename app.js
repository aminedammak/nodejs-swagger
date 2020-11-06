const express = require("express");
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = process.env.PORT || 5000;
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: "Nodejs app documented with swagger", // Title (required)
    version: "1.0.0", // Version (required)
    description: "A sample API", // Description (optional)
    contact: {
      name: "Amine Dammak",
    },
  },
};
const swaggerOptions = {
  swaggerDefinition,
  apis: ["app.js"], // <-- not in the definition, but in the options
};
const swaggerDocument = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Routes
/**
 * @swagger
 * /customers:
 *  get:
 *      description:
 *          Use to request all customers
 *      responses:
 *          '200':
 *              description: A successfull response
 */
app.get("/customers", (req, res) => {
  res.send("Customer results");
});

/**
 * @swagger
 * /customer:
 *  put:
 *      description:
 *          Use to update a customer
 *      responses:
 *          '201':
 *              description: A successfull updated customer
 */
app.put("/customer", (req, res) => {
  res.send("Customer updated successfully");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
