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
								<li>{icon}</li>
							</ul>
						);
					})}
				</div>
			</div>
			{/* <div className="footer__bottom">
				<h5>
					&copy; {new Date().getFullYear()}
					<span> Fashion Dial Collections </span>
				</h5>
				<h5>All rights reserved</h5>
			</div> */}
		</Container>
	);
};

const Container = styled.footer`
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-grey-7);
  text-align: center;
  border: 2px solid red;
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
  @media (min-width: 476px) {
    .footer__container{
      display: grid;
      grid-template-columns: repeat(3, 1fr)
    }
    .footer-section{
      text-align: left;
    }
    .footer-section ul {
      line-height: 2rem;
      text-transform: capitalize;
    }
    .footer-section ul li a {
      color: var(--clr-primary-5);
    }
    .footer-section ul li a:hover {
      color: var(--clr-primary-2);
    }
  }
`;

export default Footer;
