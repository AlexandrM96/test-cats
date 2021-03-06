import React from 'react';
import Header from '../src/components/Header/Header';
import './App.css';
import Card from '../src/components/Card/Card';
import product from '../src/data/products.json';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__cards-display">
                <Card
                    flavorName={product.flavors.foieGras.flavorName}
                    flavorDescription={product.flavors.foieGras.flavorDescription}
                    weight={product.weight[0]}
                    isAvailable={product.flavors.foieGras.isAvailable}
                />
                <Card
                    flavorName={product.flavors.fish.flavorName}
                    flavorDescription={product.flavors.fish.flavorDescription}
                    weight={product.weight[1]}
                    isAvailable={product.flavors.fish.isAvailable}
                />
                <Card
                    flavorName={product.flavors.chicken.flavorName}
                    flavorDescription={product.flavors.chicken.flavorDescription}
                    weight={product.weight[2]}
                    isAvailable={product.flavors.chicken.isAvailable}
                />
            </div>
        </div>
    );
}

export default App;
