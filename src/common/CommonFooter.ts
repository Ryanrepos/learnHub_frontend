import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    /* To'q rangli gradient fon */
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    padding: 80px 0 40px 0;
    color: #ffffff;

    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
    }

    .footer-main {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr;
        gap: 60px;
        margin-bottom: 60px;
    }

    .brand-section {
        .logo {
            font-size: 36px;
            font-weight: 700;
            font-family: 'Cursive', sans-serif;
            margin-bottom: 24px;
            display: block;
        }

        .tagline {
            font-size: 16px;
            color: #94a3b8;
            margin-bottom: 24px;
        }

        .newsletter {
            position: relative;
            max-width: 350px;

            input {
                width: 100%;
                padding: 14px 20px;
                border-radius: 30px;
                border: none;
                background: #ffffff;
                color: #000;
                outline: none;
                font-size: 14px;
                &::placeholder { color: #94a3b8; }
            }

            .submit-btn {
                position: absolute;
                right: 5px;
                top: 5px;
                width: 38px;
                height: 38px;
                background: #000;
                color: #fff;
                border: none;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.3s;
                &:hover { transform: scale(1.1); }
            }
        }
    }

    .links-section {
        h4 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 24px;
            color: #ffffff;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin-bottom: 16px;
            a {
                color: #94a3b8;
                text-decoration: none;
                transition: 0.3s;
                font-size: 15px;
                &:hover { color: #ffffff; }
            }
        }
    }

    .footer-bottom {
        border-top: 1px solid rgba(148, 163, 184, 0.2);
        padding-top: 30px;
        color: #94a3b8;
        font-size: 14px;
    }

    @media (max-width: 768px) {
        .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
        }
        .brand-section {
            text-align: center;
            .newsletter { margin: 0 auto; }
        }
        .links-section { text-align: center; }
    }
`;