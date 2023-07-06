import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'

export default function GoogleForm() {
  return (
    <>
      <GoogleOAuthProvider clientId="970774091984-uo3sv8ad0kd8k3qrns5r43ogugqcec86.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details.family_name + " " + details.given_name);
            window.localStorage.setItem("username", details.family_name + " " + details.given_name);
            window.location.href ="/app"
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}
