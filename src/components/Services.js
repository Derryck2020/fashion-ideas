import React from 'react';
import styled from 'styled-components';
import { GiAmpleDress } from 'react-icons/gi';
import womenImg from '../assets/about-bcg.jpg';
import { services } from '../utils/constants';
const Services = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<article className="women-container">
					<div className="women-caption">
						<span>
							<GiAmpleDress />
						</span>
						<div className="text">
							<h2>Unleash Your Glamour</h2>
							<p>Endless Style Possibilities</p>
						</div>
						<a href="/" className="btn">
							shop
						</a>
					</div>
					<div className="women-image-container">
						<img
							src={womenImg}
							className="women-img"
							alt="image of women fashion collection"
						/>
					</div>
					{/* <h3>
						why choose FashionDial: <br /> Experience Fashion Redefined
					</h3>
					<p>
						Where Quality Meets Style. Choose Us for a Curated Collection,
						Seamless Shopping, and Unmatched Elegance. Elevate Your
						Wardrobe Today!
					</p> */}
				</article>
				{/* <div className="services-center">
					{services.map((service) => {
						const { id, icon, title, text } = service;
						return (
							<article className="service" key={id}>
								<span className="icon">{icon}</span>
								<h4>{title}</h4>
								<p>{text}</p>
							</article>
						);
					})}
				</div> */}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
  border: 2px solid red;
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 2rem 0;
  background: var(--clr-primary-10);

  .women-container{
    display: grid;
    gap: 1rem;
    border: 4px solid pink;
  }
  .women-caption {
    height: 30rem;

  }
  .women-caption span {
    margin: 2rem auto;
    color: var(--clr-primary-5)
  }
  .text {
    margin: 2rem auto;
  }
  .text h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: 100;
  }
  .text p {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0 5rem;
  }
  .btn {
    display: block;
    width: 200px;
    padding: 2rem 0;
    margin: 0 auto;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .women-img {
      width: 100%;
      height: 450px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
