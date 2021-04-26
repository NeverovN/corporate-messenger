type UseHandleLoginResult = () => Promise<void>;
type UseHandleLoginOptions = { email: string; password: string };

export function useHandleLogin(
  params: UseHandleLoginOptions,
): UseHandleLoginResult {
  const loginHandler = async (_email: string, _password: string) => {}; // api

  const handleLogin = async () => {
    try {
      await loginHandler(params.email, params.password);
    } catch {
      // TODO: handle error
    }
  };

  return handleLogin;
}

// type UseHandleLoginResult = (email: string, password: string) => Promise<void>;
// // type UseHandleLoginOptions = {};

// export function useHandleLogin(): UseHandleLoginResult {
//   const loginHandler = async (_email: string, _password: string) => {}; // api

//   const handleLogin = async (email: string, password: string) => {
//     try {
//       await loginHandler(email, password);
//     } catch {
//       // TODO: handle error
//     }
//   };

//   return handleLogin;
// }
