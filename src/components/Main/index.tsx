import ImageSvg from "../../assets/image.svg";
import iconGoogle from "../../assets/iconGoogle.svg";
import { Container, ContainerForm, MainStyle } from "./style";

export function Main() {
  return (
    <MainStyle>
      <Container>
        <img className="imageP" src={ImageSvg} />
        <ContainerForm>
          <span>Bem vindo de volta</span>
          <h1>Faça login na sua conta</h1>
          <form action="">
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="E-mail" id="email" />
            <label htmlFor="pass">Senha</label>
            <input type="password" id="pass" placeholder="Senha" />

            <div>
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembre de mim</label>
              </div>

              <a href="#">Esqueceu sua senha?</a>
            </div>

            <button type="submit">Entrar</button>
            <button type="submit">
              <img src={iconGoogle} />
              Ou faça login com o Google
            </button>
          </form>
          <p>
            Não tem uma conta?<a href="#"> Cadastre-se</a>
          </p>
        </ContainerForm>
      </Container>
    </MainStyle>
  );
}
