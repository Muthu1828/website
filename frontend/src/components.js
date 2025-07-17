import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Star, ChefHat, Users, Award } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-amber-900 shadow-lg' : 'bg-amber-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white">
            <div className="text-center">
              <h1 className="text-xl font-bold">Belgian Waffle Works</h1>
              <p className="text-xs text-amber-200">Breakfast & Lunch in Lake Arrowhead</p>
            </div>
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-amber-200 transition-colors ${
                location.pathname === '/' ? 'text-amber-200' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`text-white hover:text-amber-200 transition-colors ${
                location.pathname === '/menu' ? 'text-amber-200' : ''
              }`}
            >
              Menu
            </Link>
            <Link
              to="/history"
              className={`text-white hover:text-amber-200 transition-colors ${
                location.pathname === '/history' ? 'text-amber-200' : ''
              }`}
            >
              Our History
            </Link>
            <Link
              to="/contact"
              className={`text-white hover:text-amber-200 transition-colors ${
                location.pathname === '/contact' ? 'text-amber-200' : ''
              }`}
            >
              Contact
            </Link>
            <Link
              to="/shop"
              className={`text-white hover:text-amber-200 transition-colors ${
                location.pathname === '/shop' ? 'text-amber-200' : ''
              }`}
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1723822712433-cd24c724f134?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxsYWtlJTIwcmVzdGF1cmFudCUyMGRvY2tzaWRlfGVufDB8fHx8MTc1MjczMTE5N3ww&ixlib=rb-4.1.0&q=85)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Restaurant dockside in Lake Arrowhead Village
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
        >
          We are a family owned & operated restaurant, serving Lake Arrowhead for 40+ years! Come join us in Lake Arrowhead Village for breakfast, including 17 specialty waffles, and wide selections of lunch!
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Breakfast Menu
          </Link>
          <Link
            to="/menu"
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Lunch Menu
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

// Food Gallery Component
const FoodGallery = () => {
  const foodImages = [
    {
      src: 'https://images.unsplash.com/photo-1563009390-639e10013c92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Belgian Waffle with toppings'
    },
    {
      src: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Fresh Belgian waffles with syrup'
    },
    {
      src: 'https://images.pexels.com/photos/4109466/pexels-photo-4109466.jpeg',
      alt: 'Waffles with berries'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {foodImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// History Component
const History = () => {
  return (
    <section className="py-20 bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1650004703329-a3c7afcdc49b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85"
              alt="Belgian Waffle Works Logo"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our History</h2>
            <p className="text-lg mb-4">
              Serving Waffles Dockside at Lake Arrowhead Village since 1982.
            </p>
            <p className="text-lg mb-6">
              We've become one of the iconic businesses here in the Lake Arrowhead Village.
            </p>
            <p className="text-lg mb-8">
              Visitors from throughout California and around the world visit the Belgian Waffle Works for their wonderful meals and delicious waffles.
            </p>
            <Link
              to="/history"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Eric Z.",
      rating: 5,
      text: "Seriously though, these are hands down the best Belgian Waffles I have ever tasted. This was the place took my mom there when I told her I was in love with her. It was perfect here to my brand new girlfriend and she was so happy immediately and we love coming here every few months so that it stays special in our memorable every time. Love this place!"
    },
    {
      name: "Kat F.",
      rating: 5,
      text: "So so so good! You got to sit by the lake with a magnificent view, I ordered a classic waffle but asked for whip cream and chocolate. Syrup on top and oh my gosh it was so good! Very close to the Lake Arrowhead Resort & Spa. Also located in the village for some cool shopping around afterwards!"
    },
    {
      name: "Alex S.",
      rating: 5,
      text: "Great spot for lunch with nice view of the lake. Extensive menu, all good. Had their famous beef burger. I recommended by my server to cook it medium a house specialty. So good."
    },
    {
      name: "Christine F.",
      rating: 5,
      text: "Every experience here has been wonderful over the past 8 years or so. The food is great and it is fun to sit next to the lake. It is always crowded because it has the best view and the food can be long and it is worth it. Great memories here."
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-amber-900 mb-12"
        >
          From Our Customers
        </motion.h2>
        
        <p className="text-center text-lg text-amber-800 mb-12">
          Established in 1982, we've become a prominent business in the Lake Arrowhead. Hear what visitors from around the world have to say about our wonderful meals and delicious waffles!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">{testimonial.text}</p>
              <p className="font-semibold text-amber-900">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section className="py-20 bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Connect With Us</h2>
            <p className="text-lg mb-8">
              For parties of 30 or more please email us at info@belgianwaffle.com
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-amber-400" />
                <span className="text-lg">(909) 337-5222</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-amber-400" />
                <span className="text-lg">info@belgianwaffle.com</span>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-amber-400 mt-1" />
                <div>
                  <p className="text-lg">28200 State Hwy 189 Suite E-150</p>
                  <p className="text-lg">Lake Arrowhead, CA 92352</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-amber-400 mt-1" />
                <div>
                  <p className="text-lg font-semibold">Hours</p>
                  <p>Monday-Friday 8am-3pm</p>
                  <p>Saturday-Sunday 8am-4pm</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/17150200/pexels-photo-17150200.jpeg"
              alt="Lake Arrowhead Village Map"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Belgian Waffle Works</h3>
            <p className="text-amber-200">
              Family owned & operated restaurant serving Lake Arrowhead for 40+ years.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-amber-200 hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/history" className="text-amber-200 hover:text-white transition-colors">Our History</Link></li>
              <li><Link to="/contact" className="text-amber-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/shop" className="text-amber-200 hover:text-white transition-colors">Shop</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-amber-200 mb-2">(909) 337-5222</p>
            <p className="text-amber-200 mb-2">info@belgianwaffle.com</p>
            <p className="text-amber-200">28200 State Hwy 189 Suite E-150<br />Lake Arrowhead, CA 92352</p>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">&copy; 2025 Belgian Waffle Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Menu Page Component
const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const menuItems = {
    breakfast: {
      waffles: [
        { name: "Breakfast Belgian", description: "Our classic Belgian Waffle. Dusted with powdered sugar and served with warm maple syrup and melted butter on the side.", price: "$12.95" },
        { name: "7-Grain Belgian", description: "Our 7-grain Belgian Waffle", price: "$13.95" },
        { name: "Little Breakfast", description: "Belgian Waffle, two eggs any style, two applewood smoked bacon slices or sausage patties.", price: "$16.95" },
        { name: "Brussels Belgian", description: "Monte Cristo style waffle. Stuffed with ham, turkey and swiss cheese. Served with strawberry preserves and cream cheese.", price: "$17.95" },
        { name: "Benedict Belgian", description: "A waffle layered with two poached eggs, Canadian bacon, and hollandaise sauce and black olives. Vegetarian Option: Substitute Avocado or Tomato.", price: "$18.95" },
        { name: "Strawberry-Banana Royal", description: "Belgian Waffle topped with fresh strawberries, sliced bananas and whipped cream.", price: "$16.95" },
        { name: "Peach Melba Belgian", description: "Belgian Waffle topped with sliced peaches, raspberry sauce and whipped cream.", price: "$16.95" },
        { name: "Apples Normandy Belgian", description: "Belgian Waffle topped with warm sliced apples, raisins, walnuts, cinnamon spice and whipped cream.", price: "$16.95" },
        { name: "Chicken & Waffle", description: "Belgian Waffle and fried breaded chicken tenderloin fritters served with a warm maple syrup blend.", price: "$18.95" }
      ],
      specials: [
        { name: "Belgian Breakfast", description: "Two eggs any style, with a choice of bacon, ham or sausage, country potatoes, grilled tomato and a half Belgian waffle.", price: "$16.95" },
        { name: "Country Breakfast", description: "Two eggs any style with bacon, ham or sausage, country potatoes, grilled tomato and a biscuit.", price: "$14.95" },
        { name: "Mountain Breakfast", description: "Two split biscuits topped with three scrambled eggs and country sausage gravy.", price: "$14.95" }
      ]
    },
    lunch: [
      { name: "Club Sandwich", description: "Sliced ham, turkey breast, and crisp applewood bacon on toasted bread.", price: "$14.95" },
      { name: "Tuna Melt", description: "White albacore tuna and Swiss cheese on grilled rye bread.", price: "$13.95" },
      { name: "Cattlemen's Pulled Pork Sandwich", description: "Barbecued pulled pork with Cattlemen's barbecue sauce and Monterey Jack cheese on a toasted Hawaiian bun.", price: "$15.95" },
      { name: "Hamburger", description: "A traditional grilled Angus beef patty burger, with options to add applewood smoked bacon or cheese.", price: "$13.95" },
      { name: "Cobb Salad", description: "Garden fresh greens, turkey, bacon, ham, blue cheese crumbles, tomato, egg, and sliced olives.", price: "$16.95" },
      { name: "Lemon Chicken Salad", description: "Grilled marinated chicken breast served on garden fresh greens with corn, avocado, cucumber, tomatoes, red onions, and shredded carrots, with lemon ranch dressing on the side.", price: "$15.95" }
    ],
    kids: [
      { name: "Kid's Breakfast", description: "A half Belgian waffle, one egg, and choice of sausage patty or applewood smoked bacon.", price: "$8.95" },
      { name: "Grilled Cheese", description: "Served with waffle fries or fruit.", price: "$7.95" },
      { name: "Half Turkey or Ham Sandwich", description: "Served with lettuce, tomato, and mayonnaise served with waffle fries or fruit.", price: "$8.95" },
      { name: "Peanut Butter & Jelly Sandwich", description: "Served with waffle fries or fruit.", price: "$6.95" }
    ]
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      
      <div className="pt-20">
        <div
          className="h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1719837918315-6d81597c8673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxsYWtlJTIwcmVzdGF1cmFudCUyMGRvY2tzaWRlfGVufDB8fHx8MTc1MjczMTE5N3ww&ixlib=rb-4.1.0&q=85)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Come join us in Lake Arrowhead Village for breakfast, including 17 specialty waffles and lunch!
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-2">
              <button
                onClick={() => setActiveTab('breakfast')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === 'breakfast'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-600 hover:bg-amber-50'
                }`}
              >
                Breakfast/Waffles
              </button>
              <button
                onClick={() => setActiveTab('lunch')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === 'lunch'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-600 hover:bg-amber-50'
                }`}
              >
                Lunch
              </button>
              <button
                onClick={() => setActiveTab('kids')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === 'kids'
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-600 hover:bg-amber-50'
                }`}
              >
                Kid's Menu
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            {activeTab === 'breakfast' && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-amber-900 mb-6">Waffles</h2>
                  <p className="text-amber-700 mb-6">Waffles Served All Day!</p>
                  <p className="text-amber-600 mb-8">
                    Our famous Belgian waffles are dusted with powdered sugar and served with warm maple syrup and melted butter on the side.
                  </p>
                  <p className="text-sm text-amber-600 mb-8">
                    Substitute 7-Grain Waffles when available
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {menuItems.breakfast.waffles.map((item, index) => (
                      <div key={index} className="border-b border-amber-200 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-amber-900">{item.name}</h3>
                          <span className="text-amber-600 font-bold">{item.price}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-amber-900 mb-6">Morning Specials</h2>
                  <p className="text-sm text-amber-600 mb-8">
                    Until sold out. Egg Substitute or Whites available upon request.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {menuItems.breakfast.specials.map((item, index) => (
                      <div key={index} className="border-b border-amber-200 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-amber-900">{item.name}</h3>
                          <span className="text-amber-600 font-bold">{item.price}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lunch' && (
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Lunch Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems.lunch.map((item, index) => (
                    <div key={index} className="border-b border-amber-200 pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-amber-900">{item.name}</h3>
                        <span className="text-amber-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'kids' && (
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Kid's Menu</h2>
                <p className="text-amber-700 mb-6">Age 12 and under only, please</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems.kids.map((item, index) => (
                    <div key={index} className="border-b border-amber-200 pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-amber-900">{item.name}</h3>
                        <span className="text-amber-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">Drinks</h3>
                  <p className="text-amber-700">milk or soda. (Refills on soda.)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// History Page Component
const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      
      <div className="pt-20">
        <div
          className="h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/30774356/pexels-photo-30774356.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our History</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              A legacy of serving the Lake Arrowhead community for over 40 years
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h2>
              
              <p className="text-gray-700 mb-6">
                Belgian Waffle Works has been a cornerstone of the Lake Arrowhead Village since 1982. What started as a small family dream has grown into one of the most beloved restaurants in the San Bernardino Mountains.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our founders believed that great food brings people together, and that philosophy continues to guide us today. We've become one of the iconic businesses here in the Lake Arrowhead Village, serving generations of families who return year after year.
              </p>
              
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">A Family Tradition</h3>
              
              <p className="text-gray-700 mb-6">
                As a family-owned and operated restaurant, we take pride in maintaining the personal touch that has made us special for over four decades. Our recipes have been passed down through generations, and we continue to make our famous Belgian waffles with the same care and attention to detail that started it all.
              </p>
              
              <p className="text-gray-700 mb-6">
                Visitors from throughout California and around the world visit Belgian Waffle Works for their wonderful meals and delicious waffles. We've had the pleasure of serving everyone from local families to international travelers, all drawn by our reputation for quality and hospitality.
              </p>
              
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Looking Forward</h3>
              
              <p className="text-gray-700 mb-6">
                While we're proud of our history, we're always looking toward the future. We continue to innovate our menu while staying true to the classics that made us famous. Our commitment to quality ingredients, exceptional service, and the warm, welcoming atmosphere that makes every visit special remains unchanged.
              </p>
              
              <p className="text-gray-700">
                Thank you for being part of our story. Whether you're a longtime regular or visiting for the first time, we're honored to serve you and look forward to many more years of creating memorable dining experiences in beautiful Lake Arrowhead Village.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      
      <div className="pt-20">
        <div
          className="h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/17150200/pexels-photo-17150200.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              We'd love to hear from you! Get in touch with us today.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-amber-600" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Phone</h3>
                    <p className="text-gray-700">(909) 337-5222</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-amber-600" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Email</h3>
                    <p className="text-gray-700">info@belgianwaffle.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Address</h3>
                    <p className="text-gray-700">28200 State Hwy 189 Suite E-150</p>
                    <p className="text-gray-700">Lake Arrowhead, CA 92352</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Hours</h3>
                    <p className="text-gray-700">Monday-Friday: 8am-3pm</p>
                    <p className="text-gray-700">Saturday-Sunday: 8am-4pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold text-amber-900 mb-2">Large Parties</h3>
                <p className="text-amber-700">
                  For parties of 30 or more, please email us at info@belgianwaffle.com
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="h-full min-h-96">
                <img
                  src="https://images.pexels.com/photos/17150200/pexels-photo-17150200.jpeg"
                  alt="Lake Arrowhead Village Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Shop Page Component
const ShopPage = () => {
  const products = [
    {
      name: "Belgian Waffle Mix",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1563009390-639e10013c92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85",
      description: "Take our famous Belgian waffle recipe home with you!"
    },
    {
      name: "Lake Arrowhead Mug",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1650004703329-a3c7afcdc49b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85",
      description: "Enjoy your morning coffee in our signature mug"
    },
    {
      name: "Gift Card",
      price: "$25.00",
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85",
      description: "Perfect gift for waffle lovers!"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      
      <div className="pt-20">
        <div
          className="h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4109466/pexels-photo-4109466.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Shop</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Take a piece of Belgian Waffle Works home with you
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Export all components
export const Components = {
  Navigation,
  Hero,
  FoodGallery,
  History,
  Testimonials,
  Contact,
  Footer,
  MenuPage,
  HistoryPage,
  ContactPage,
  ShopPage
};