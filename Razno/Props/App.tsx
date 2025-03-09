
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'
import { imageOptimizer } from 'next/dist/server/image-optimizer';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import React from 'react'
import "./index.css";
import Image from 'next/image';

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
        <div className='container'>
            <Header />
            <Meni />
            <Footer />
        </div>
    )

}
const style = { 'color': 'red', 'backgroundColor': 'yellow' }
function Header() {
    return (
        <header className="header">
            <h1 style={style}>Meni</h1>
        </header>

    )
}

function Meni() {
    // const pice: { name: string; ingredients: string; price: number; photoName: string; soldOut: boolean }[] = [];
    const pice = pizzaData
    const brojPica = pice.length

    const određena = pice.filter(pizza => pizza.name === 'Pizza Spinaci')
    console.log(određena);

    return (
        <main className="menu">
            {brojPica > 0 ? (
                <div >
                    <ul className="pizzas">
                        {pice.map((pizza, index) => (
                            <Pizza
                                key={index}
                                pizzaName={pizza.name}
                                pizzaPrice={pizza.price}
                                pizzaDodaci={pizza.ingredients}
                                pizzaVeličina="large"
                                pizzaProdato={pizza.soldOut}
                                pizzaSlika={pizza.photoName}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Nema pica trenutno</p>
            )}
            {/* <button type="reset" onClick={() => console.log(određena)}>Spinaci</button> */}
        </main>

    );
}


interface PizzaProps {
    pizzaName: string;
    pizzaPrice: number;
    pizzaDodaci: string;
    pizzaVeličina?: string;
    pizzaProdato: boolean;
    pizzaSlika: string;

}

function Pizza({ pizzaName, pizzaPrice, pizzaDodaci, pizzaVeličina, pizzaProdato, pizzaSlika }: PizzaProps) {

    return (
        <li className={`pizza ${pizzaProdato ? "sold-out" : ""}`}>
            <Image src="/pizzas/focaccia.jpg" alt="pica" width={500} height={500} />

            {/* <Image src="/my-image.png" alt="my-image" width={500} height={500} /> */}
            <div>
                <h3 className='text-gray-500'>{pizzaName}</h3>
                <p>{pizzaDodaci}</p>

                {pizzaProdato ? (
                    <span className='text-red-500' >{pizzaName} nije na stanju</span>
                    //   <span>NIJE ZA PRUDŽBINU</span>
                ) : (
                    <span>{pizzaPrice}</span>
                )}
            </div>
        </li>
    );
}
function Footer() {
    const otvoreno = 7;
    const zatvoreno = 22;
    const vrijeme = new Date().getHours();
    return (
        <footer className="Footer">
            <Order />
            <p className='flex justify-center items-center' >Objeklat je {vrijeme > 6 && vrijeme < 24 ? 'otvoren' : 'zatvoren'} </p>
        </footer>
    );
}

function Order() {
    return (
        <div className='order'>
            <button className='btn' type="button">Naruči</button>
        </div>
    );
}

export default App