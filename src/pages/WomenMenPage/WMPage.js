import React, { useState } from "react";
import { ProductPageNav } from "../../components/ProductPageNav/ProductPageNav";
import { FilterProductsByCategory } from "../../components/FilterProductsByCategory/FilterProductsByCategory";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import filterOpen from "../../assets/png/filter-open.png";
import filterClosed from "../../assets/png/filter-closed.png";
import viewGrid from "../../assets/png/view-grid.png";
import viewList from "../../assets/png/view-list.png";
import squareLoading from "../../assets/png/square-loading.png";
import "./WomenMenPage.css";

import { useGetProductsQuery } from "../../redux/products/productsApi";

const WomenMenPag = (page) => {
   const typePage = page.page;
   // console.log(typePage)
   const productType = typePage.toLowerCase();
   // console.log(productType)
   const {data} = useGetProductsQuery();
   // console.log(data)
   // const PRODUCTS = data;
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [colorsProduct, setColorsProduct] = useState([]);
   const [sizesProduct, setSizesProduct] = useState([]);
   const [brandsProduct, setBrandsProduct] = useState([]);
   const [color, setcolor] = useState([]);
   const [size, setsize] = useState([]);
   const [brand, setbrand] = useState([]);
   const priceProduct = ['$ 500+', '$ 200-500', '$ 100-200', '$ 50-100', '$ 0-50']
   const [price, setprice] = useState([]);
   const [filterProducts, setFilterProduct] = useState([]);

   const toggleMenuMode = () => {
      setIsMenuOpen({isMenuOpen: !isMenuOpen})
      isMenuOpen ? colorsProduct : addArrColorsProduct();
      isMenuOpen ? sizesProduct : addArrBrandsProduct();
      isMenuOpen ? brandsProduct : addArrSizesProduct();
   }

   const addArrColorsProduct = () => {

      let colorProd = [...colorsProduct];

      data[productType].forEach(product => {
            product.images.forEach(color => {
               let res = colorProd.some(col => col === color.color);
               return res !== true ? colorProd.push(color.color) : null; 
            })
      })
      setColorsProduct(colorProd);
   }

   const addArrSizesProduct = () => {

      let sizeProd = [...sizesProduct];
      data[productType].forEach(product => {
          product.sizes.forEach(size => {
              let res = sizeProd.some(sizes => sizes === size);
              return res !== true ? sizeProd.push(size) : null; 
          })
      })   
      setSizesProduct(sizeProd)
   }

   const addArrBrandsProduct = () => {

      let brandProd = [...brandsProduct];
      data[productType].forEach(product => {
         let res = brandProd.some(brand => brand === product.brand);
         return res !== true ? brandProd.push(product.brand) : null; 
      })   
      setBrandsProduct(brandProd)
   }

   const filterСategory = (e) => {
      let filter = [...color];
      console.log(filter)
      let res = filter.find(item => item === e.target.value);
  
      if (e.target.checked === true) {
          if (res === undefined) {
              filter.push(e.target.value);
          }
      } else {
         if (res === e.target.value) {
            filter.forEach((item, i) => {
               if (item === res){
                  filter.splice(i, 1);
               }
            })
         }
      }

      setcolor(filter)
      const categor = e.target.name;
      switch(categor) {
         case 'color': setcolor(filter);
         break;
         case 'size': setsize(filter);
         break;
         case 'brand': setbrand(filter);
         break;
         case 'price': setprice(filter);
         break;
      }

      filterProduct();
   };

   const getDiscount = (price, discout) => {
      return discout ? price * (100 - discout.replace(/[\D]+/g, '')) / 100 : price;
   }

   const filterByPrice = (key) => (price) => {
      const prices = {
          '$ 500+': price >= 500, 
          '$ 200-500': price >= 200 && price < 500,
          '$ 100-200': price >= 100 && price < 200,
          '$ 50-100': price >=50 && price < 100,
          '$ 0-50': price >= 0 && price < 50,
      };
      return prices[key];
   }

   const filterProduct = () => {

      let filterProd = data[productType].filter(product =>  

         {
            let isFilter =
            (color.length > 0 ? product.images.some(item => color.some(col => col === item.color)) : true)
            &&
            (size.length > 0 ? product.sizes.some(size => size.some(siz => siz === size)) : true)
            &&
            (brand.length > 0 ? brand.some(bran => bran === product.brand) : true)
            &&
            (price.length > 0 ? price.some(pric => filterByPrice(pric)(getDiscount(product.price, product.discount))) : true)
            return isFilter === true ? product : null;
         }
      ) 
      setFilterProduct(filterProd)  
   }

   return (
      <section className='products-page' data-test-id={`products-page-${productType}`}>
            <ProductPageNav page={productType} />
      
            <div className='wrapper-products-page_title'>
               <div className='products-page_title'>{typePage}</div>
            </div>
            
            <div className='products-page_filters'>
               <button className="products-page_filter-btn" onClick={toggleMenuMode} data-test-id="filter-button">
                  <img src={!isMenuOpen ? filterOpen : filterClosed} alt='img'/>FILTER
               </button>
               <div className='products-page_view'>
                  <button><img src={viewList} alt='img'/></button>
                  <button><img src={viewGrid} alt='img'/></button>
               </div>
            </div>
            <FilterProductsByCategory 
               productType={productType}
               colorsProduct={colorsProduct} 
               sizesProduct={sizesProduct}
               brandsProduct={brandsProduct}
               priceProduct={priceProduct}
               isMenuOpen={isMenuOpen}
               filterСategory={filterСategory}
            />
            <div className='show-filter-result'>
               
               {
                  filterProduct.length > 0 ? 
                  <>
                        <span className='show-filter-result-bold'>{filterProduct.length}</span>
                        <span className='show-filter-result-bold'>items Found</span>
                  </>
                  : null
               }
               {
                  color.length > 0 ? 
                  <>
                        <span className='show-filter-result-opasity'>Color:</span>
                        {color.map((color, i) => (
                           <span className='show-filter-result-opasity' key={i}>{color}</span>
                        ))}
                  </>
                  : null
               }
               {
                  size.length > 0 ? 
                  <>
                        <span className='show-filter-result-opasity'>Size:</span>
                        {size.map((size, i) => (
                           <span className='show-filter-result-opasity' key={i}>{size}</span>
                        ))}
                  </>
                  : null
               }
               {
                  brand.length > 0 ? 
                  <>
                        <span className='show-filter-result-opasity'>Brand:</span>
                        {brand.map((brand, i) => (
                           <span className='show-filter-result-opasity' key={i}>{brand}</span>
                        ))}
                  </>
                  : null
               }
               {
                  price.length > 0 ? 
                  <>
                        <span className='show-filter-result-opasity'>Price:</span>
                        {price.map((price, i) => (
                           <span className='show-filter-result-opasity' key={i}>{price}</span>
                        ))}
                  </>
                  : null
               }
               
            </div>
            <div className='products-page_card-product'>
               
               {                
                  filterProducts.length > 0 ? 
                  
                  filterProducts.map(product => (
                        <CardProduct product={product} key={product.id} />
                  ))
                  : 
                  filterProducts.length === 0 &&
                  color.length > 0 ||
                  size.length > 0 ||
                  brand.length > 0 ||
                  price.length > 0 ? null :
               
                  data[productType].map(product => (
                        <CardProduct product={product} key={product.id} />
                  ))
               }
            </div>
            <div className='products-page_loading'><img src={squareLoading} alt='img' /></div>
      </section>
   )
}

export { WomenMenPag }