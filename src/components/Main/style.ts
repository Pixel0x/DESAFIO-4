import styled from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1144px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  .ImageSvg {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  img {
    width: 100%;
    max-width: 400px;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  color: var(--gray);
  justify-content: center;

  p {
    margin-top: 1.25rem;
    text-align: center;
  }

  a {
    font-family: "Lato", sans-serif;
    text-decoration: none;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: var(--purple-light);
  }

  h2 {
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  h1 {
    font-family: "Merriweather", serif;
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 2.0625rem;

    padding: 0.4375rem 0 1.875rem 0;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      color: var(--gray);
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.1875rem;
      margin-bottom: 0.625rem;
    }

    label[for="passwd"] {
      margin-top: 0.625rem;
    }

    input,
    button {
      border-radius: 0.3125rem;
    }

    input {
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 0.3125rem;
      padding-left: 1rem;

      &:placeholder-shown {
        outline: none;
        padding-left: 1rem;
      }
      &:focus {
        padding-left: 1rem;
      }
    }

    input[type="checkbox"] {
      height: 15px;
    }

    div {
      padding: 1.25rem 0;
      display: flex;
      justify-content: space-between;

      div {
        padding: 0;
        display: flex;
        align-items: center;

        input {
          margin-right: 0.625rem;
        }

        label {
          margin: 0;
        }
      }
    }

    button {
      height: 50px;
      color: var(--white);
      background-color: var(--green-light);
      font-family: "Lato", sans-serif;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.1875rem;
      border: none;
      margin-bottom: 1rem;
    }

    button:last-child {
      background-color: var(--gray);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 16px;
        margin-right: 0.625rem;
      }
    }
  }
`;
