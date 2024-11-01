// src/components/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; 
const Dashboard = () => {
  const navigate = useNavigate();

  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      price: 800,
      img: "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg"
    },
    {
      id: 2,
      name: "Pepperoni",
      price: 900,
      img: "https://alfredough.ae/wp-content/uploads/2023/06/pepperoni-pizza.jpeg"
    },
    {
      id: 3,
      name: "BBQ Chicken",
      price: 1000,
      img: "https://arteflame.com/cdn/shop/articles/BBQ_Chicken_Pizza.webp?v=1723405402&width=1600"
    },
    {
      id: 4,
      name: "Vegetarian",
      price: 700,
      img: "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg"
    },
    {
      id: 5,
      name: "Hawaiian",
      price: 1100,
      img: "https://images.food52.com/BbtHyaS4UtF8fJVasV_uaYK_4WA=/fit-in/1200x1200/b68610b3-cc3e-4812-af2c-449c68c35273--2018-1127_ken-forkish-hawaiian-pizza-genius_3x2_rocky-luten_003_v2.jpg"
    },
    {
      id: 6,
      name: "Four Cheese",
      price: 1200,
      img: "https://www.theoriginaldish.com/wp-content/uploads/2019/09/Four-Cheese-Corn-Pizza-2-1024x819.jpg"
    },
    {
      id: 7,
      name: "Buffalo Chicken",
      price: 1000,
      img: "https://www.thespruceeats.com/thmb/bFLeGj1LnKO9ow7XIcddeRovVQU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-buffalo-chicken-pizza-8580296-hero-01-45dad919df034cc3bf73d774250e44d2.jpg"
    },
    {
      id: 8,
      name: "Meat Lovers",
      price: 1300,
      img: "https://www.thecookierookie.com/wp-content/uploads/2023/09/meat-lovers-pizza-recipe-3.jpg"
    },
    {
      id: 9,
      name: "Supreme",
      price: 1200,
      img: "https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png"
    },
    {
      id: 10,
      name: "Pesto",
      price: 900,
      img: "https://myquietkitchen.com/wp-content/uploads/2019/06/vegan-pesto-pizza-with-potato.jpg"
    },
    {
      id: 11,
      name: "Spinach & Feta",
      price: 1000,
      img: "https://plantbasedwithamy.com/wp-content/uploads/2022/07/20220705_NatureNate070522_0060-1024x731.jpg.webp"
    },
    {
      id: 12,
      name: "Tandoori Chicken",
      price: 1200,
      img: "https://tastytango.blog/wp-content/uploads/2023/07/koolgurl._A_close-up_high_quality_photo_of_a_Tandoori_Fusion_De_2028d66f-ef2d-46ba-8ebd-41491e80ba4b.jpg"
    },
    {
      id: 13,
      name: "Mexican",
      price: 1100,
      img: "https://veganheaven.org/wp-content/uploads/2019/12/Mexican-Pizza-15-299x299.jpg"
    },
    {
      id: 14,
      name: "Seafood",
      price: 1100,
      img: "https://www.acouplecooks.com/wp-content/uploads/2023/10/Seafood-Pizza-004.jpg"
    },
    {
      id: 15,
      name: "Bacon & Egg",
      price: 1300,
      img: "https://www.wyseguide.com/wp-content/uploads/2023/03/Egg-Bacon-Breakfast-Pizza-11.jpg"
    },
    {
      id: 16,
      name: "Italian Sausage",
      price: 1100,
      img: "https://www.allrecipes.com/thmb/y0k7yViYaQ2iNocdt-AJm_Ku_qQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/White-Pizza-ae5ff40f51244bac877769ae0bd0718b.jpg"
    },
    {
      id: 17,
      name: "Mushroom",
      price: 900,
      img: "https://us.gozney.com/cdn/shop/articles/Jhy_Coulter_Italian_Sausage_Pizza_-_Large_d602d161-4b91-4a60-b139-0b1718a795fb.jpg?v=1668773018"
    },
    {
      id: 18,
      name: "Chicken Alfredo",
      price: 1200,
      img: "https://therecipecritic.com/wp-content/uploads/2022/09/chickenalfredopizza-1.jpg"
    },
    {
      id: 19,
      name: "Sicilian",
      price: 1400,
      img: "https://www.seriouseats.com/thmb/uWam_1G3L2QhYeARM_9W_OY6jD4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__05__20160503-spicy-spring-pizza-recipe-37-2be36645b22a4ef3b3545bdb6ab2ad61.jpg"
    },
    {
      id: 20,
      name: "Cheeseburger Pizza",
      price: 1300,
      img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2016/9/22/0/FNK_Cheeseburger-Pizza_s4x3.jpg"
    },
    {
      id: 21,
      name: "Greek",
      price: 11,
      img: "https://jimcooksfoodgood.com/wp-content/uploads/2022/12/NEw-ENgland-Greek-pizza-scaled.jpg"
    },
    {
      id: 22,
      name: "Philly Cheese Steak",
      price: 14,
      img: "https://tipbuzz.com/wp-content/uploads/Philly-cheesesteak-Pizza-5-Thumb.jpg"
    },
    {
      id: 23,
      name: "White Pizza",
      price: 1000,
      img: "https://veenaazmanov.com/wp-content/uploads/2020/05/White-Pizza-Recipe-Cheese-Pizza-with-White-Sauce4.jpg"
    },
    {
      id: 24,
      name: "Bacon & Mushroom",
      price: 1200,
      img: "https://www.grandecheese.com/wp-content/uploads/2020/04/wild-mushroom-applewood-bacon-pizza.jpg"
    },
    {
      id: 25,
      name: "Shrimp Scampi",
      price: 1500,
      img: "https://www.cookingmamas.com/wp-content/uploads/2017/02/Shrimp-Scampi-Pizza-C.jpg"
    },
    {
      id: 26,
      name: "Eggplant Parm",
      price: 1200,
      img: "https://images.food52.com/42RgXhNa1M0ZXDt4otexc1UIM34=/750x500/75bfc3a6-ebc3-4406-8611-8e25ea5d0a47--eggplant_parmesan_pizza.jpg"
    },
    {
      id: 27,
      name: "Pineapple & Ham",
      price: 1100,
      img: "https://pennysrecipes.com/wp-content/uploads/2020/05/ham-pineapple-pizza.jpg"
    },
    {
      id: 28,
      name: "Garlic Chicken",
      price: 1000,
      img: "https://i0.wp.com/ketchumkitchen.com/wp-content/uploads/2018/07/Garlic-Chicken-Pizza-.jpg?resize=1000%2C667&ssl=1"
    },
    {
      id: 29,
      name: "BBQ Bacon",
      price: 1300,
      img: "https://thefancypantskitchen.com/wp-content/uploads/2022/04/BARBECUE-BACON-PIZZA2.jpg"
    },
    {
      id: 30,
      name: "Truffle Mushroom",
      price: 1500,
      img: "https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202420/0059/img89l.jpg"
    }
  ];

  const handleAddToCart = (pizza) => {
    navigate("/cart", {
      state: { selectedPizza: pizza }
    });
  };

  return (
    <div className="dashboard">
      <h1>Our Pizzas</h1>
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <div className="pizza-card" key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>₹{pizza.price}</p> {/* Updated price display to INR */}
            <div
              className="add-to-cart-button"
              onMouseEnter={(e) => e.currentTarget.classList.add("show")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("show")}
              onClick={() => handleAddToCart(pizza)}
            >
              Add to Cart
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
