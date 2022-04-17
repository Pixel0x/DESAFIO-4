import styled from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;

  background: var(--white);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  .imageP {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 60px;

  @media (max-width: 900px) {
    padding-top: 5px;
  }

  a {
    text-decoration: none;
    color: var(--purple-light);
  }

  p {
    font-family: "Lato", sans-serif;
    margin-top: 30px;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    a {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
    }
  }

  span,
  h1,
  label,
  input {
    color: var(--gray);
  }

  span {
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  h1 {
    font-family: "Merriweather", serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
    margin: 6px 0 40px 0;
  }

  label {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  input {
    border: 1px solid var(--gray);
    border-radius: 5px;
    padding-left: 1rem;

    &:placeholder-shown {
      outline: none;
      padding-left: 1rem;
    }

    &:focus {
      padding-left: 1rem;
    }
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    max-width: 350px;
    height: 50px;
    margin: 10px 0;
  }

  input[type="password"] {
    margin-bottom: 0;
  }

  input,
  input::placeholder,
  a {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
      margin: 14px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      label {
        font-size: 14px;
      }

      input {
        border-radius: 10px;
      }

      div {
        gap: 10px;
      }
    }

    button {
      img {
        width: 20px;
      }
    }

    button {
      font-family: "Lato", sans-serif;
      height: 50px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      background: var(--green-light);
      color: var(--white);
      border-radius: 5px;
      border: none;
    }

    button:last-child {
      margin-top: 16px;
      background: var(--gray);
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
    }
  }
`;
