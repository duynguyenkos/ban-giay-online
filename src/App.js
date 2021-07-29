import logo from './logo.svg';
import './App.scss';
import MainHeader from './components/Header/main_header';
import MainNav from './components/Header/main_nav';
import ScrollImage from './components/Main/scroll_image';
import Product from './components/Main/product';
import { ProductProvider } from './common/ProductContext';
import Cart from './components/Features/cart.js';
import ProductDetail from './components/Main/product_detail';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Search from './components/Features/search';
import Footer from './components/Footer';
import News from './components/Main/news';
import ProductAll from './components/Main/product_all'
import Categories from './components/Features/categories';
import Contact from './components/Features/contact';
import TrackingFlow from './components/Features/tracking';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <BrowserRouter>
          <MainHeader />
          <MainNav />
          <Switch>
            <Route exact path="/">
              <ScrollImage />
              <Product />
              <News />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/products/:productId">
              <ProductDetail />
            </Route>
            <Route exact path="/search/:productInfo">
              <Search />
            </Route>
            <Route exact path="/shopall">
              <ProductAll />
            </Route>
            <Route exact path="/categories/:cateName">
              <Categories />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/tracking">
              <TrackingFlow />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ProductProvider>

    </div>
  );
}
export default App;
