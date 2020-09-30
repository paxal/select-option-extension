interface SelectOptionExtension {
    filter: () => void;
    copy: () => void;
    paste: () => void;
}

interface Window {
    __SOExtension: SelectOptionExtension;
}
