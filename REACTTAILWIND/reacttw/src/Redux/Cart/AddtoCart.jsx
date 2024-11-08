import React from 'react'
import { Link } from 'react-router-dom';

export const AddtoCart = () => {
  const products = [
    {
      id: 1,
      name: "Mi 11X",
      price: 24999,
      description: "A powerful smartphone with a sleek design and advanced features.",
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/8/o/-original-imaggcz7bfchgq8g.jpeg?q=70&crop=true"
    },
    {
      id: 2,
      name: "JBL TUNE 760 NC",
      price: 4999,
      description: "High-quality wireless headphones with noise cancellation and long battery life.",
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/y/e/g/-original-imagrh3th8hhnvf4.jpeg?q=70&crop=false"
    },
    {
      id: 3,
      name: "Acer Nitro V 15",
      price: 79999,
      description: "A powerful laptop designed for gaming and professional performance.",
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/2/p/v/anv15-51-gaming-laptop-acer-original-imah3myfh66y6azy.jpeg?q=70&crop=false"
    },
    {
      id: 4,
      name: "Redmi Earbuds 3 Pro",
      price: 1999,
      description: "True wireless earbuds with excellent sound quality and battery life.",
      imageUrl: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674050332/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/243016_0_i0dqgt.png"
    },
    {
      id: 5,
      name: "Xpulse 200 4V Pro",
      price: 145000,
      description: "A rugged, off-road motorcycle designed for adventure and reliability.",
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/motorcycle/s/m/j/-original-imah57hwhzmbywsr.jpeg?q=70&crop=false"
    },
    {
      id: 6,
      name: "SMK Stellar Rainstar Helmet",
      price: 3499,
      description: "A stylish and safe helmet with advanced ventilation and comfortable fit.",
      imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/helmet/8/0/e/-original-imagsjvhhzrz7zfe.jpeg?q=70&crop=false"
    }
  ];


  return (
    <div>
      <div className='nav sticky top-0 z-10 flex justify-between py-6 bg-white pr-8'>
        {/* Logo */}
        <div className='navhead bg-pink flex'>
          <Link to="/">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              width="160"
              height="40"
              title="Flipkart"
            />
          </Link>
        </div>
        {/* Search */}
        <div className="flex items-center bg-[#f0f5ff]">
          <button className="p-2" type="submit" aria-label="Search for Products, Brands and More" title="Search for Products, Brands and More">
            <svg width="24" height="24" className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Search Icon</title>
              <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </svg>
          </button>
          <input className="bg-[#f0f5ff] w-[500px] border border-none" type="text" title="Search for Products, Brands and More" name="q" autocomplete="off" placeholder="Search for Products, Brands and More" value="" />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 items-center">

          {/* Login */}
          <Link to="" className="flex items-center space-x-1" title="Login">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
              alt="Login"
              className="w-6 h-6"
            />
            <span className="text-sm">Login</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="flex items-center space-x-1" title="Cart">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              alt="Cart"
              className="w-6 h-6"
            />
            <span className="text-sm">Cart</span>
          </Link>

          {/* Become a Seller */}
          <Link to="" className="flex items-center space-x-1" title="Become a Seller">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt="Become a Seller"
              className="w-6 h-6"
            />
            <span className="text-sm">Become a Seller</span>
          </Link>

          {/* More Dropdown */}
          {/* <div className="relative group">
                        <Link to="#" className="flex items-center" title="More options">
                            <img
                                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                                alt="More"
                                className="w-6 h-6"
                            />
                        </Link>
                        <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-52 hidden group-hover:block">
                            <li>
                                <Link to="/helpcentre" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                    24x7 Customer Care
                                </Link>
                            </li>
                            <li>
                                <Link to="/mobile-apps" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                    Download App
                                </Link>
                            </li>
                        </ul>
                    </div> */}
        </div>
      </div>


      {/* Cart*/}
      <div className='px-8'>
        <h2 className="text-2xl font-bold mt-10 mb-4">Shopping Cart</h2>

        <div>
          {products.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <button
                
                className="px-4 py-2 rounded-lg text-red-500 hover:bg-gray-100">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
