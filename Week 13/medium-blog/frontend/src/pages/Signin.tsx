import { Quote } from "../components/Quote";
import { AuthSignin } from "../components/AuthSignin";

function Signin() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <Quote />
      </div>
      <div>
        <AuthSignin />
      </div>
    </div>
  );
}

export default Signin;
