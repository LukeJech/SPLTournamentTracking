interface FormatButtonsProps {
    handleFormatChange: (format: string) => void;
}

const FormatButtons: React.FC<FormatButtonsProps> = ({handleFormatChange}) => {

    return (
        <div className="flex justify-between items-center my-4">
            <h2 className='text-orange-200 sm:text-xl md:text-2xl lg:text-4xl font-semibold'>Season 1</h2>
            <div>
            <button className="rounded border-2 bg-neutral-600 bg-opacity-10 border-neutral-50 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-base text-neutral-50 transition duration-200 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-40 hover:text-neutral-100 active:border-neutral-200 active:text-neutral-200 focus:outline-white" onClick={() => handleFormatChange('Modern')}>Modern</button>
            <button className="ml-2 rounded border-2 bg-neutral-600 bg-opacity-10 border-neutral-50 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-base text-neutral-50 transition duration-200 ease-in-out hover:border-neutral-100 hover:bg-neutral-700 hover:bg-opacity-40 hover:text-neutral-100 active:border-neutral-200 active:text-neutral-200 focus:outline-white" onClick={() => handleFormatChange('Wild')}>Wild</button>
            </div>
        </div>
    )
}

export default FormatButtons;