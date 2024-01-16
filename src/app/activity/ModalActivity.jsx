import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Upload } from "lucide-react";

export default function ModalActivity({ isOpen,onClose,onSubmit }) {

  return (
    <>
      <Modal isOpen={isOpen} size="sm">
        <ModalContent>
            <>
              <ModalHeader className="text-black lex flex-col gap-1">
                กิจกรรมลดการใช้พลังงาน
              </ModalHeader>
              <ModalBody>
                <p className="text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p className="text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                {/* upload */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-gray-400 rounded-md font-medium text-white hover:bg-green-700 p-2"
                  >
                    <div className="flex items-center gap-2">
                      <Upload size={24} />
                      <p>Upload ภาพกิจกรรม</p>
                    </div>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="text-xs text-black/60">
                    PDF, JPG, PNG up to 10MB
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onClick={() => onSubmit()}>
                  success
                </Button>
              </ModalFooter>
            </>
        </ModalContent>
      </Modal>
    </>
  );
}
