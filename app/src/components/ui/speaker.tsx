export function Speaker({ isPlaying } : { isPlaying: boolean}) {
    
    return(
        <section className="flex justify-center h-full">
            <div 
                className={ `w-[90%] h-10 rounded-sm border-gray-200 border-1 ${isPlaying ? "![background-position-y:173%]" : ""}` }
                style={{ 
                    background: 'url("/images/speaker.jpg")',
                    backgroundPositionY: '172%',
                    boxShadow: '4px 4px inset lightgray'
                }}
            >

            </div>
        </section>
    );
}