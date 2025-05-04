"use client";

import authBanner from "@/assets/auth-banner.png";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpData, signUpSchema } from "@/lib/schemas/auth-schema";
import { useRouter } from "next/navigation";
import { handleSignUp } from "@/lib/server/auth";
import { toast } from "sonner";

export default function SignUpPage() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name_user: "",
      email: "",
      password: "",
    },
  });

  async function handleFormSignUp(data: SignUpData) {
    const response = await handleSignUp(data);

    console.log(response);

    if (response.error) {
      toast.error("Erro ao fazer cadastro", { position: "bottom-right" });

      return;
    }

    if (response.data?.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } else {
      toast.error("Usuário não encontrado", { position: "bottom-right" });
    }

    toast.success("Usuário autenticado com sucesso!", {
      position: "bottom-right",
    });

    router.push("/");
  }

  return (
    <div className="h-screen flex items-center justify-between w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <Image
        src={authBanner}
        alt="Banner"
        className="w-full max-w-[350px] mb-10 h-auto"
      />

      <form
        onSubmit={handleSubmit(handleFormSignUp)}
        className="flex flex-col gap-4 max-w-[400px] w-full mx-auto"
      >
        <h1 className="font-title text-6xl mb-3">FURIA</h1>
        <div className="flex flex-col gap-3">
          <label htmlFor="nameUser">Usuário</label>
          <input
            type="text"
            id="nameUser"
            className="border border-zinc-400 dark:bg-zinc-900 rounded-sm p-2 text-sm"
            placeholder="Digite seu usuário"
            {...register("name_user")}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="emailUser">E-mail</label>
          <input
            type="text"
            id="emailUser"
            className="border border-zinc-400 dark:bg-zinc-900 rounded-sm p-2 text-sm"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="passwordUser">Senha</label>
          <input
            type="password"
            id="passwordUser"
            className="border dark:bg-zinc-900  border-zinc-400 rounded-sm p-2 text-sm"
            placeholder="Senha"
            {...register("password")}
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#C49D2B] hover:bg-[#c49e2bc0] cursor-pointer font-semibold py-3 rounded-sm  text-white"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
