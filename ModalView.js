import { View } from "./View";

export class ModalView extends View {
  render({ modalModel }) {
    const { template, data } = modalModel;

    if (!data.isOpen) return "";

    return `
              <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-black/[0.5]">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-slate-700 rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 border-b border-slate-500 rounded-t">
              <h3 class="text-xl font-semibold text-white">
                ----
              </h3>
              <button class="close-modal text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                x
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
              ---
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-slate-500 rounded-b">
              <button class="success-btn text-white bg-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">--</button>
              <button class="close-modal py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">--</button>
            </div>
          </div>
          </div>
        </div>
    `;
  }
}
