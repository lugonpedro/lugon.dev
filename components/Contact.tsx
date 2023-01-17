import React, { useRef } from "react";
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
  const { register, handleSubmit } = useForm<Inputs>();
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
          console.log(result.text);
          // TO-DO: Mensagem enviada com sucesso
        },
        (error) => {
          console.log(error.text);
          // TO-DO: Erro ao enviar mensagem
        }
      );
  };

  const formRef = useRef<any>();

  return (
    <>
      <Modal />
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
                {...register("name")}
                placeholder="Nome"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="E-mail"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Título"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Mensagem"
              className="contactInput"
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
