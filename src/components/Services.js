import React from 'react';
import styled from 'styled-components';
import { GiAmpleDress, GiPoloShirt } from 'react-icons/gi';
import womenImg from '../assets/women-2.jpg';
import menImg from '../assets/men-11.jpg';
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
							shop here
						</a>
					</div>
					<div className="women-image-container">
						<img
							src={womenImg}
							className="women-img"
							alt="image of women fashion collection"
						/>
					</div>
				</article>
				<article className="men-container">
					<div className="men-image-container">
						<img
							src={menImg}
							className="men-img"
							alt="image of men fashion collection"
						/>
					</div>
					<div className="men-caption">
						<span>
							<GiPoloShirt />
						</span>
						<div className="text">
							<h2>Dress Beyond Words</h2>
							<p>Let Your Outfit Speak</p>
						</div>
						<a href="/" className="btn">
							shop here
						</a>
					</div>
				</article>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`

  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  background: var(--clr-primary-10);
  .section-center{
    display:grid;
    gap: 2rem;
  }
  .women-container,.men-container{
    display: grid;
    gap: 1rem;
  }
  .women-caption,.men-caption {
    height: 30rem;
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    color: #8fcbf7;
    svg {
      font-size: 2.5rem;
    }
  }
  .men-caption span {
    color: #0c0a09;
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
    background: #8fcbf7;
  }
  .btn:hover {
    background: #fdc2cc;
    color: #87ceeb;
  }
  .men-caption .btn {
    background: #0c0a09;
  }
  .women-img,.men-img {
      width: 100%;
      height: 30rem;
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
  @media (min-width: 576px) {
    .women-container,.men-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .section-center{
      height:160vh;
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
