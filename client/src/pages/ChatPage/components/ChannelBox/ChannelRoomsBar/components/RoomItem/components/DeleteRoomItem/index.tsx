import axios from "axios";
import { forwardRef } from "react";
import { API_URLS } from "../../../../../../../../../constants";
import { ContextMenuItem } from "../../../../../../../../../modals/ContextMenu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeading,
  DialogDescription,
  DialogClose,
  DialogButton,
} from "../../../../../../../../../modals/DefaultModal";

const DeleteRoomItem = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    roomId: number;
  }
>(function DeleteRoomItem({ roomId, label }) {
  const onDeleteRoom = () => {
    axios
      .post(API_URLS.api.DELETE_ROOM(roomId), {}, { withCredentials: true })
      .catch((e) => console.log(e));
  };

  return (
    <Dialog>
      <DialogTrigger asChild={true}>
        <ContextMenuItem
          label={label}
          color="text-red-500 enabled:hover:bg-red-500"
        />
      </DialogTrigger>
      <DialogContent
        className="flex flex-col max-w-[35%] bg-gray-700 rounded-[3px] text-gray-400
                font-sans text-sm"
      >
        <DialogHeading className="mt-4 mb-2 mx-4 text-lg font-semibold">
          Delete
        </DialogHeading>
        <DialogDescription className="mb-4 mx-4">
          Are you sure you want to delete this room? All related data including
          messages will be deleted.
        </DialogDescription>
        <div className="flex flex-row bg-gray-800 rounded-[3px] w-full p-4">
          <DialogClose className="hover:underline ml-auto">Cancel</DialogClose>
          <DialogButton
            className="bg-red-500 hover:opacity-90 ml-4 rounded-[3px] px-3 py-2
                        transition ease-out duration-150"
            onClick={() => onDeleteRoom()}
          >
            Delete Room
          </DialogButton>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export default DeleteRoomItem;
