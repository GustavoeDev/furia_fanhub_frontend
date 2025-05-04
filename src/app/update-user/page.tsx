"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  UpdateUserData,
  updateUserSchema,
} from "@/lib/schemas/update-user-schema";
import { User } from "@/types/user";
import { updateUser } from "@/lib/requests";

export default function UpdateUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setUser(user);
  }, []);

  console.log(user);

  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState("");

  const { register, handleSubmit, reset } = useForm<UpdateUserData>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name_user: user?.name_user,
      email: user?.email,
      password: "",
      confirm_password: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name_user: user.name_user,
        email: user.email,
        password: "",
        confirm_password: "",
      });
      setAvatarUrl(user.avatar);
    }
  }, [user, reset]);

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      const allowedExtensions = ["jpg", "jpeg", "png"];

      const fileExtension = file.name.split(".").pop()?.toLowerCase();

      if (
        allowedTypes.includes(file.type) &&
        fileExtension &&
        allowedExtensions.includes(fileExtension)
      ) {
        setAvatar(file);
        setAvatarUrl(URL.createObjectURL(file));
      } else {
        toast.error("Formato de arquivo não suportado. Use JPEG ou PNG.", {
          position: "bottom-right",
        });
      }
    }
  }

  async function handleUpdateUserForm(data: UpdateUserData) {
    const formData = new FormData();

    formData.append("name_user", data.name_user);
    formData.append("email", data.email);

    if (data.password) {
      formData.append("password", data.password);
    }

    if (avatar) {
      formData.append("avatar", avatar, avatar.name);
    }

    const response = await updateUser(formData);

    console.log("Resposta do backend:", response);

    if (response.error) {
      toast.error("Erro ao atualizar dados", { position: "bottom-right" });
      return;
    }

    if (response.data) {
      const updatedUser = response.data.user;
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    }

    setAvatar(null);

    reset({
      name_user: user?.name_user,
      email: user?.email,
      password: "",
      confirm_password: "",
    });

    toast.success("Usuário atualizado com sucesso!", {
      position: "bottom-right",
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdateUserForm)}
      className="my-3 flex flex-col gap-4 max-w-[700px] w-full mx-auto"
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage
            src={avatarUrl ? avatarUrl : user?.avatar}
            alt={user?.name_user}
          />
          <AvatarFallback>{user?.name_user.slice(0, 2)}</AvatarFallback>
        </Avatar>

        <input
          className="border py-1 px-4 rounded-md text-sm w-full border-zinc-400"
          type="file"
          id="avatar"
          onChange={handleAvatarChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="nameUser">Usuário</label>
        <input
          type="text"
          id="nameUser"
          className="border py-2 px-2 rounded-md text-sm w-full border-zinc-400"
          placeholder="Nome"
          {...register("name_user")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="emailUser">E-mail</label>
        <input
          type="text"
          id="emailUser"
          className="border py-2 px-2 rounded-md text-sm w-full border-zinc-400"
          placeholder="E-mail"
          {...register("email")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="passwordUser">Senha</label>
        <input
          type="text"
          id="passwordUser"
          className="border py-2 px-2 rounded-md text-sm w-full border-zinc-400"
          placeholder="Senha"
          {...register("password")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPasswordUser">Confirmar senha</label>
        <input
          type="text"
          id="confirmPasswordUser"
          className="border py-2 px-2 rounded-md text-sm w-full border-zinc-400"
          placeholder="Confirmar senha"
          {...register("confirm_password")}
        />
      </div>

      <button
        type="submit"
        className="bg-[#C49D2B] hover:bg-[#c49e2b93] py-3 font-medium text-white rounded-md border-0 transition-colors cursor-pointer mt-3"
      >
        Confirmar alterações
      </button>
    </form>
  );
}
