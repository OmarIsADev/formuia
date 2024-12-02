"use client";
import { MyButton } from "@/app/_css/customVariants";
import { useStore } from "@/app/_hooks/useStore";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";

const Streak = () => {
  const { streakModal, setStreakModal } = useStore();

  return (
    <div>
      <Modal
        isOpen={streakModal && true}
        onOpenChange={setStreakModal}
        size="md"
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col items-center gap-8 p-6">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-center text-6xl text-[var(--primary)]">
                      {streakModal}
                    </p>
                    <p>Days of streak!</p>
                  </div>
                  <MyButton color="violet" onClick={onClose} variant="outline">
                    close
                  </MyButton>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Streak;
