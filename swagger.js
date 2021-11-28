module.exports = (app) => {
  const swaggerJsDoc = require("swagger-jsdoc");
  const swaggerUI = require("swagger-ui-express");

  const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.3",
      // swagger: "2.0",
      info: {
        title: "Travel Mappin Web",
        version: "1.0.0",
        description:
          "This is an APIs for Travel Mappin Web<br /> Made by <b>18521000 - TruongThiNgocLinh</b>",
      },
    },
    apis: ["./docs/document.js"],
  };

  // Options for customize Swagger Page
  const options = {
    customCss:
      ".swagger-ui .topbar { display: none } .scheme-container {display:none}",
  };

  // Swagger Setup
  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  // Render Swagger Page
  app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));
};
