import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2958243505313!2d72.82857961519038!3d18.962538387153046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3e55fa617b%3A0xa8f80550ec16e191!2sParda%20Mansion%2C%20B%20Virani%20Marg%2C%20Nagpada%2C%20Mumbai%2C%20Maharashtra%20400008!5e0!3m2!1sen!2sin!4v1669892789676!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xaykglep" method="post" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" placeholder="Email" name="Email" required autoComplete="off" />
          <textarea name="Message" placeholder="Enter Your Message" cols="30" rows="10" required autoComplete="off"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </Wrapper>
  );
};

export default Contact;