export function Volume() {
    return(
        <section>
            <div className="text-sm font-semibold text-center">Volume +/-</div>
            <div className="flex gap-2 items-center">

                <div className="rounded-full w-8 h-8 text-center border-gray-200 border-1 !bg-white" style={{ boxShadow: '3px 1px lightgray' }}>
                    <div className="text-2xl font-bold">+</div>
                </div>

                <div 
                    className="h-4 w-15 bg-light border-1 border-gray-200 rounded-full"
                    style={{ boxShadow: '2px 2px inset lightgray'}}
                >

                </div>

                <div className="rounded-full w-8 h-8 text-center border-gray-200 border-1 !bg-white" style={{ boxShadow: '3px 1px lightgray' }}>
                    <div className="text-2xl font-bold">-</div>
                </div>

            </div>
        </section>
    );
}