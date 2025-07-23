import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Star, ChefHat, Users, Award, Heart, Sparkles, Gift, Coffee } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 10,
      duration: 0.8 
    }
  }
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-300 rounded-full opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Navigation Component with enhanced animations
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b-2 border-red-200' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center border-3 border-red-400 sparkle-effect">
                  <Heart className="w-8 h-8 text-red-500 heart-beat" />
                </div>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold cursive-font text-chocolate-brown">The Waffle Pastry</h1>
                <p className="text-sm text-red-500 font-medium">Layers of Crisp, Layers of Love!</p>
              </div>
            </Link>
            
            <motion.div 
              className="hidden md:flex space-x-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { path: '/', label: 'Home' },
                { path: '/menu', label: 'Menu' },
                { path: '/history', label: 'Our Story' },
                { path: '/contact', label: 'Contact' },
                { path: '/shop', label: 'Shop' }
              ].map((item, index) => (
                <motion.div key={item.path} variants={fadeInUp}>
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-white bg-red-500 shadow-lg'
                        : 'text-chocolate-brown hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ x: '-50%' }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>
      <FloatingParticles />
    </>
  );
};

// Enhanced Hero Component
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1723822712433-cd24c724f134?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxsYWtlJTIwcmVzdGF1cmFudCUyMGRvY2tzaWRlfGVufDB8fHx8MTc1MjczMTE5N3ww&ixlib=rb-4.1.0&q=85)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 waffle-pattern"></div>
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full gradient-bg flex items-center justify-center border-4 border-white sparkle-effect floating-animation">
            <Heart className="w-16 h-16 text-red-500 heart-beat" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold cursive-font mb-6 text-shadow-custom"
        >
          The Waffle Pastry
        </motion.h1>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-4"
        >
          <p className="text-2xl md:text-3xl cursive-font text-red-300">
            Layers of Crisp, Layers of Love!
          </p>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-light"
        >
          Experience the perfect blend of crispy Belgian waffles and pastry artistry. 
          Each bite is a journey through layers of flavor crafted with love and tradition.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/menu"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl pulse-glow flex items-center space-x-2"
            >
              <Coffee className="w-5 h-5" />
              <span>Explore Menu</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/shop"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl flex items-center space-x-2"
            >
              <Gift className="w-5 h-5" />
              <span>Order Online</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Enhanced Food Gallery Component
const FoodGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const foodImages = [
    {
      src: 'https://images.unsplash.com/photo-1563009390-639e10013c92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Belgian Waffle with toppings',
      title: 'Classic Belgian',
      description: 'Traditional crispy waffle perfection'
    },
    {
      src: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Fresh Belgian waffles with syrup',
      title: 'Sweet Symphony',
      description: 'Drizzled with golden maple syrup'
    },
    {
      src: 'https://images.pexels.com/photos/4109466/pexels-photo-4109466.jpeg',
      alt: 'Waffles with berries',
      title: 'Berry Bliss',
      description: 'Fresh berries and whipped cream'
    }
  ];

  return (
    <section ref={ref} className="py-20 gradient-bg waffle-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold cursive-font text-chocolate-brown mb-4">
            Our Signature Creations
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-chocolate-brown/80 max-w-2xl mx-auto">
            Each waffle is a masterpiece, crafted with premium ingredients and endless love
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {foodImages.map((image, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl card-hover"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 text-white"
                >
                  <h3 className="text-2xl font-bold cursive-font mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </motion.div>
              </div>
              <div className="absolute top-4 right-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced History Component
const History = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 waffle-pattern opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative group">
              <motion.img
                src="https://images.unsplash.com/photo-1650004703329-a3c7afcdc49b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85"
                alt="The Waffle Pastry Story"
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-xl floating-animation">
                <ChefHat className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold cursive-font text-chocolate-brown mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our Sweet Story
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 bg-red-500 rounded-full mb-8"
            />

            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-chocolate-brown/80 leading-relaxed"
              >
                Born from a passion for perfect pastries and crispy waffles, The Waffle Pastry began as a dream to bring together the best of both worlds - the artistry of French patisserie and the comfort of Belgian waffles.
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-chocolate-brown/80 leading-relaxed"
              >
                Every recipe is a testament to our commitment to quality, using only the finest ingredients and time-honored techniques passed down through generations of pastry chefs.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex items-center space-x-6 pt-4"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-red-500" />
                  <span className="font-semibold text-chocolate-brown">Award Winning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-red-500" />
                  <span className="font-semibold text-chocolate-brown">Family Recipe</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  to="/history"
                  className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span>Discover More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Testimonials Component
const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The most incredible waffles I've ever tasted! The perfect balance of crispy and fluffy, with layers of flavor that make every bite a delight. The staff is amazing and the atmosphere is so cozy!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "A true pastry paradise! The combination of traditional Belgian techniques with modern creativity is outstanding. My family and I come here every weekend - it's become our tradition!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily K.",
      rating: 5,
      text: "From the moment you walk in, you can smell the love that goes into every waffle. The attention to detail is incredible, and the flavors are absolutely divine. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David L.",
      rating: 5,
      text: "Best waffle experience ever! The layers of crisp and the perfect amount of sweetness make this place special. Great for dates, family outings, or just treating yourself!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-20 gradient-bg waffle-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold cursive-font text-chocolate-brown mb-4">
            Sweet Words from Sweet Hearts
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-chocolate-brown/80 max-w-2xl mx-auto">
            Our customers' smiles are our greatest reward
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-xl card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-bl-full"></div>
              
              <div className="flex items-center mb-6">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-3 border-red-200 mr-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <div>
                  <h4 className="font-bold text-chocolate-brown text-lg">{testimonial.name}</h4>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-chocolate-brown/80 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              <div className="absolute bottom-4 right-4">
                <Heart className="w-6 h-6 text-red-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl pulse-glow"
          >
            Share Your Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Contact Component
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 waffle-pattern opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold cursive-font text-chocolate-brown mb-6">
                Let's Connect!
              </h2>
              <div className="w-24 h-1 bg-red-500 rounded-full mb-8"></div>
              <p className="text-xl text-chocolate-brown/80 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our menu, want to place a special order, or just want to say hello, we're here for you.
              </p>
            </div>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                { icon: Phone, title: "Call Us", info: "(555) 123-WAFFLE", color: "text-green-500" },
                { icon: Mail, title: "Email Us", info: "hello@wafflepastry.com", color: "text-blue-500" },
                { icon: MapPin, title: "Visit Us", info: "123 Sweet Street, Pastry Town, PT 12345", color: "text-red-500" },
                { icon: Clock, title: "Hours", info: "Mon-Sun: 7AM - 9PM", color: "text-purple-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideIn}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-red-50 transition-colors duration-300"
                >
                  <div className={`w-12 h-12 ${item.color} bg-current/10 rounded-full flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate-brown text-lg">{item.title}</h3>
                    <p className="text-chocolate-brown/70">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-red-50 p-6 rounded-2xl border-2 border-red-100"
            >
              <h3 className="font-bold text-chocolate-brown text-lg mb-2 flex items-center">
                <Gift className="w-5 h-5 mr-2 text-red-500" />
                Special Events & Catering
              </h3>
              <p className="text-chocolate-brown/70">
                Planning something special? We offer custom waffle bars, catering services, and private events. Contact us to make your celebration unforgettable!
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-500 to-chocolate-brown rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold cursive-font text-white mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white/90 text-chocolate-brown placeholder-chocolate-brown/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white/90 text-chocolate-brown placeholder-chocolate-brown/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border-0 bg-white/90 text-chocolate-brown placeholder-chocolate-brown/60 focus:outline-none focus:ring-2 focus:ring-white"
                />
                
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border-0 bg-white/90 text-chocolate-brown placeholder-chocolate-brown/60 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                />
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-chocolate-brown font-bold py-4 rounded-lg transition-colors duration-300 shadow-lg"
                >
                  Send Sweet Message 💌
                </motion.button>
              </form>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl floating-animation">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Footer Component
const Footer = () => {
  return (
    <footer className="bg-chocolate-brown text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 waffle-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white heart-beat" />
              </div>
              <div>
                <h3 className="text-3xl font-bold cursive-font">The Waffle Pastry</h3>
                <p className="text-red-300">Layers of Crisp, Layers of Love!</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Creating memorable moments one waffle at a time. Our passion for perfect pastries and premium ingredients shines through in every bite.
            </p>
            <div className="flex space-x-4">
              {['📘', '📷', '🐦', '💼'].map((emoji, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <span className="text-xl">{emoji}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold cursive-font mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Menu', path: '/menu' },
                { name: 'Our Story', path: '/history' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Online Shop', path: '/shop' }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-red-300 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>🧇</span>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold cursive-font mb-6">Contact Info</h4>
            <div className="space-y-4">
              <p className="text-white/80 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-300" />
                <span>(555) 123-WAFFLE</span>
              </p>
              <p className="text-white/80 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-300" />
                <span>hello@wafflepastry.com</span>
              </p>
              <p className="text-white/80 flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-300 mt-1" />
                <span>123 Sweet Street<br />Pastry Town, PT 12345</span>
              </p>
              <p className="text-white/80 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-300" />
                <span>Daily: 7AM - 9PM</span>
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-white/60 mb-4">
            © 2025 The Waffle Pastry. All rights reserved. Made with ❤️ and lots of syrup.
          </p>
          <p className="text-red-300 cursive-font text-lg">
            "Life is better with waffles" ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// Enhanced Menu Page Component
const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('waffles');
  const [searchTerm, setSearchTerm] = useState('');

  const menuCategories = {
    waffles: {
      title: "Signature Waffles",
      items: [
        { name: "Classic Belgian", description: "Traditional crispy waffle with powdered sugar, maple syrup, and butter", price: "$12.95", popular: true },
        { 
          name: "Caramel Milk Melt", 
          description: "Decadent waffle topped with vanilla ice cream and rich caramel sauce drizzle", 
          price: "$17.95", 
          popular: true,
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        },
        { 
          name: "Tropical Fruit Burst", 
          description: "Multi-layered waffle topped with fresh tropical fruits, mango, kiwi, strawberries, and passion fruit glaze", 
          price: "$18.95", 
          popular: true,
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        },
        { 
          name: "Supreme Delight", 
          description: "Gourmet waffle with whipped cream, fresh strawberry, orange slice, chocolate drizzle, and white chocolate pearls", 
          price: "$19.95",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        },
        { name: "Strawberry Dream", description: "Fresh strawberries, whipped cream, and strawberry compote", price: "$15.95", popular: true },
        { name: "Chocolate Paradise", description: "Belgian chocolate chips, chocolate sauce, and vanilla ice cream", price: "$16.95" },
        { name: "Berry Bliss", description: "Mixed berries, honey drizzle, and Greek yogurt", price: "$14.95" },
        { name: "Caramel Apple", description: "Cinnamon apples, caramel sauce, and whipped cream", price: "$15.95" },
        { name: "Nutella Delight", description: "Nutella spread, bananas, and chopped hazelnuts", price: "$16.95", popular: true }
      ]
    },
    pastries: {
      title: "French Pastries",
      items: [
        { name: "Croissant", description: "Buttery, flaky French croissant", price: "$4.95" },
        { name: "Pain au Chocolat", description: "Croissant filled with Belgian chocolate", price: "$5.95" },
        { name: "Éclair", description: "Choux pastry filled with custard and topped with chocolate", price: "$6.95" },
        { name: "Macarons", description: "Colorful almond cookies with ganache filling (6 pieces)", price: "$18.95" },
        { name: "Mille-feuille", description: "Napoleon cake with pastry cream and fondant", price: "$7.95" }
      ]
    },
    beverages: {
      title: "Beverages",
      items: [
        { name: "Artisan Coffee", description: "Single-origin beans, expertly roasted", price: "$4.50" },
        { name: "Hot Chocolate", description: "Rich Belgian chocolate with whipped cream", price: "$5.95" },
        { name: "Fresh Juice", description: "Orange, apple, or mixed berry", price: "$4.95" },
        { name: "Specialty Tea", description: "Earl Grey, Chamomile, or Green Tea", price: "$3.95" },
        { name: "Milkshake", description: "Vanilla, chocolate, or strawberry", price: "$6.95" }
      ]
    }
  };

  const filteredItems = menuCategories[activeTab].items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-96 bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1719837918315-6d81597c8673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxsYWtlJTIwcmVzdGF1cmFudCUyMGRvY2tzaWRlfGVufDB8fHx8MTc1MjczMTE5N3ww&ixlib=rb-4.1.0&q=85)',
          }}
        >
          <div className="absolute inset-0 bg-chocolate-brown/70"></div>
          <div className="absolute inset-0 waffle-pattern opacity-30"></div>
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-bold cursive-font mb-4"
            >
              Our Delicious Menu
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl max-w-2xl mx-auto px-4"
            >
              Crafted with love, served with passion
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Search Bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search our menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full border-2 border-red-200 focus:border-red-500 focus:outline-none text-chocolate-brown bg-white shadow-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <span className="text-red-500">🔍</span>
              </div>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-2 flex space-x-2">
              {Object.entries(menuCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'text-chocolate-brown hover:bg-red-50'
                  }`}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Menu Items */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold cursive-font text-chocolate-brown mb-4">
                {menuCategories[activeTab].title}
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="relative p-6 rounded-xl border-2 border-red-100 hover:border-red-300 transition-all duration-300 group card-hover"
                  >
                    {item.popular && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Popular!
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-chocolate-brown text-xl cursive-font group-hover:text-red-500 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-red-500">{item.price}</span>
                    </div>
                    
                    <p className="text-chocolate-brown/80 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    >
                      Add to Order
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-chocolate-brown/60 text-xl">
                  No items found matching your search.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Other page components with similar enhancements...
const HistoryPage = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-96 bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/30774356/pexels-photo-30774356.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-chocolate-brown/70"></div>
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-bold cursive-font mb-4"
            >
              Our Sweet Story
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl max-w-2xl mx-auto px-4"
            >
              A legacy of layers, love, and unforgettable flavors
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-12"
          >
            <div className="prose prose-lg max-w-none">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold cursive-font text-chocolate-brown mb-8"
              >
                From Dream to Reality
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-chocolate-brown/80 mb-8 text-lg leading-relaxed"
              >
                The Waffle Pastry began as a simple dream - to create the perfect fusion of Belgian waffle artistry and French pastry elegance. What started in a small kitchen with a passionate baker has grown into a beloved destination for waffle enthusiasts and pastry lovers alike.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-chocolate-brown/80 mb-8 text-lg leading-relaxed"
              >
                Our founder, inspired by travels through Belgium and France, discovered that the secret to exceptional waffles wasn't just in the batter, but in the love and precision that goes into every step of the process. From sourcing the finest ingredients to perfecting each recipe through countless iterations, every waffle tells a story.
              </motion.p>
              
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-3xl font-semibold cursive-font text-chocolate-brown mb-6"
              >
                Layers of Tradition
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-chocolate-brown/80 mb-8 text-lg leading-relaxed"
              >
                Each waffle is a testament to traditional techniques passed down through generations, enhanced with modern innovation and creativity. We believe that every bite should be an experience - crispy on the outside, perfectly fluffy inside, with layers of flavor that unfold with each taste.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-chocolate-brown/80 text-lg leading-relaxed"
              >
                Today, The Waffle Pastry continues to honor this commitment to excellence, serving each customer with the same passion and attention to detail that inspired our journey. We're not just serving waffles - we're creating moments of joy, one delicious layer at a time.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-96 bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/17150200/pexels-photo-17150200.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-chocolate-brown/70"></div>
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-bold cursive-font mb-4"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl max-w-2xl mx-auto px-4"
            >
              We'd love to hear from you!
            </motion.p>
          </div>
        </motion.div>

        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

const ShopPage = () => {
  const products = [
    {
      name: "Waffle Mix Kit",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1563009390-639e10013c92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85",
      description: "Make our signature waffles at home! Complete kit with premium mix and instructions.",
      popular: true
    },
    {
      name: "Branded Waffle Maker",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1650004703329-a3c7afcdc49b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85",
      description: "Professional-grade waffle maker with The Waffle Pastry logo impression"
    },
    {
      name: "Gift Card",
      price: "$50.00",
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxiZWxnaWFuJTIwd2FmZmxlc3xlbnwwfHx8fDE3NTI3MzEyMDV8MA&ixlib=rb-4.1.0&q=85",
      description: "Perfect gift for waffle lovers! Available in multiple denominations."
    },
    {
      name: "Waffle Pastry Mug",
      price: "$16.99",
      image: "https://images.pexels.com/photos/4109466/pexels-photo-4109466.jpeg",
      description: "Beautiful ceramic mug with our signature design"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-96 bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4109466/pexels-photo-4109466.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-chocolate-brown/70"></div>
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-bold cursive-font mb-4"
            >
              Waffle Shop
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl max-w-2xl mx-auto px-4"
            >
              Take The Waffle Pastry experience home
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover relative"
              >
                {product.popular && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    Popular!
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold cursive-font text-chocolate-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-chocolate-brown/70 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-500">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300 shadow-lg"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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