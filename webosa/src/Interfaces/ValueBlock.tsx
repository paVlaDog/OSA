interface ValueBlock {
    value: string[],
    setValue: (index: number) => (newVal: string) => void;
    name: string;
}

export default ValueBlock;