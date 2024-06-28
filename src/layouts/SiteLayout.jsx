import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import PreLoader from '../components/PreLoader';
const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const Blogs = lazy(() => import('../pages/Blogs'));
const BlogDetail = lazy(() => import('../pages/BlogDetail'));
const Payment = lazy(() => import('../pages/Payment'));
const Sitemap = lazy(() => import('../pages/Sitemap'));
const MarketPlace = lazy(() => import('../pages/MarketPlace'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const ProductList = lazy(() => import('../components/sections/ProductList'));
const Subdomain = lazy(() => import('../pages/Subdomain'));
const OurPresenceInCity = lazy(() => import('../pages/OurPresenceInCity'));
const KeywordInCity = lazy(() => import('../pages/KeywordInCity'));
const TermsConditions = lazy(() => import('../pages/TermsConditions'));
const ShippingDelivery = lazy(() => import('../pages/ShippingDelivery'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const CancellationRefund = lazy(() => import('../pages/CancellationRefund'));

function SiteLayout() {

  const [products, setProduct] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [promotionalCategories, setPromotionalCategories] = useState([]);

  const getProducts = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`);
    result = await result.json();
    if (result.status) {
      setProduct(result.products);
    }
  }

  const getBlogs = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}blogsData`);
    result = await result.json();
    if (result.status) {
        setBlogs(result.blogs);
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
    getBlogs();
    getMarketPlace();
  }, [])

  return (
    <>
      {/* <Nav></Nav> */}
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Suspense fallback={<Skeleton count={15} />}><Home /></Suspense>} />
        <Route path='/services' element={<Suspense fallback={<Skeleton count={15} />}><Products /></Suspense>} />
        <Route path='/company-profile' element={<Suspense fallback={<Skeleton count={15} />}><About /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Skeleton count={15} />}><Contact /></Suspense>} />
        <Route path='/sitemap' element={<Suspense fallback={<Skeleton count={15} />}><Sitemap /></Suspense>} />
        <Route path='/market-place' element={<Suspense fallback={<Skeleton count={15} />}><MarketPlace /></Suspense>} />
=======
        <Route path='/' element={<Suspense fallback={<PreLoader />}><Home /></Suspense>} />
        <Route path='/services' element={<Suspense fallback={<PreLoader />}><Products /></Suspense>} />
        <Route path='/company-profile' element={<Suspense fallback={<PreLoader />}><About /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<PreLoader />}><Contact /></Suspense>} />
        <Route path='/blogs' element={<Suspense fallback={<PreLoader />}><Blogs /></Suspense>} />
        <Route path='/payment' element={<Suspense fallback={<PreLoader />}><Payment /></Suspense>} />
        <Route path='/sitemap' element={<Suspense fallback={<PreLoader />}><Sitemap /></Suspense>} />
        <Route path='/market-place' element={<Suspense fallback={<PreLoader />}><MarketPlace /></Suspense>} />
        <Route path='/google35da33f130a69c13.html' element="google-site-verification: google35da33f130a69c13.html" />
        <Route path='/terms-and-conditions' element={<Suspense fallback={<PreLoader />}><TermsConditions /></Suspense>} />
        <Route path='/shipping-and-delivery' element={<Suspense fallback={<PreLoader />}><ShippingDelivery /></Suspense>} />
        <Route path='/privacy-policy' element={<Suspense fallback={<PreLoader />}><PrivacyPolicy /></Suspense>} />
        <Route path='/cancellation-and-refund' element={<Suspense fallback={<PreLoader />}><CancellationRefund /></Suspense>} />
>>>>>>> e9841906b88671975c33d01d1b0d6f9c3f9c8e0a
        {
          products
            ?
            products.map((value, index) =>
              <Route key={index} path={'/' + value.slug} element={<Suspense fallback={<PreLoader />}><ProductDetail slug={value.slug} /></Suspense>} />
            )
            :
            null
        }
        {
          blogs
            ?
            blogs.map((value, index) =>
              <Route key={index} path={'/' + value.slug} element={<Suspense fallback={<PreLoader />}><BlogDetail slug={value.slug} /></Suspense>} />
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
                  element={<Suspense fallback={<PreLoader />}><ProductList slug={value.slug} /></Suspense>}
                />
                {
                  products
                    ?
                    products.map((item, key) =>
                      <Route
                        key={key}
                        path={'/' + value.slug + "/" + item.slug}
                        element={<Suspense fallback={<PreLoader />}><Subdomain categorySlug={value.slug} productSlug={item.slug} /></Suspense>}
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
                <Route key={index} path={'/' + value.parentSlug} element={<Suspense fallback={<PreLoader />}><OurPresenceInCity slug={value.parentSlug} /></Suspense>} />
                {
                  products
                    ?
                    products.map((item, key) =>
                      <Route
                        key={key}
                        path={'/' + value.parentSlug + '/' + item.slug}
                        element={
                          <Suspense fallback={<PreLoader />}>
                            <KeywordInCity
                              locationSlug={value.parentSlug}
                              productSlug={item.slug}
                            />
                          </Suspense>
                        }
                      />
                    )
                    :
                    null
                }
                {
                  value.cities.map((item, key) =>
                    <>
                      <Route key={key} path={'/' + item.slug} element={
                        <Suspense fallback={<PreLoader />}>
                          <OurPresenceInCity slug={item.slug} />
                        </Suspense>
                      } />
                      {
                        products
                          ?
                          products.map((val, i) =>
                            <Route
                              key={i}
                              path={'/' + item.slug + '/' + val.slug}
                              element={
                                <Suspense fallback={<PreLoader />}>
                                  <KeywordInCity
                                    locationSlug={item.slug}
                                    productSlug={val.slug}
                                  />
                                </Suspense>
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