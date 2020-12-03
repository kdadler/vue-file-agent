import Vue from 'vue';
declare const _default: {
    mixins: import("vue/types/vue").ExtendedVue<Vue, {
        isEditInputFocused: boolean;
        isEditCancelable: boolean;
        fileRecord: import("../lib/file-record").default;
    }, {
        updateFileRecord(): void;
        createThumbnail(fileRecord: import("../lib/file-record").default, video: HTMLVideoElement): void;
        playAv(fileRecord: import("../lib/file-record").default): void;
        removeFileRecord(fileRecord: import("../lib/file-record").default): void;
        editFileName(): void;
        editInputFocused(): void;
        editInputBlured(): void;
        filenameChanged(completed?: boolean | undefined): void;
        filenameClearPressed(): void;
        clearFilename(): boolean;
        dismissError(): void;
    }, {
        hasLinkableUrl: boolean;
    }, Record<"averageColor" | "deletable" | "disabled" | "editable" | "errorText" | "linkable" | "thumbnailSize" | "value" | "withCredentials", any>>[];
};
export default _default;
