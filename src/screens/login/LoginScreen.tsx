import { IonPage } from "@ionic/react";
import { Button, Input, InputPassword } from "@/components/atoms";
import { ReactComponent as WaveSvg } from "./wave.svg";
import { setIsAuthenticated, setToken, updateUser } from "@/stores/auth";
import { addCircleOutline, arrowForwardOutline } from "ionicons/icons";
import { useState } from "react";

const LoginScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e?.preventDefault();
    e.stopPropagation();
    setLoading(true);
    setTimeout(() => {
      updateUser({ name: "Josh Donis", email: "josh@donis.com", picture: "" });
      setToken("12939239292");
      setIsAuthenticated(true);
      setLoading(false);
    }, 2000);
  };
  return (
    <IonPage>
      <div className="mentor-content flex w-full h-full justify-center items-center">
        <div className="flex w-[90%] flex-col justify-between items-center">
          <div className="flex flex-col items-center justify-center font-poppins">
            <h2 className="text-xl text-dark font-bold p-2">
              Iniciar sesión
            </h2>
            <p className="text-sm text-gray-70">
              Continuar a <span className="font-bold">Mentor</span>
            </p>
          </div>

          <form
            id="loginForm"
            className="w-full items-center justify-center"
            onSubmit={handleSubmit}
            action=""
          >
            <Input
              label="Correo electronico"
              name="email"
              placeholder="name@example.com"
              value={undefined}
              onChange={() => null}
              type="text"
              autoComplete="off"
              required
            />
            <InputPassword
              label="Contraseña"
              name="password"
              placeholder="Ingrese tu contraseña"
              autoComplete="off"
              value={undefined}
              onChange={() => null}
              required
            />

            <Button
              icon={arrowForwardOutline}
              form="loginForm"
              loading={loading}
              type="submit"
              color="primary"
              klass="w-full my-8 bg-primary rounded-lg flex-row-reverse"
              label="Iniciar sesión"
            />
          </form>
          <a
            className="text-xs text-center w-full text-primary font-poppins font-bold mt-4"
            href="/reset"
          >
            ¿Has olvidado tu contraseña?
          </a>
        </div>
      </div>
      <div className="flex absolute w-full object-contain bottom-0 m-0 p-0">
        <WaveSvg className="w-full" />
      </div>
    </IonPage>
  );
};

export default LoginScreen;
