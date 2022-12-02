import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import {FaWhatsapp, FaInstagram, FaTwitter, FaVoicemail, FaLinkedin} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <Wrapper>
        <section className="contact-short">
            <div className="grid grid-two-column">
                <div>
                    <h3>Ready to get started</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button>
                        <NavLink to="/contact">Get started</NavLink>
                    </Button>
                </div>
            </div>
        </section>

        <footer>
        <div className="container grid grid-four-column">
            <div className="footer-about">
                <h3>Jawad Shaikh</h3>
                <p>lorem ipsum dolor, sit amet consecutur adipisicing elit.</p>
            </div>
            <div className="footer-subscribe">
                <h3>Subscribe to get important updates</h3>
                <form action="#">
                    <input type="email" placeholder='your e-mail' />
                    <input type="submit" value="SUBSCRIBE" />
                </form>
            </div>
            <div className="footer-social">
                <h3>Follow us</h3>
                <div className="footer-social--icons">
                    <div>
                        <a 
                            href="mailto:shaikhjawad020@gmail.com"
                            target="_blank">
                            <AiOutlineMail className="icons" />
                        </a>
                    </div>

                    <div>
                        <a 
                            href="https://api.whatsapp.com/send?phone=+91 7303590056" 
                            target="_blank">
                            <FaWhatsapp className="icons" />
                        </a>
                    </div>

                    <div>
                        <a 
                            href="https://www.linkedin.com/in/jawad-shaikh-4033551b7/" 
                            target="_blank">
                            <FaLinkedin className="icons" />
                        </a>
                    </div>

                </div>
            </div>
            <div className="footer-contact">
                <h3>Call us</h3>
                <a href="tel: +91 8850838058">+91 8850838058</a>            
            </div>
        </div>

        <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
                <p>@{new Date().getFullYear()} JawadShaikh. All Rights Reserved</p>
                <div>
                  <p>PRIVACY POLICY</p>
                  <p>TERMS & CONDITIONS</p>
                </div>
            </div>
        </div>
    </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
export default Footer