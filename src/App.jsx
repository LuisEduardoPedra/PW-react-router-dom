import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import TelaNome from './TelaNome';
import TelaInicial from './TelaInicial';
import TelaSalario from './TelaSalario';
import TelaResultado from './TelaResultado';
import MenuPrivado from './MenuPrivado';
import MenuPublico from './MenuPublico';
import Home from './Home';
import Login from './Login';
import Usuario from './Usuario';
import Context from './Context';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "usuario",
        element: <Usuario />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "usuario",
        element: <Usuario />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "inicio",
        element: <TelaInicial />,
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: "cadastro",
            element: <TelaNome />
          },
          {
            path: "horas",
            element: <TelaSalario />
          },
          {
            path: "resultado",
            element: <TelaResultado />
          }
        ]
      }
    ]
  }
]);

function App() {
  const [hora, setHora] = useState(null);
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [valor_hora, setValor_hora] = useState(null);
  const [salario, setSalario] = useState(null);

  return (
    <>

      <Context.Provider value={{
        hora, setHora, nome, setNome, telefone, setTelefone,
        valor_hora, setValor_hora, salario, setSalario
      }}>
          <RouterProvider router={router} />
      </Context.Provider>
    </>
  );
}

export default App;
