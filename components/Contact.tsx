import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Modal from "./Modal";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const formRef = useRef<any>();

  const { register, handleSubmit, resetField } = useForm<Inputs>({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    emailjs
      .sendForm(
        "service_8pqs7y4",
        "template_6w1r4nu",
        formRef.current,
        "26Z1IQ0NVyLWXb3aa"
      )
      .then(
        (result) => {
          setMessage("Enviado com sucesso 😀");
          setIsOpened(true);
          resetField("name");
          resetField("email");
          resetField("subject");
          resetField("message");
        },
        (error) => {
          setMessage("Erro ao enviar 😢");
          setIsOpened(true);
        }
      );
  };

  return (
    <>
      <Modal isOpened={isOpened} setIsOpened={setIsOpened} message={message} />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="h-screen flex relative flex-col text-center md:text-left px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="pageTitle">Contato</h3>

        <div className="flex flex-col space-y-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-y-2 flex-col md:space-x-2 md:space-y-0 md:flex-row">
              <input
                {...register("name", { required: true })}
                placeholder="Nome"
                className="contactInput"
                type="text"
                required
              />
              <input
                {...register("email", { required: true })}
                placeholder="E-mail"
                className="contactInput"
                type="email"
                required
              />
            </div>
            <input
              {...register("subject", { required: true })}
              placeholder="Título"
              className="contactInput"
              type="text"
              required
            />
            <textarea
              {...register("message", { required: true })}
              placeholder="Mensagem"
              className="contactInput"
              required
            />
            <button
              type="submit"
              className="border border-green rounded-md px-8 py-2 hover:bg-green duration-300 hover:text-neon font-bold"
            >
              Enviar
            </button>
          </form>
          <div className="space-y-2">
            <p className="text-start">Se preferir:</p>
            <div className="flex flex-row gap-8">
              <a href="https://www.linkedin.com/in/lugonpedro/">
                <AiFillLinkedin className="h-8 w-8 md:h-16 md:w-16" />
              </a>
              <a href="https://github.com/lugonpedro/">
                <AiFillGithub className="h-8 w-8 md:h-16 md:w-16" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
