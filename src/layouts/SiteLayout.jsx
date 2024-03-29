import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Sitemap from '../pages/Sitemap';
import MarketPlace from '../pages/MarketPlace';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import ProductList from '../components/sections/ProductList';
import Subdomain from '../pages/Subdomain';
import OurPresenceInCity from '../pages/OurPresenceInCity';
import KeywordInCity from '../pages/KeywordInCity';

function SiteLayout() {

  const [products, setProduct] = useState([]);
  const [locations, setLocations] = useState([]);
  const [promotionalCategories, setPromotionalCategories] = useState([]);

  const getProducts = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`);
    result = await result.json();
    if (result.status) {
      setProduct(result.products);
    }
  }

  const getMarketPlace = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}marketPlace`);
    result = await result.json();
    if (result.status) {
      setLocations(result.data.locations);
      setPromotionalCategories(result.data.promotionalCategories);
    }
  }

  useEffect(() => {
    getProducts();
    getMarketPlace();
  }, [])

  return (
    <>
      {/* <Nav></Nav> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Products />} />
        <Route path='/company-profile' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sitemap' element={<Sitemap />} />
        <Route path='/market-place' element={<MarketPlace />} />
        {
          products
            ?
            products.map((value, index) =>
              <Route key={index} path={'/' + value.slug} element={<ProductDetail slug={value.slug} />} />
            )
            :
            null
        }
        {
          promotionalCategories
            ?
            promotionalCategories.map((value, index) =>
              <>
                <Route
                  key={index}
                  path={'/' + value.slug}
                  element={<ProductList slug={value.slug} />}
                />
                {
                  products
                    ?
                    products.map((item, key) =>
                      <Route
                        key={key}
                        path={'/' + value.slug + "/" + item.slug}
                        element={<Subdomain categorySlug={value.slug} productSlug={item.slug} />}
                      />
                    )
                    :
                    null
                }
              </>
            )
            :
            null
        }
        {
          locations
            ?
            locations.map((value, index) =>
              <>
                <Route key={index} path={'/' + value.parantSlug} element={<OurPresenceInCity slug={value.parantSlug} />} />
                {
                  products
                    ?
                    products.map((item, key) =>
                      <Route
                        key={key}
                        path={'/' + value.parantSlug + '/' + item.slug}
                        element={
                          <KeywordInCity
                            locationSlug={value.parantSlug}
                            productSlug={item.slug}
                          />
                        }
                      />
                    )
                    :
                    null
                }
                {
                  value.cities.map((item, key) =>
                    <>
                      <Route key={key} path={'/' + item.slug} element={<OurPresenceInCity slug={item.slug} />} />
                      {
                        products
                          ?
                          products.map((val, i) =>
                            <Route
                              key={i}
                              path={'/' + item.slug + '/' + val.slug}
                              element={
                                <KeywordInCity
                                  locationSlug={item.slug}
                                  productSlug={val.slug}
                                />
                              }
                            />
                          )
                          :
                          null
                      }
                    </>
                  )
                }
              </>
            )
            :
            null
        }
      </Routes>
    </>
  )
}

export default SiteLayout