import { ipcMain } from "electron";
import { IPC } from "../renderer/src/shared/constants/ipc";
import { FetchAllDocumentsResponse } from "../renderer/src/shared/types/ipc";
ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: [
        {
          id: "1",
          title: "Document 1",
          content: "Document 1 content",
        },
        {
          id: "2",
          title: "Document 2",
          content: "Document 2 content",
        },
      ],
    };
  }
);
