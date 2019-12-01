import React from 'react';

function Device({type, display}) {
    return (
        <div className="Device">
            <div className={"Device__viewer"+type}>
                <div className={"Device__content"+type}>
                    <iframe title="Fegbar Project" src={display}/>
                </div>
            </div>
        </div>                                        
    )
}
export default Device;