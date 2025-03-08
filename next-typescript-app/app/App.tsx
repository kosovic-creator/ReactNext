/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


import React from 'react'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

const App = () => {
    return (
        <div>
            <Header />
            <Meni />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header>
             <p className=' border-solid text-4xl bg-amber-600 rounded-lg shadow-lg text-white'>Meni</p>
        </header>

    )
}

function Meni() {
    return (
        <div className='flex flex-col '>
            < Pizza pizzaName="Pizza Margarita" pizzaPrice={5}  pizzaDodaci="sir" pizzaVeličina='xl'/>
            <Pizza pizzaName="Pizza Fungi" pizzaPrice={15}  pizzaDodaci="pelat" pizzaVeličina='xl'/>


        </div>
    )
}


interface PizzaProps {
    pizzaName: string;
    pizzaPrice: number;
    pizzaDodaci: string;
pizzaVeličina?: string;
}

function Pizza({ pizzaName, pizzaPrice, pizzaDodaci, pizzaVeličina }: PizzaProps) {

    return (
        <ul className='p-2.5 bg-emerald-600 rounded-lg shadow-lg text-white'>
            <li className='border-solid border-2 border-white rounded-lg padding-2.5 m-3'>pica name :{pizzaName}</li>
            <li className='border-solid border-2 border-white rounded-lg padding-2.5 m-3'>cijena: {pizzaPrice}</li>
            <li className='border-solid border-2 border-white rounded-lg padding-2.5 m-3'>dodaci: {pizzaDodaci}</li>
            <li className='border-solid border-2 border-white rounded-lg padding-2.5 m-3'>veličina: {pizzaVeličina}</li>

        </ul>

    )
}
function Footer() {
    const otvoreno=7;
    const zatvoreno=22
    const vrijeme = new Date().getHours()
    return (
        <p className='m-0 border-solid border-2 text-xl bg-amber-800 rounded-lg shadow-lg text-white'>Objeklat je {vrijeme > 7 && vrijeme < 24 ? 'otvoren' : 'zatvoren'}</p>
    )

}

export default App