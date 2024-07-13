import { login } from "@/lib/api";
import { useRouter } from "next/router"
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Login () {
    const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.email, data.password);
      if (token) {
        window.localStorage.setItem("token", token);
        toast.success("Usuario Registrado");
        console.log(token)
        router.push("/");
      } else {
        toast.error("Usuario o Contraseña incorrectos");
        setError("root.credentials", {
          type: "manual",
          message: "Credenciales indvalidas",
        });
      }
    } catch (error) {
      toast.error("Error al iniciar sesion");
    }
  }
    
    
    
    return (
        <main className="bg-white text-black">
            <div className="grid justify-center mt-10">
                <span className="flex justify-center">
                    <img className="w-16" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png" alt="Logo de devto"/> 
                </span>
                
                
                <span className="text-center pt-3">
                    <h1 className="font-bold text-3xl opacity-90">Join the DEV Community</h1>
                    <p className="pt-2">DEV Community is a community of 1,707,784 amazing developers</p>
                </span>
                
                <button className="flex justify-center pt-3 font-semibold max-sm:w-96 max-sm:ml-5">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10">
                    Continue with Apple
                    </span>
                </button>
                
                <button className="flex justify-center pt-3 font-semibold max-sm:w-96 max-sm:ml-5">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10">
                    Continue with Facebook
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold max-sm:w-96 max-sm:ml-5">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10">
                    Continue with Forem
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold max-sm:w-96 max-sm:ml-5">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10">
                    Continue with GitHub
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold max-sm:w-96 max-sm:ml-5">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10">
                    Continue with Apple
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold max-sm:w-96 max-sm:ml-5">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10">
                    Continue with Google
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold max-sm:w-96 max-sm:ml-5">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10">
                    Continue with Twitter(X)
                    </span>
                </button>

                <form
                onSubmit={handleSubmit(onSubmit)}>
                    <span className="pt-9">
                    <p className="font-semibold pb-2  max-sm:ml-5 max-sm:mt-5">Email</p>
                    <input type="email" className="w-full border-black/20 border-[1px] h-9 rounded-md hover:border-[#4e57ef] p-3 max-sm:w-96 max-sm:ml-5"
                    {...register("email", {
                        required: {
                          value: true,
                          message: "El correo del usuario es requerido",
                        },
                      })}
                    />
                </span>

                <span className="pt-3">
                    <p className="font-semibold pb-2  max-sm:ml-5 max-sm:mt-5">Password</p>
                    <input type="password" className="w-full border-black/20 border-[1px] h-9 rounded-md hover:border-[#4e57ef] p-3 max-sm:w-96 max-sm:ml-5"
                    {...register("password", {
                        required: {
                          value: true,
                          message: "La contraseña es requerido",
                        },
                      })}
                    />
                </span>

                <button className="flex justify-end text-[#4e57ef] pt-2 max-sm:ml-5  ">Forgot password?</button>

                <span className="flex justify-center pt-2 max-sm:w-96 max-sm:ml-5">
                    <button className="bg-[#4e57ef]  text-white border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-blue-800" type="submit" >Log In</button>
              </span>
                </form>
            </div>
        </main>
    )
}