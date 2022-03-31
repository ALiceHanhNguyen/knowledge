import React from 'react';
import MathJax from 'react-mathjax2';

export const DisplayContent = ({content}) => (
    <div className='display-content'>
        <MathJax.Context input='ascii'>
            <div>
            {
                (content ? content.toString().replaceAll('margin-top: 0', 'margin-top: 0;display: inline-block;').split('-v-') : []).map((i, index) => {
                    switch(i.length > 3 && i.substring(0, 3)) {
                        case 'Fml': return <MathJax.Node inline key={index}>{ i.substring(4, i.length) }</MathJax.Node>;
                        case 'Img': return '';
                        default: return <span key={index} dangerouslySetInnerHTML={{__html: i}}/>
                    }
                })
            }
            </div>
        </MathJax.Context>
    </div>
);
