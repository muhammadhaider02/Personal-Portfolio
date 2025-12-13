import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .toast {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--green);
    color: var(--navy);
    padding: 12px 24px;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 600;
    z-index: 1000;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    animation: slideDown 0.3s ease-out;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!prefersReducedMotion) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, [prefersReducedMotion]);

  const handleEmailClick = (e) => {
    e.preventDefault();

    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        })
        .catch(() => { });
    }

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What's Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p>
        I'm always interested in hearing about new opportunities in software development
        and AI engineering. Whether you're hiring, have an interesting project, or just
        want to connect, feel free to reach out!
      </p>

      <a className="email-link" href={`mailto:${email}`} onClick={handleEmailClick}>
        Say Hello
      </a>

      {showToast && <div className="toast">Email copied to clipboard!</div>}
    </StyledContactSection>
  );
};

export default Contact;