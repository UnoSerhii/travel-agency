import {Logo} from "../../../components/index";
import {ButtonComponent} from "@syncfusion/ej2-react-buttons";
import {loginWithGoogle} from "~/appwrite/auth";
import {account} from "~/appwrite/client";
import {redirect} from "react-router";

export const clientLoader = async () => {
  try {
    const user = await account.get()

    if (user) return redirect('/dashboard')
  } catch (e) {
    console.log('Error fetching user' ,e);
  }
}

const SignIn = () => {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className="header">
            <Logo/>
          </header>

          <article className='flex flex-col xl:gap-6 items-center'>
            <h2 className="p-28-semibold text-dark-100 text-center
            ">Start Your Travel Journey</h2>
            <p className="p-18-regular text-center text-gray-100 !leanding-7">Sign in with Google to manege
              destinations, itineraries and use activity with easy.</p>
            <ButtonComponent type="button" iconCss="e-search-icon" cssClass="button-class !h-11 !w-full"
                             onClick={loginWithGoogle}>
              <img src="/assets/icons/google.svg" alt="Google" className="size-5"/>
              <span className="p-18-semibold text-white">Sign in with Google</span>
            </ButtonComponent>
          </article>
        </div>
      </section>
    </main>
  )
}
export default SignIn
