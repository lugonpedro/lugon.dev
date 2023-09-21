import { motion } from "framer-motion";

type Props = {
  isOpened: boolean;
  setIsOpened: (_: boolean) => void;
  message: string;
};

export default function Modal({ isOpened, setIsOpened, message }: Props) {
  return isOpened ? (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/50 h-full w-full flex items-center justify-center"
      onClick={() => setIsOpened(false)}
    >
      <div className="rounded-xl p-10">{message}</div>
    </motion.div>
  ) : (
    <></>
  );
}
