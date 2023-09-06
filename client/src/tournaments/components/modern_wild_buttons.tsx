interface FormatButtonsProps {
    handleFormatChange: (format: string) => void;
}

const FormatButtons: React.FC<FormatButtonsProps> = ({handleFormatChange}) => {

    return (
        <div className="flex justify-between items-center my-4">
            <h2 className='text-orange-200 text-4xl font-semibold'>Season 1</h2>
            <div>
            <button onClick={() => handleFormatChange('Modern')}>Modern</button>
            <button className="ml-2" onClick={() => handleFormatChange('Wild')}>Wild</button>
            </div>
        </div>
    )
}

export default FormatButtons;