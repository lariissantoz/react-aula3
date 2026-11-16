import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha o email e a senha.");
      return;
    }

    alert(`Login realizado!\nEmail: ${email}`);
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <div className="login-header">
          <i className="pi pi-user login-icon"></i>
          <h2>Bem-vindo de volta</h2>
          <p>Entre na sua conta para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <span className="p-input-icon-left campo">
            <i className="pi pi-envelope" />
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </span>

          <label htmlFor="senha">Senha</label>
          {/* toggleMask adiciona o olhinho para mostrar/ocultar a senha */}
          <Password
            inputId="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Sua senha"
            toggleMask
            feedback={false}
            className="campo"
            inputClassName="w-full"
          />

          <div className="login-opcoes">
            <div className="lembrar">
              <Checkbox
                inputId="lembrar"
                checked={lembrar}
                onChange={(e) => setLembrar(e.checked)}
              />
              <label htmlFor="lembrar">Lembrar de mim</label>
            </div>
            <a href="#">Esqueci a senha</a>
          </div>

          <Button label="Entrar" icon="pi pi-sign-in" type="submit" />
        </form>
      </Card>
    </div>
  );
}

export default Login;