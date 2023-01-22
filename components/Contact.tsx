import React, { useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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

  const { t } = useTranslation();

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
        className="h-screen flex relative flex-col text-center md:text-left px-10 justify-center mx-auto items-center space-y-16"
      >
        <h3 className="pageTitle">{t("contact.title")}</h3>

        <div className="flex flex-col space-y-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-y-2 flex-col md:space-x-2 md:space-y-0 md:flex-row">
              <motion.input
                {...register("name", { required: true })}
                placeholder={t("contact.name")!}
                className="contactInput"
                type="text"
                required
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              />
              <motion.input
                {...register("email", { required: true })}
                placeholder="Email"
                className="contactInput"
                type="email"
                required
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.input
              {...register("subject", { required: true })}
              placeholder={t("contact.subject")!}
              className="contactInput"
              type="text"
              required
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            />
            <motion.textarea
              {...register("message", { required: true })}
              placeholder={t("contact.message")!}
              className="contactInput"
              required
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            />
            <motion.button
              type="submit"
              className="border border-green rounded-md px-8 py-2 hover:bg-green duration-300 hover:text-neon font-bold"
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              {t("contact.button")}
            </motion.button>
          </form>
          <motion.div
            className="space-y-2"
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2, delay: 2 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-start">{t("contact.prefer")}</p>
            <div className="flex flex-row gap-8 ">
              <a
                href="https://www.linkedin.com/in/lugonpedro/"
                className="text-4xl md:text-5xl xl:text-6xl hover:-translate-y-2 duration-300"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/lugonpedro/"
                className="text-4xl md:text-5xl xl:text-6xl hover:-translate-y-2 duration-300"
              >
                <AiFillGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
