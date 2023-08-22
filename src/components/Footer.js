import React from 'react';
import styled from 'styled-components';
import {
	customer_service,
	about_fashion_dial,
	social_icons,
} from '../utils/constants';

const Footer = () => {
	return (
		<Container>
			<div className="footer__container section-center">
				<div className="footer-section">
					<h3>customer care</h3>
					{customer_service.map((service) => {
						const { text } = service;
						return (
							<ul>
								<li>
									<a href="/">{text}</a>
								</li>
							</ul>
						);
					})}
				</div>
				<div className="footer-section">
					<h3>about fashion dial</h3>
					{about_fashion_dial.map((service) => {
						const { text } = service;
						return (
							<ul>
								<li>
									<a href="/">{text}</a>
								</li>
							</ul>
						);
					})}
				</div>
				<div className="social__icons">
					<h3>Connect </h3>
					{social_icons.map((social_icon) => {
						const { icon } = social_icon;
						return (
							<ul>
								<li>
									<a href="/">{icon}</a>
								</li>
							</ul>
						);
					})}
				</div>
			</div>
			<div className="footer__bottom">
				<h5>
					&copy; {new Date().getFullYear()}
					<span> Fashion Dial Collections </span>
				</h5>
				<h5>All rights reserved</h5>
			</div>
		</Container>
	);
};

const Container = styled.footer`
  height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-grey-7);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .footer__bottom {
	background: var(--clr-grey-1);
	width: 100%;
	padding: 2rem 0;

  }
  @media (min-width: 476px) {
    .footer__container{
		height: 30rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-bottom: 2rem;
    }
    .footer-section{
      text-align: center;
    }
    .footer-section ul {
      line-height: 2rem;
      text-transform: capitalize;
    }
	.social__icons ul{
		line-height: 2.5rem;
	}
    .footer-section ul li a, .social__icons ul li a  {
      color: var(--clr-primary-5);
    }
    .footer-section ul li a:hover, .social__icons ul li a:hover {
      color: white;
    }
  }
`;

export default Footer;
