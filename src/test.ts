import test from "ava";
import { Product } from "./index";
import { User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});
test("Testeo la clase User y sus métodos", (t) => {
  const usuarioUno = new User("Pepe");
  const productoUno = new Product("Cebolla", 1500);
  usuarioUno.addProduct(productoUno);
  t.is(usuarioUno.name, "Pepe");
  t.is(usuarioUno.products[0].name, "Cebolla");
  t.is(usuarioUno.products[0].price, 1500);
});
