import { useEffect, useState } from "react";
import "./topSales.css";
import Cards from "../cards/Cards";

const TopSales = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=12")
            .then(response => response.json())
            .then(data => {
                if (data.products) {
                    setProducts(data.products);
                }
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <section className='arrivals'>
            <div className="container">
                <div className="arrivals__wrapper">
                    <h2 className='arrivals__title'>
                        top selling
                    </h2>
                    <div className='card__wrapper'>
                        {products.slice(8, 12).map(product => (
                            <Cards key={product.id} product={product} />
                        ))}
                    </div>
                    <button className='arrivals__btn'>View All</button>
                </div>
            </div>
        </section>
    );
}

export default TopSales;
