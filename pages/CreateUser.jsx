import { useRouter } from "next/router"
import { createUser } from "@/lib/api";
import { useForm } from "react-hook-form";

export default function Register() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log("onSubmit");
    try {
      const user = await createUser(
        data.email,
        data.password,
        data.name,
        data.profilePic,
        data.user
      );
      if (user) {
        console.log("este es el usuario", user);
        toast.success("Usuario registrado");
        let autoLog = await login(data.email, data.password);
        console.log(autoLog);
        router.push("/");
      } else {
        toast.error("Error en el registro");
        setError("root.serverError", {
          type: "manual",
          message: "Error en el registro",
        });
      }
    } catch (error) {
      if (error.message.includes("already exists")) {
        toast.error("El usuario ya existe");
        setError("email", {
          type: "manual",
          message: "El usuario ya existe",
        });
      }
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
                
                <button className="flex justify-center pt-3 font-semibold">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10 max-sm:w-96 max-sm:ml-5">
                    Continue with Apple
                    </span>
                </button>
                
                <button className="flex justify-center pt-3 font-semibold">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10 max-sm:w-96 max-sm:ml-5">
                    Continue with Facebook
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10 max-sm:w-96 max-sm:ml-5" >
                    Continue with Forem
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10 max-sm:w-96 max-sm:ml-5">
                    Continue with GitHub
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10 max-sm:w-96 max-sm:ml-5">
                    Continue with Apple
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10 max-sm:w-96 max-sm:ml-5">
                    Continue with Google
                    </span>
                </button>
                <button className="flex justify-center pt-3 font-semibold">
                    <span className="border-black/20 border-[1px] rounded-md h-12 w-[140%] pt-2 flex justify-center hover:bg-zinc-400/10 max-sm:w-96 max-sm:ml-5">
                    Continue with Twitter(X)
                    </span>
                </button>

                <form
            className="flex flex-col mt-3 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="mt-2 max-sm:ml-5 max-sm:mt-5">User</p>
            <input
              className="w-full border-black/20 border-[1px] h-10 rounded-md hover:border-[#4e57ef] p-3 max-sm:w-96 max-sm:ml-5"
              required
              type="text"
              {...register("user", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
              })}
            />
            <p className="mt-2 max-sm:ml-5 max-sm:mt-5">Name</p>
            <input
              className="w-full border-black/20 border-[1px] h-10 rounded-md hover:border-[#4e57ef] p-3 max-sm:w-96 max-sm:ml-5"
              required
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
              })}
            />
            <p className="max-sm:ml-5 max-sm:mt-5">Email</p>
            <input
              className="w-full border-black/20 border-[1px] h-10 rounded-md hover:border-[#4e57ef] p-3 max-sm:w-96 max-sm:ml-5"
              required
              {...register("email", {
                required: {
                  value: true,
                  message: "El correo del usuario es requerido",
                },
              })}
            />
            <p className="max-sm:ml-5 max-sm:mt-5">Password</p>
            <input
              className="w-full border-black/20 border-[1px] h-10 rounded-md hover:border-[#4e57ef] p-3 max-sm:w-96 max-sm:ml-5"
              required
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
              })}
            />
            <p className="max-sm:ml-5 max-sm:mt-5">Profile Pic</p>
            <input
              className="w-full border-black/20 border-[1px] h-10 rounded-md hover:border-[#4e57ef] p-3 max-sm:w-96 max-sm:ml-5"
              required
              {...register("profilePic", {
                required: {
                  value: true,
                  message: "La imagen de perfil es requerida",
                },
              })}
              />

           
            <button className="bg-[#4e57ef]  text-white border-[1px] mt-3 rounded-md h-12 w-[50%] pt-2 flex justify-center hover:bg-blue-800 max-sm:ml-5" type="submit" on onClick={() => {router.push("/Login")}}>
              Create account
            </button>
          </form>
        </div>
        </main>
            
    )
}