import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

function Signup() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="hidden lg:block">
        <Quote />
      </div>
      <div>
        <Auth type="signup" />
      </div>
    </div>
  )
}

export default Signup