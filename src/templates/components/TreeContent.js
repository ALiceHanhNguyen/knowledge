import React from 'react';


function TreeContent({setmodalObjectContent}) {
    const handleClick = (e) => {
        const currentParentClass = e.currentTarget.parentElement.className;
        if (currentParentClass && currentParentClass.indexOf('show') !== -1) {
            e.currentTarget.parentElement.className = currentParentClass.replace(' show', '');
        } else {
            e.currentTarget.parentElement.className = currentParentClass + ' show';
        }
    }
    return (
        <div className='tree-container'>
            <div className="tree">
                <ul>
                    <li>
                        <div className='line-item'>
                            <span className='content' onClick={(e) => handleClick(e)}><i></i> Project</span>
                        </div>
                        <ul>
                            <li>
                                <div className='line-item'>
                                    <span className='content' onClick={(e) => handleClick(e)}><i></i> Opened Folder</span>
                                </div>
                                <ul>
                                    <li>
                                        <div className='line-item'>
                                            <span className='content' onClick={(e) => handleClick(e)}><i></i> css</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className='line-item'>
                                                    <span className='content'>CSS Files</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className='line-item'>
                                            <span className='content' onClick={(e) => handleClick(e)}><i></i> Folder close</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='line-item'>
                                            <span className='content'>index.html</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='line-item'>
                                            <span className='content'>favicon.ico</span>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className='line-item'>
                                    <span className='content' onClick={(e) => handleClick(e)}><i></i> Folder close</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default TreeContent;
