'use client';

import React from "react";
import { TextInput, Label } from "flowbite-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,

} from "@nextui-org/react";

export default function ModalForm({ isOpen, onClose, onSubmit }) {
  return (
    <>
      <Modal isOpen={isOpen} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-black flex-col gap-1">
                ใบสมัครเข้าร่วมโครงการ
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="ชื่อ-นามสกุล" />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    placeholder="ระบุชื่อ-นามสกุล"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="เบอร์โทรศัพท์" />
                  </div>
                  <TextInput
                    id="phone"
                    type="text"
                    placeholder="ระบุเบอร์โทรศัพท์"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="reason"
                      value="เหตุผลที่สมัครเข้าร่วมโครงการ"
                    />
                  </div>
                  <TextInput
                    id="reason"
                    type="text"
                    placeholder="ระบุเหตุผลที่สมัครเข้าร่วมโครงการ"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose}>
                  ยกเลิก
                </Button>
                <Button color="success" onPress={onSubmit}>
                  ส่งใบสมัคร
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
