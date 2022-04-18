import ImageSvg from "../../assets/image.svg";
import iconGoogle from "../../assets/iconGoogle.svg";
import { Container, ContainerForm, MainStyle } from "./style";

export function Main() {
  return (
    <MainStyle>
      <Container>
        <img className="ImageSvg" src={ImageSvg} />

        <ContainerForm>
          <div>
            <h2>Bem vindo de volta</h2>
            <h1>Faça login na sua conta</h1>
          </div>

          <form>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="email@exemplo.com" />
            <label htmlFor="passwd">Senha</label>
            <input type="password" id="passwd" placeholder="*********" />

            <div>
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembre de mim</label>
              </div>

              <a href="#">Esqueceu sua senha?</a>
            </div>

            <button>Entrar</button>
            <button>
              <img src={iconGoogle} /> Ou faça login com o Google{" "}
            </button>
          </form>

          <p>
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </p>
        </ContainerForm>
      </Container>
    </MainStyle>
  );
}
