import React from 'react';

const BackgroundLogo = () => {

    //CSS Classes
    const logoInstance = (<div className="text-box w-full">
                            <h1 className="background-logo__header w-full text-center uppercase tracking-widest">Coldpress Records</h1>
                            <h1 className="background-logo__header w-full text-center uppercase tracking-widest">Coldpress Records</h1>
                        </div>)
    //

    return (
        <div className="background-logo__container fixed w-full">
            {logoInstance}
        </div>
    );
}

export default BackgroundLogo;