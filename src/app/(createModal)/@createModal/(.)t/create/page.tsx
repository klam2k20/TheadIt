import CreateCommunityForm from "@/components/CreateCommunityForm";
import Modal from "@/components/Modal";

const page = () => {
  return (
    <Modal className="max-w-2xl">
      <CreateCommunityForm />
    </Modal>
  );
};

export default page;
