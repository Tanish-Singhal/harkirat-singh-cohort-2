import { Quote } from "../components/Quote";
import { AuthSignup } from "../components/AuthSignup";

function Signup() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="hidden lg:block">
        <Quote />
      </div>
      <div>
        <AuthSignup />
      </div>
    </div>
  );
}

export default Signup;
