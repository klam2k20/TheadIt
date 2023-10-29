import Modal from "@/components/Modal";
import SignInBox from "@/components/SignInBox";

const page = () => {
  return (
    <Modal>
      <SignInBox isSignIn={false} />
    </Modal>
  );
};

export default page;
