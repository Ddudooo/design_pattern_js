import PizzaBuilder from '@/creational/builder/pizza.builder'

console.log('create Pizza with Builder Pattern')

const pizzaBuilder = new PizzaBuilder()

const pizza = pizzaBuilder.cheeze('치즈').topping('토핑').build()

console.log(pizza.describe())
