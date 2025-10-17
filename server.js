import express from "express";
import productsRouter from "./routes/products.js";
import ordersRouter from "./routes/orders.js";
import customersRouter from "./routes/customers.js";

const app = express();
app.use(express.json());

// Routes
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/customers", customersRouter);

// Default route
app.get("/", (req, res) => {
  res.send("🛒 Welcome to the E-Commerce API");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
