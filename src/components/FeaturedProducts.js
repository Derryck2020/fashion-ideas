import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProducts = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	const {
		products_loading: loading,
		products_error: error,
		featured_products: featured,
	} = useProductsContext();
	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <Error />;
	}
	return (
		<Wrapper className="section">
			<div className="title">
				<h2>Trending products</h2>
				<div className="underline"></div>
			</div>
			<div className="section-center featured">
				<Slider {...settings}>
					{featured.map((product) => {
						console.log(product);
						return <Product key={product.id} {...product} />;
					})}
				</Slider>
			</div>
			<Link to="/products" className="btn">
				all products
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.section`
  background: var(--clr-grey-8);
  .featured {
    margin: 4rem auto;
    display: grid;
    img {
      height: 250px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
