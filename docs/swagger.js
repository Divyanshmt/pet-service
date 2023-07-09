const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");

const router = express.Router();

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Pet API",
      version: "1.0.0",
      description: "API documentation for managing pets",
    },
    paths: {
      "/pets": {
        get: {
          summary: "Get all pets",
          description: "Retrieve a list of all pets",
          responses: {
            200: {
              description: "OK",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
        post: {
          summary: "Create Pet",
          description: "Create a entry of pet",
          responses: {
            200: {
              description: "OK",
            },
            500: {
              description: "Internal Server Error",
            },
          },

          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/createPet",
                },
              },
            },
          },
        },
      },
      "/pets/{id}": {
        put: {
          summary: "Update Pet by ID",
          description: "Update an existing pet by ID",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID of the pet to update",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/updatePet",
                },
              },
            },
          },
          responses: {
            200: {
              description: "OK",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
        delete: {
          summary: "delete Pet by ID",
          description: "Update an existing pet by ID",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID of the pet to update",
            },
          ],

          responses: {
            200: {
              description: "OK",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
    },
    components: {
      schemas: {
        createPet: {
          type: "object",
          properties: {
            petName: {
              type: "string",
            },
            petBreed: {
              type: "string",
            },
            petType: {
              type: "string",
            },
          },
        },
        updatePet: {
          type: "object",
          properties: {
            petName: {
              type: "string",
            },
            petBreed: {
              type: "string",
            },
            petType: {
              type: "string",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/petRoutes.js"],
};

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve the Swagger API documentation
router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
