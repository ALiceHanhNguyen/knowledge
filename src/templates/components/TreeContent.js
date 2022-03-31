import React from 'react';


export function TreeContent({data, handleClickURI}) {
    const handleClick = (e) => {
        e.currentTarget.parentElement.parentElement.classList.toggle('show');
    }
    return (
        <div className='tree-container'>
            <div className="tree">
                <ul>
                    {(data || []).map((item, index) => {
                        const level_1 = item.category;
                        const hasCategory_1 = level_1 && level_1[0] && level_1[0].uri;
                        return <li key={index}>
                            <div className={`line-item ${hasCategory_1 && 'show'}`}>
                                <span className='content'>
                                    {hasCategory_1 && <i onClick={(e) => handleClick(e)}></i>} 
                                    <span className='tree-text' onClick={(e) => handleClickURI(e, item.uri)}> {item.name}</span>
                                </span>
                            </div>
                            {hasCategory_1 && (
                                <ul>
                                    {(level_1 || []).map((lv1, ind1) => {
                                        const level_2 = lv1.category;
                                        const hasCategory_2 = level_2 && level_2[0] && level_2[0].uri;
                                        return <li key={ind1}>
                                            <div className={`line-item ${hasCategory_2 && 'show'}`}>
                                                <span className='content'>
                                                    {hasCategory_2 && <i onClick={(e) => handleClick(e)}></i>} 
                                                    <span className='tree-text' onClick={(e) => handleClickURI(e, lv1.uri)}> {lv1.name}</span>
                                                </span>
                                            </div>
                                            {hasCategory_2 && (
                                                <ul>
                                                    {(level_2 || []).map((lv2, ind2) => {
                                                        const level_3 = lv2.category;
                                                        const hasCategory_3 = level_3 && level_3[0] && level_3[0].uri;
                                                        return <li key={ind2}>
                                                            <div className={`line-item ${hasCategory_3 && 'show'}`}>
                                                                <span className='content'>
                                                                    {hasCategory_3 && <i onClick={(e) => handleClick(e)}></i>} 
                                                                    <span className='tree-text' onClick={(e) => handleClickURI(e, lv2.uri)}> {lv2.name}</span>
                                                                </span>
                                                            </div>
                                                            {hasCategory_3 && (
                                                                <ul>
                                                                    {(level_3 || []).map((lv3, ind3) => {
                                                                        const level_4 = lv3.category;
                                                                        const hasCategory_4 = level_4 && level_4[0] && level_4[0].uri;
                                                                        return <li key={ind3}>
                                                                            <div className={`line-item ${hasCategory_4 && 'show'}`}>
                                                                            <span className='content'>
                                                                                {hasCategory_4 && <i onClick={(e) => handleClick(e)}></i>} 
                                                                                <span className='tree-text' onClick={(e) => handleClickURI(e, lv3.uri)}> {lv3.name}</span>
                                                                            </span>
                                                                            </div>
                                                                        </li>
                                                                    })}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    })}
                                </ul>
                            )}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
