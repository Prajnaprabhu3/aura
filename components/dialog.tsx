"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import UploadImage from "./upload-image";
import { Image as ImageIcon } from "lucide-react";

const UploadDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleUploadComplete = () => {
    setIsOpen(false);
  };
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="flex items-center gap-x-1">
          <ImageIcon size={15} />
          Upload
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="dark:bg-primaryDark bg-gray-100 flex flex-col justify-center items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[450px] w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-xl p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Close asChild>
            <button
              className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-secondaryDark focus:shadow-gray-200 dark:focus:shadow-secondaryDark absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>

          <UploadImage onImageUpload={handleUploadComplete} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default UploadDialog;
